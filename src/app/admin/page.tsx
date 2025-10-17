import { LoginForm } from './_components/login-form';
import Logo from '@/components/icons/logo';
import { getApps, initializeApp, getApp } from 'firebase/app';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { firebaseConfig } from '@/firebase/config';

// Server-side Firebase initialization
function initializeFirebaseAdmin() {
  if (!getApps().length) {
    return initializeApp(firebaseConfig);
  }
  return getApp();
}

const app = initializeFirebaseAdmin();
const firestore = getFirestore(app);

async function hasAdminAccount(): Promise<boolean> {
    try {
        const adminRolesCollection = collection(firestore, 'roles_admin');
        const adminSnapshot = await getDocs(adminRolesCollection);
        return !adminSnapshot.empty;
    } catch (error) {
        console.error("Failed to check for admin account:", error);
        // In case of error (e.g., Firestore not set up), assume no admin exists to prompt creation.
        return false;
    }
}


export default async function AdminLoginPage() {
  const adminExists = await hasAdminAccount();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40 p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
            <div className="flex items-center space-x-2 text-primary">
                <Logo className="h-8 w-8" />
                <span className="text-2xl font-bold font-headline">Mohiuddin Murad Admin</span>
            </div>
        </div>
        <LoginForm hasAdminBeenCreated={adminExists} />
      </div>
    </div>
  );
}
