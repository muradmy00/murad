
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useActionState, useState, useEffect } from 'react';

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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { handleSignup } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff } from 'lucide-react';
import Logo from '@/components/icons/logo';

const authSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

type AuthFormValues = z.infer<typeof authSchema>;

const initialSignupState = {
    message: '',
    success: false,
};

export default function CreateAdminPage() {
  const { toast } = useToast();
  const [signupState, signupAction, isSignupPending] = useActionState(handleSignup, initialSignupState);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<AuthFormValues>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    if (signupState?.message && !signupState.success) {
      toast({
        variant: "destructive",
        title: "Signup Failed",
        description: signupState.message,
      });
    }
  }, [signupState, toast]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40 p-4">
        <div className="w-full max-w-md">
            <div className="mb-8 flex justify-center">
                <div className="flex items-center space-x-2 text-primary">
                    <Logo className="h-8 w-8" />
                    <span className="text-2xl font-bold font-headline">DevFolio Admin</span>
                </div>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Create Your Admin Account</CardTitle>
                    <CardDescription>
                        This is a one-time setup. This account will be the sole administrator for your portfolio.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                    <form action={signupAction} className="space-y-6">
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
                                </Button>
                            </div>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <Button type="submit" className="w-full" disabled={isSignupPending}>
                        {isSignupPending ? 'Creating Account...' : 'Create Admin Account'}
                        </Button>
                    </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
