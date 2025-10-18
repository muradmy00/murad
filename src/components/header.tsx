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
  { href: '/contact', label: 'Contact' },
];

const NavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void; }) => {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
        isActive ? "text-primary" : "text-muted-foreground"
      )}
      onClick={onClick}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-primary rounded-full"></span>
      )}
    </Link>
  );
};

const MobileNavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void; }) => {
    const pathname = usePathname();
    const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));

    return (
         <Link
            href={href}
            className={cn(
            "block w-full text-left p-3 rounded-lg font-medium transition-colors text-base",
            isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
            )}
            onClick={onClick}
        >
            {label}
        </Link>
    )
}

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center">
            <span className="font-headline text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary-foreground animate-gradient-x">
              Murad
            </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Open Menu</span>
                  </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0">
                  <SheetHeader className="p-4 border-b">
                      <SheetTitle>
                          <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                            <span className="font-headline text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary-foreground animate-gradient-x">
                              Murad
                            </span>
                          </Link>
                      </SheetTitle>
                  </SheetHeader>
                  <div className="p-4">
                      <nav className="flex flex-col space-y-1">
                      {navLinks.map((link) => (
                          <MobileNavLink key={link.href} {...link} onClick={() => setMobileMenuOpen(false)} />
                      ))}
                      </nav>
                  </div>
              </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
