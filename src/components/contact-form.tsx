'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useFormState } from 'react-dom';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { handleContactForm } from '@/app/actions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, CheckCircle2, Wallet } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
  walletAddress: z.string().optional(),
  signature: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const initialState = {
    message: '',
    success: false,
    errors: null,
};

declare global {
    interface Window {
        ethereum?: any;
    }
}

export function ContactForm() {
  const [state, formAction] = useFormState(handleContactForm, initialState);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isSigning, setIsSigning] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      walletAddress: '',
      signature: '',
    },
  });

  useEffect(() => {
    if (state.success) {
      form.reset();
      setWalletAddress(null);
    }
  }, [state.success, form]);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
        form.setValue('walletAddress', accounts[0]);
      } catch (error) {
        console.error("Wallet connection failed:", error);
        form.setError('walletAddress', { type: 'manual', message: 'Failed to connect wallet.' });
      }
    } else {
      form.setError('walletAddress', { type: 'manual', message: 'MetaMask not found. Please install it.' });
    }
  };

  const signAndSubmit = async (data: ContactFormValues) => {
    if (!walletAddress) {
      // Standard form submission if wallet not connected
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value as string);
      });
      formAction(formData);
      return;
    }

    setIsSigning(true);
    try {
      const messageToSign = `I am sending a message from DevFolio Pro.\n\nName: ${data.name}\nEmail: ${data.email}`;
      const signature = await window.ethereum.request({
        method: 'personal_sign',
        params: [messageToSign, walletAddress],
      });
      form.setValue('signature', signature);
      
      const formData = new FormData();
      Object.entries({...data, signature, walletAddress}).forEach(([key, value]) => {
        if (value) formData.append(key, value as string);
      });
      formAction(formData);

    } catch (error) {
      console.error('Signing failed:', error);
      form.setError('signature', { type: 'manual', message: 'Message signing failed.' });
    } finally {
        setIsSigning(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Send a Message</CardTitle>
        <CardDescription>Fill out the form below or connect your wallet to send a signed message.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(signAndSubmit)} className="space-y-4">
            <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl><Input placeholder="Your Name" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl><Input type="email" placeholder="your@email.com" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl><Textarea placeholder="Your message..." {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {!walletAddress ? (
                <Button type="button" variant="secondary" className="w-full" onClick={connectWallet}>
                    <Wallet className="mr-2 h-4 w-4" /> Connect Wallet for Web3 Contact
                </Button>
            ) : (
                <div className="p-3 bg-muted rounded-md text-sm text-center">
                    <p>Wallet Connected:</p>
                    <p className="font-mono text-xs truncate">{walletAddress}</p>
                </div>
            )}
            
            {form.formState.errors.walletAddress && <FormMessage>{form.formState.errors.walletAddress.message}</FormMessage>}
            {form.formState.errors.signature && <FormMessage>{form.formState.errors.signature.message}</FormMessage>}

            {state?.message && (
                <Alert variant={state.success ? 'default' : 'destructive'} className={state.success ? 'bg-green-50 border-green-200' : ''}>
                    {state.success ? <CheckCircle2 className="h-4 w-4" /> : <Terminal className="h-4 w-4" />}
                    <AlertTitle>{state.success ? 'Success!' : 'Error'}</AlertTitle>
                    <AlertDescription>{state.message}</AlertDescription>
                </Alert>
            )}

            <Button type="submit" className="w-full" disabled={isSigning}>
              {walletAddress ? (isSigning ? 'Signing...' : 'Sign & Send Message') : 'Send Message'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
