'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { z } from 'zod';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { initializeFirebase } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

async function setAuthCookie(token: string) {
    cookies().set('devfolio-auth-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24, // 1 day
        path: '/',
    });
}


export async function handleLogin(prevState: any, formData: FormData) {
  try {
    const parsed = loginSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    const { auth } = initializeFirebase();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      parsed.email,
      parsed.password
    );
    const token = await userCredential.user.getIdToken();
    await setAuthCookie(token);

  } catch (e: any) {
    let message = 'An unexpected error occurred.';
    if (e instanceof z.ZodError) {
        message = 'Invalid form data.';
    } else if (e.code) {
        switch (e.code) {
            case 'auth/user-not-found':
            case 'auth/wrong-password':
            case 'auth/invalid-credential':
                message = 'Invalid email or password.';
                break;
            default:
                message = 'An unknown error occurred during login.';
        }
    }
    return { message, success: false };
  }

  redirect('/admin/dashboard');
}

export async function handleSignup(prevState: any, formData: FormData) {
    try {
      const parsed = signupSchema.parse({
        email: formData.get('email'),
        password: formData.get('password'),
      });
  
      const { auth } = initializeFirebase();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        parsed.email,
        parsed.password
      );
      const token = await userCredential.user.getIdToken();
      await setAuthCookie(token);
      
    } catch (e: any) {
      let message = 'An unexpected error occurred.';
      if (e instanceof z.ZodError) {
          message = 'Invalid form data.';
      } else if (e.code === 'auth/email-already-in-use') {
          message = 'This email is already registered. Please login instead.';
      } else {
        message = 'An unknown error occurred during sign-up.';
      }
      return { message, success: false };
    }
  
    redirect('/admin/dashboard');
}

export async function logout() {
    cookies().delete('devfolio-auth-token');
    redirect('/admin');
}

const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(10),
    walletAddress: z.string().optional(),
    signature: z.string().optional(),
});

export async function handleContactForm(prevState: any, formData: FormData) {
    try {
        const parsed = contactSchema.parse({
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
            walletAddress: formData.get('walletAddress'),
            signature: formData.get('signature'),
        });
        
        const { firestore } = initializeFirebase();
        await addDoc(collection(firestore, 'contact_messages'), {
            ...parsed,
            sentDate: serverTimestamp(),
        });
        
        return { message: 'Thank you! Your message has been sent successfully.', success: true };
    } catch (e) {
        if (e instanceof z.ZodError) {
            return { message: 'Invalid form data. Please check your entries.', success: false, errors: e.flatten().fieldErrors };
        }
        console.error('Contact form submission error:', e);
        return { message: 'An unexpected error occurred while sending your message.', success: false };
    }
}
