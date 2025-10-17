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
import { handleLogin, handleSignup } from '@/app/actions';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const initialState = {
    message: '',
    success: false,
};


export function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginState, loginAction] = useActionState(handleLogin, initialState);
  const [signupState, signupAction] = useActionState(handleSignup, initialState);

  const state = isLogin ? loginState : signupState;
  const formAction = isLogin ? loginAction : signupAction;

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{isLogin ? 'Admin Login' : 'Admin Signup'}</CardTitle>
        <CardDescription>{isLogin ? 'Enter your credentials to access the dashboard.' : 'Create an admin account to get started.'}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form action={formAction} className="space-y-6">
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
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {state?.message && !state.success && (
                <Alert variant="destructive">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                        {state.message}
                    </AlertDescription>
                </Alert>
            )}

            <Button type="submit" className="w-full">
              {isLogin ? 'Login' : 'Sign Up'}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="text-sm">
        <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <Button variant="link" onClick={() => setIsLogin(!isLogin)} className="p-1">
                {isLogin ? 'Sign up' : 'Login'}
            </Button>
        </p>
      </CardFooter>
    </Card>
  );
}
