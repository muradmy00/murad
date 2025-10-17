import { LoginForm } from './_components/login-form';
import Logo from '@/components/icons/logo';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40 p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
            <div className="flex items-center space-x-2 text-primary">
                <Logo className="h-8 w-8" />
                <span className="text-2xl font-bold font-headline">Mohiuddin Murad Admin</span>
            </div>
        </div>
        <LoginForm />
        <Alert className="mt-4">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Development Login</AlertTitle>
            <AlertDescription>
                <p>Email: <span className="font-mono">admin@example.com</span></p>
                <p>Password: <span className="font-mono">password</span></p>
            </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
