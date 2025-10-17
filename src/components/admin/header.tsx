
'use client';
import Link from 'next/link';
import {
  Home,
  Briefcase,
  Lightbulb,
  FileText,
  Contact,
  GraduationCap,
  PanelLeft,
  Search
} from 'lucide-react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation';
import { logout } from '@/app/actions';

const navItems = [
  { href: '/admin/dashboard', icon: Home, label: 'Dashboard' },
  { href: '/admin/projects', icon: Briefcase, label: 'Projects' },
  { href: '/admin/experience', icon: GraduationCap, label: 'Experience' },
  { href: '/admin/skills', icon: Lightbulb, label: 'Skills' },
  { href: '/admin/blog', icon: FileText, label: 'Blog' },
  { href: '/admin/messages', icon: Contact, label: 'Messages' },
];

export default function Header() {
    const pathname = usePathname();
    const pathParts = pathname.split('/').filter(Boolean);

    return (
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                >
                  <Briefcase className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span className="sr-only">DevFolio Pro</span>
                </Link>
                {navItems.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  >
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/admin/dashboard">Admin</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {pathParts.slice(1).map((part, index) => (
                <BreadcrumbSeparator key={index}>
                    <BreadcrumbItem>
                        {index < pathParts.length - 2 ? (
                            <BreadcrumbLink asChild>
                                <Link href={`/${pathParts.slice(0, index + 2).join('/')}`}>
                                    {part.charAt(0).toUpperCase() + part.slice(1)}
                                </Link>
                            </BreadcrumbLink>
                        ) : (
                            <BreadcrumbPage>
                                {part.charAt(0).toUpperCase() + part.slice(1)}
                            </BreadcrumbPage>
                        )}
                    </BreadcrumbItem>
                </BreadcrumbSeparator>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <img
                  src="https://picsum.photos/seed/avatar/36/36"
                  width={36}
                  height={36}
                  alt="Avatar"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <form action={logout} className="w-full">
                    <button type="submit" className="w-full text-left">Logout</button>
                </form>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
    )
}
