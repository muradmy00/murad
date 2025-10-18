
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/skills', label: 'Skills' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/blog', label: 'Blog' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label, className, isMobile = false }: { href: string; label: string; className?: string; isMobile?: boolean}) => {
    const isActive = pathname === href;
    
    if (isMobile) {
        return (
            <Link
                href={href}
                className={cn(
                "block w-full text-left p-3 rounded-lg text-lg font-medium transition-colors",
                isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground",
                className
                )}
                onClick={() => setMobileMenuOpen(false)}
            >
                {label}
            </Link>
        )
    }
    
    return (
      <Link
        href={href}
        className={cn(
          "relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
          isActive ? "text-primary" : "text-muted-foreground",
          className
        )}
        onClick={() => setMobileMenuOpen(false)}
      >
        {label}
        {isActive && (
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-primary rounded-full"></span>
        )}
      </Link>
    );
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center">
            <span className="font-headline text-2xl font-bold">
                <span className="text-primary">M</span>
                <span className="text-accent">urad</span>
            </span>
        </Link>
        
        <div className="flex items-center">
          <nav className="hidden lg:flex items-center space-x-2 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
          <div className="lg:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                          <Menu className="h-6 w-6" />
                          <span className="sr-only">Open Menu</span>
                      </Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                    </SheetHeader>
                      <div className="p-4">
                          <Link href="/" className="mr-6 flex items-center mb-8" onClick={() => setMobileMenuOpen(false)}>
                            <span className="font-headline text-2xl font-bold">
                                <span className="text-primary">M</span>
                                <span className="text-accent">urad</span>
                            </span>
                          </Link>
                          <nav className="flex flex-col space-y-2">
                          {navLinks.map((link) => (
                              <NavLink key={link.href} {...link} isMobile={true} />
                          ))}
                          </nav>
                      </div>
                  </SheetContent>
              </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
