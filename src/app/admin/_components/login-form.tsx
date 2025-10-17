'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useActionState, useState } from 'react';

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
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, CheckCircle2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

const passwordResetSchema = z.object({
    email: z.string().email({ message: 'Invalid email address.' }),
});

type LoginFormValues = z.infer<typeof loginSchema>;
type PasswordResetFormValues = z.infer<typeof passwordResetSchema>;

const initialLoginState = {
    message: '',
    success: false,
};

const initialResetState = {
    message: '',
    success: false,
};


export function LoginForm() {
  const [loginState, loginAction] = useActionState(handleLogin, initialLoginState);
  const [resetState, resetAction] = useActionState(handlePasswordReset, initialResetState);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const resetForm = useForm<PasswordResetFormValues>({
      resolver: zodResolver(passwordResetSchema),
      defaultValues: { email: '' },
  });

  return (
    <>
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Admin Login</CardTitle>
        <CardDescription>Enter your credentials to access the dashboard.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...loginForm}>
          <form action={loginAction} className="space-y-6">
            <FormField
              control={loginForm.control}
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
              control={loginForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {loginState?.message && !loginState.success && (
                <Alert variant="destructive">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Login Failed</AlertTitle>
                    <AlertDescription>
                        {loginState.message}
                    </AlertDescription>
                </Alert>
            )}

            <Button type="submit" className="w-full">
              Login
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
                    
                    {resetState?.message && (
                        <Alert variant={resetState.success ? 'default' : 'destructive'} className={resetState.success ? 'bg-green-50 border-green-200' : ''}>
                            {resetState.success ? <CheckCircle2 className="h-4 w-4" /> : <Terminal className="h-4 w-4" />}
                            <AlertTitle>{resetState.success ? 'Check your inbox' : 'Error'}</AlertTitle>
                            <AlertDescription>{resetState.message}</AlertDescription>
                        </Alert>
                    )}
                    
                    <DialogFooter>
                        <Button type="submit">Submit</Button>
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