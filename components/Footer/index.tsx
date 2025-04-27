import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/40 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo className="h-10 w-10" />
              <span className="font-heading font-bold text-lg">
                Singerkone <span className="text-primary">Ashram</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-4">
              A spiritual sanctuary for peace, meditation, and enlightenment, following the teachings of Ramkrishna.
            </p>
            <div className="flex items-center gap-3">
              <SocialLink href="https://facebook.com" icon={<Facebook size={18} />} label="Facebook" />
              <SocialLink href="https://instagram.com" icon={<Instagram size={18} />} label="Instagram" />
              <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink href="https://youtube.com" icon={<Youtube size={18} />} label="YouTube" />
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-heading font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/events">Events & Programs</FooterLink>
              <FooterLink href="/gallery">Photo Gallery</FooterLink>
              <FooterLink href="/teachings">Teachings</FooterLink>
              <FooterLink href="/donate">Donate</FooterLink>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-heading font-medium text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              <FooterLink href="/blog">Blog & Articles</FooterLink>
              <FooterLink href="/meditation">Meditation Guides</FooterLink>
              <FooterLink href="/books">Books & Publications</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-heading font-medium text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-muted-foreground">
              <ContactItem icon={<MapPin size={16} />}>
                123 Spiritual Path, Singerkone, India
              </ContactItem>
              <ContactItem icon={<Phone size={16} />}>
                +91 98765 43210
              </ContactItem>
              <ContactItem icon={<Mail size={16} />}>
                info@singerkone-ashram.org
              </ContactItem>
            </div>
            <Button className="mt-4" variant="outline" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {currentYear} Singerkone Ramkrishana Ashram and Vibsran. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-muted-foreground hover:text-primary transition-colors">
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
    >
      {icon}
    </a>
  );
}

function ContactItem({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-primary mt-1">{icon}</span>
      <span>{children}</span>
    </div>
  );
}