
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useActionState, useState, useEffect } from 'react';
import Link from 'next/link';

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
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { handleLogin, handlePasswordReset } from '@/app/actions';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';


const authSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

const passwordResetSchema = z.object({
    email: z.string().email({ message: 'Invalid email address.' }),
});

type AuthFormValues = z.infer<typeof authSchema>;
type PasswordResetFormValues = z.infer<typeof passwordResetSchema>;

const initialAuthState = {
    message: '',
    success: false,
};

const initialResetState = {
    message: '',
    success: false,
};


export function LoginForm({ hasAdminBeenCreated }: { hasAdminBeenCreated: boolean }) {
  const { toast } = useToast();
  const [loginState, loginAction, isLoginPending] = useActionState(handleLogin, initialAuthState);
  const [resetState, resetAction, isResetPending] = useActionState(handlePasswordReset, initialResetState);
  
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<AuthFormValues>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const resetForm = useForm<PasswordResetFormValues>({
      resolver: zodResolver(passwordResetSchema),
      defaultValues: { email: '' },
  });

  useEffect(() => {
    if (loginState?.message && !loginState.success) {
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: loginState.message,
      });
    }
  }, [loginState, toast]);

  useEffect(() => {
    if (resetState?.message) {
      toast({
        variant: resetState.success ? "default" : "destructive",
        title: resetState.success ? "Check your inbox" : "Error",
        description: resetState.message,
      });
      if (resetState.success) {
        setIsForgotPassword(false);
      }
    }
  }, [resetState, toast]);

  if (!hasAdminBeenCreated) {
    return (
        <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Admin Account Required</AlertTitle>
            <AlertDescription>
                No admin account exists. Please <Link href="/admin/create-admin" className="font-bold underline">create one now</Link> to secure your application.
            </AlertDescription>
        </Alert>
    )
  }

  return (
    <>
    <Card>
        <CardHeader>
            <CardTitle className="font-headline text-2xl">Admin Login</CardTitle>
            <CardDescription>Enter your credentials to access the dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form action={loginAction} className="space-y-6">
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input type="email" placeholder="admin@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Password</FormLabel>
                    <div className="relative">
                        <FormControl>
                            <Input type={showPassword ? 'text' : 'password'} placeholder="••••••••" {...field} />
                        </FormControl>
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute inset-y-0 right-0 h-full px-3"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            <span className="sr-only">{showPassword ? 'Hide password' : 'Show password'}</span>
                        </Button>
                    </div>
                    <FormMessage />
                    </FormItem>
                )}
                />
                
                <Button type="submit" className="w-full" disabled={isLoginPending}>
                {isLoginPending ? 'Logging in...' : 'Login'}
                </Button>
            </form>
            </Form>
        </CardContent>
        <CardFooter className="flex-col items-start text-sm">
            <Button variant="link" onClick={() => setIsForgotPassword(true)} className="p-0">
            Forgot Password?
            </Button>
        </CardFooter>
    </Card>

    <Dialog open={isForgotPassword} onOpenChange={setIsForgotPassword}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Reset Password</DialogTitle>
                <DialogDescription>
                    Enter your email address and we'll send you a link to reset your password.
                </DialogDescription>
            </DialogHeader>
            <Form {...resetForm}>
                <form action={resetAction} className="space-y-4">
                    <FormField
                        control={resetForm.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="your.email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    <DialogFooter>
                        <Button type="submit" disabled={isResetPending}>
                          {isResetPending ? 'Sending...' : 'Submit'}
                        </Button>
                        <DialogClose asChild>
                            <Button type="button" variant="secondary">Close</Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </Form>
        </DialogContent>
    </Dialog>
    </>
  );
}
