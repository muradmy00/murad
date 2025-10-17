
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getApps, initializeApp, getApp } from 'firebase/app';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { firebaseConfig } from './firebase/config';

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
        console.error("Middleware check for admin account failed:", error);
        return false;
    }
}

export async function middleware(request: NextRequest) {
  const authToken = request.cookies.get('devfolio-auth-token')?.value;
  const { pathname } = request.nextUrl;

  const adminExists = await hasAdminAccount();

  // If no admin exists, allow access only to the create-admin page, and redirect all other /admin routes there.
  if (!adminExists) {
    if (pathname.startsWith('/admin') && pathname !== '/admin/create-admin') {
      return NextResponse.redirect(new URL('/admin/create-admin', request.url));
    }
     return NextResponse.next();
  }
  
  // If admin exists, block access to create-admin page.
  if (adminExists && pathname === '/admin/create-admin') {
      return NextResponse.redirect(new URL('/admin', request.url));
  }
  
  // If admin exists, enforce authentication for admin routes.
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/create-admin') && pathname !== '/admin' && !authToken) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }
  
  // If user is authenticated and tries to access the login page, redirect to dashboard.
  if (pathname === '/admin' && authToken) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
