
import Header from '@/components/header';
import Footer from '@/components/footer';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from 'next';
import { assets } from '@/assets/assets';

export const metadata: Metadata = {
  title: 'Mohiuddin Murad',
  description: '',
    icons: {
    icon: assets.favicon.src,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background">
        <div className="flex flex-col min-h-screen bg-background">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
