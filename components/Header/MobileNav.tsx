'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
        <Menu className="h-6 w-6" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
          <div className="container flex h-full flex-col">
            <div className="flex items-center justify-between py-4">
              <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
                <Logo className="h-10 w-10" />
                <span className="font-heading font-bold text-lg">
                  Singerkone <span className="text-primary">Ashram</span>
                </span>
              </Link>
              <Button variant="ghost" size="icon" onClick={closeMenu} aria-label="Close menu">
                <X className="h-6 w-6" />
              </Button>
            </div>

            <nav className="flex flex-col items-center justify-center space-y-8 flex-1">
              <MobileNavItem href="/" onClick={closeMenu}>Home</MobileNavItem>
              <MobileNavItem href="/about" onClick={closeMenu}>About</MobileNavItem>
              <MobileNavItem href="/events" onClick={closeMenu}>Events</MobileNavItem>
              <MobileNavItem href="/gallery" onClick={closeMenu}>Gallery</MobileNavItem>
              <MobileNavItem href="/contact" onClick={closeMenu}>Contact</MobileNavItem>
              
              <div className="pt-4">
                <Button asChild className="w-full">
                  <Link href="/admin" onClick={closeMenu}>
                    <LogIn className="mr-2 h-4 w-4" />
                    Admin Portal
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

function MobileNavItem({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: () => void; 
  children: React.ReactNode;
}) {
  return (
    <Link 
      href={href} 
      onClick={onClick}
      className="text-2xl font-heading font-medium transition-colors hover:text-primary"
    >
      {children}
    </Link>
  );
}