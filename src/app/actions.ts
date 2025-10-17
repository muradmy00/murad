
'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { z } from 'zod';
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updatePassword,
  updateEmail,
  reauthenticateWithCredential,
  EmailAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { initializeFirebase } from '@/firebase';
import { collection, addDoc, serverTimestamp, doc, setDoc, getDocs } from 'firebase/firestore';

const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const passwordResetSchema = z.object({
    email: z.string().email(),
});


async function setAuthCookie(token: string) {
    cookies().set('devfolio-auth-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24, // 1 day
        path: '/',
    });
}

export async function handleSignup(prevState: any, formData: FormData) {
  try {
    const parsed = authSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    const { auth, firestore } = initializeFirebase();

    // Check if any admin user already exists.
    const adminRolesCollection = collection(firestore, 'roles_admin');
    const adminSnapshot = await getDocs(adminRolesCollection);

    const userCredential = await createUserWithEmailAndPassword(auth, parsed.email, parsed.password);
    const user = userCredential.user;

    // If no admin exists, make this new user an admin.
    if (adminSnapshot.empty) {
        await setDoc(doc(firestore, 'roles_admin', user.uid), { isAdmin: true });
    }
    
    const token = await user.getIdToken();
    await setAuthCookie(token);

  } catch (e: any) {
    let message = 'An unexpected error occurred.';
    if (e instanceof z.ZodError) {
        message = 'Invalid form data.';
    } else if (e.code) {
        switch (e.code) {
            case 'auth/email-already-in-use':
                message = 'This email is already registered.';
                break;
            case 'auth/weak-password':
                message = 'The password is too weak.';
                break;
            default:
                message = 'An unknown error occurred during signup.';
        }
    }
    return { message, success: false };
  }

  redirect('/admin/dashboard');
}


export async function handleLogin(prevState: any, formData: FormData) {
  try {
    const parsed = authSchema.parse({
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

export async function handlePasswordReset(prevState: any, formData: FormData) {
    try {
        const parsed = passwordResetSchema.parse({
            email: formData.get('email'),
        });

        const { auth } = initializeFirebase();
        await sendPasswordResetEmail(auth, parsed.email);

        return { message: 'If an account exists for this email, a password reset link has been sent.', success: true };
    } catch (e) {
        if (e instanceof z.ZodError) {
            return { message: 'Please enter a valid email address.', success: false };
        }
        console.error('Password reset error:', e);
        // Avoid disclosing whether an email exists or not
        return { message: 'If an account exists for this email, a password reset link has been sent.', success: true };
    }
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

const updateEmailSchema = z.object({
  newEmail: z.string().email(),
  currentPassword: z.string().min(1, 'Password is required'),
});

const updatePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, 'Current password is required'),
    newPassword: z.string().min(6, 'New password must be at least 6 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "New passwords don't match",
    path: ['confirmPassword'],
  });

async function reauthenticate(password: string) {
    const { auth } = initializeFirebase();
    const user = auth.currentUser;
    if (!user || !user.email) throw new Error('User not authenticated');

    const credential = EmailAuthProvider.credential(user.email, password);
    await reauthenticateWithCredential(user, credential);
}

export async function handleUpdateEmail(prevState: any, formData: FormData) {
    try {
        const parsed = updateEmailSchema.parse({
            newEmail: formData.get('newEmail'),
            currentPassword: formData.get('currentPassword'),
        });
        
        const { auth } = initializeFirebase();
        const user = auth.currentUser;
        if (!user) throw new Error('User not authenticated');

        await reauthenticate(parsed.currentPassword);
        await updateEmail(user, parsed.newEmail);

        return { message: 'Your email has been updated successfully.', success: true };
    } catch (e: any) {
        let message = 'An unexpected error occurred.';
         if (e instanceof z.ZodError) {
            return { message: 'Invalid data provided.', success: false, errors: e.flatten().fieldErrors };
        } else if (e.code) {
            switch (e.code) {
                case 'auth/invalid-credential':
                case 'auth/wrong-password':
                    message = 'The password you entered is incorrect.';
                    break;
                case 'auth/email-already-in-use':
                    message = 'This email is already in use by another account.';
                    break;
                default:
                    message = e.message;
            }
        }
        return { message, success: false };
    }
}

export async function handleUpdatePassword(prevState: any, formData: FormData) {
     try {
        const parsed = updatePasswordSchema.parse({
            currentPassword: formData.get('currentPassword'),
            newPassword: formData.get('newPassword'),
            confirmPassword: formData.get('confirmPassword'),
        });
        
        const { auth } = initializeFirebase();
        const user = auth.currentUser;
        if (!user) throw new Error('User not authenticated');

        await reauthenticate(parsed.currentPassword);
        await updatePassword(user, parsed.newPassword);

        return { message: 'Your password has been updated successfully.', success: true };
    } catch (e: any) {
        let message = 'An unexpected error occurred.';
        if (e instanceof z.ZodError) {
            return { message: 'Invalid data provided.', success: false, errors: e.flatten().fieldErrors };
        } else if (e.code === 'auth/invalid-credential' || e.code === 'auth/wrong-password') {
             message = 'The password you entered is incorrect.';
        } else {
             message = e.message || message;
        }
        return { message, success: false };
    }
}
