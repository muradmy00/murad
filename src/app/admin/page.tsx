import { LoginForm } from './_components/login-form';
import Logo from '@/components/icons/logo';

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
      </div>
    </div>
  );
}