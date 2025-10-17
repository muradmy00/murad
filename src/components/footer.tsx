import Link from 'next/link';
import { Github, Twitter, Linkedin } from 'lucide-react';
import Logo from '@/components/icons/logo';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: '#', 'aria-label': 'GitHub' },
    { icon: Twitter, href: '#', 'aria-label': 'Twitter' },
    { icon: Linkedin, href: '#', 'aria-label': 'LinkedIn' },
  ];

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Logo className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">DevFolio Pro</span>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-muted-foreground hover:text-primary" aria-label={link['aria-label']}>
                <link.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center text-muted-foreground text-sm mt-8 pt-8 border-t">
          © {new Date().getFullYear()} DevFolio Pro. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
