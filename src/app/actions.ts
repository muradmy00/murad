'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export async function handleLogin(prevState: any, formData: FormData) {
  try {
    const parsed = loginSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    // Mock authentication logic
    if (parsed.email === 'admin@example.com' && parsed.password === 'password') {
      cookies().set('devfolio-auth-token', 'mock-token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24, // 1 day
        path: '/',
      });
    } else {
        return { message: 'Invalid email or password.', success: false };
    }
  } catch (e) {
    return { message: 'Invalid form data.', success: false };
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
        
        console.log('New contact message received:');
        console.log(parsed);

        // Here you would typically:
        // 1. If walletAddress and signature are present, verify the signature.
        //    const signerAddr = ethers.verifyMessage(message, signature);
        //    if (signerAddr.toLowerCase() !== walletAddress.toLowerCase()) { ... }
        // 2. Save the message to your database.
        
        return { message: 'Thank you! Your message has been sent successfully.', success: true };
    } catch (e) {
        if (e instanceof z.ZodError) {
            return { message: 'Invalid form data. Please check your entries.', success: false, errors: e.flatten().fieldErrors };
        }
        return { message: 'An unexpected error occurred.', success: false };
    }
}
