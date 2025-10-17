
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useActionState, useEffect } from 'react';
import { useUser } from '@/firebase';
import { useToast } from '@/hooks/use-toast';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { handleUpdateEmail, handleUpdatePassword } from '@/app/actions';

const updateEmailSchema = z.object({
  newEmail: z.string().email(),
  currentPassword: z.string().min(1, 'Password is required to confirm changes.'),
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

type UpdateEmailFormValues = z.infer<typeof updateEmailSchema>;
type UpdatePasswordFormValues = z.infer<typeof updatePasswordSchema>;

const initialFormState = {
  message: '',
  success: false,
  errors: null,
};

export default function SettingsPage() {
  const { user } = useUser();
  const { toast } = useToast();
  const [emailState, emailFormAction, isEmailPending] = useActionState(handleUpdateEmail, initialFormState);
  const [passwordState, passwordFormAction, isPasswordPending] = useActionState(handleUpdatePassword, initialFormState);

  const emailForm = useForm<UpdateEmailFormValues>({
    resolver: zodResolver(updateEmailSchema),
    defaultValues: {
      newEmail: user?.email || '',
      currentPassword: '',
    },
  });

  const passwordForm = useForm<UpdatePasswordFormValues>({
    resolver: zodResolver(updatePasswordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  useEffect(() => {
    if (user?.email) {
      emailForm.reset({ newEmail: user.email, currentPassword: '' });
    }
  }, [user, emailForm]);

  useEffect(() => {
    if (emailState.message) {
      toast({
        variant: emailState.success ? 'default' : 'destructive',
        title: emailState.success ? 'Success' : 'Error',
        description: emailState.message,
      });
    }
    if (emailState.success) {
      emailForm.reset({ ...emailForm.getValues(), currentPassword: '' });
    }
  }, [emailState, emailForm, toast]);

  useEffect(() => {
    if (passwordState.message) {
      toast({
        variant: passwordState.success ? 'default' : 'destructive',
        title: passwordState.success ? 'Success' : 'Error',
        description: passwordState.message,
      });
    }
    if (passwordState.success) {
      passwordForm.reset();
    }
  }, [passwordState, passwordForm, toast]);

  return (
    <div className="grid gap-6">
      <h1 className="font-headline text-3xl font-bold">Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Email Address</CardTitle>
          <CardDescription>Update the email address associated with your admin account.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...emailForm}>
            <form action={emailFormAction} className="space-y-4">
              <FormField
                control={emailForm.control}
                name="newEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Email</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={emailForm.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter password to confirm" {...field} />
                    </FormControl>
                    <FormDescription>For security, please confirm your password to make changes.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isEmailPending}>
                {isEmailPending ? 'Updating...' : 'Update Email'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>Change your account password.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...passwordForm}>
            <form action={passwordFormAction} className="space-y-4">
              <FormField
                control={passwordForm.control}
                name="currentPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={passwordForm.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={passwordForm.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm New Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPasswordPending}>
                {isPasswordPending ? 'Updating...' : 'Update Password'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
