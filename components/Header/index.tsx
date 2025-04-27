'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Logo } from '@/components/Logo';
import { MobileNav } from './MobileNav';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-10 w-10" />
          <span className="font-heading font-bold text-lg">
            Singerkone <span className="text-primary">Ashram</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/events">Events</NavItem>
          <NavItem href="/gallery">Gallery</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild className="hidden md:flex">
            <Link href="/admin">
              <LogIn className="mr-2 h-4 w-4" />
              Admin
            </Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="relative font-medium text-foreground transition-colors hover:text-primary
        after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary
        after:transition-all hover:after:w-full"
    >
      {children}
    </Link>
  );
}