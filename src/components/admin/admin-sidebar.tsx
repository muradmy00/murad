'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
    Home,
    Briefcase,
    Lightbulb,
    FileText,
    Contact,
    GraduationCap,
    LogOut,
    Settings
} from 'lucide-react'
import Logo from '@/components/icons/logo';
import { cn } from '@/lib/utils';
import { logout } from '@/app/actions';

const navItems = [
  { href: '/admin/dashboard', icon: Home, label: 'Dashboard' },
  { href: '/admin/projects', icon: Briefcase, label: 'Projects' },
  { href: '/admin/experience', icon: GraduationCap, label: 'Experience' },
  { href: '/admin/skills', icon: Lightbulb, label: 'Skills' },
  { href: '/admin/blog', icon: FileText, label: 'Blog' },
  { href: '/admin/messages', icon: Contact, label: 'Messages' },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <TooltipProvider>
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <Link
                href="/admin/dashboard"
                className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
                <Logo className="h-4 w-4 transition-all group-hover:scale-110" />
                <span className="sr-only">DevFolio Pro</span>
            </Link>
          {navItems.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn("flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8", 
                  pathname.startsWith(item.href) ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground')}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{item.label}</TooltipContent>
            </Tooltip>
          ))}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <form action={logout}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button type="submit" className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8">
                            <LogOut className="h-5 w-5" />
                            <span className="sr-only">Logout</span>
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="right">Logout</TooltipContent>
                </Tooltip>
            </form>
        </nav>
      </TooltipProvider>
    </aside>
  );
}
