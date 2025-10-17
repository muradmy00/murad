import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('devfolio-auth-token')?.value;

  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin') && pathname !== '/admin' && !authToken) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }
  
  if (pathname === '/admin' && authToken) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
