
import Link from 'next/link';
import { Github, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/muradmy00', 'aria-label': 'GitHub' },
    { icon: Facebook, href: 'https://www.facebook.com/mdmohiudden.murad/', 'aria-label': 'Facebook' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/murad00/', 'aria-label': 'LinkedIn' },
  ];

  return (
    <footer className="border-t border-primary/20 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Name */}
          <div className="flex items-center">
             <span className="font-headline text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Mohiuddin Murad
            </span>
          </div>

          {/* Copyright */}
          <div className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Mohiuddin Murad. All Rights Reserved.
          </div>

          {/* Socials Section */}
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.href} 
                aria-label={link['aria-label']}
                className="w-10 h-10 bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300"
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
