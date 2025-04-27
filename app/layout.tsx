import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    default: 'Singerkone Ramkrishana Ashram and Vibsran',
    template: '%s | Singerkone Ramkrishana Ashram',
  },
  description: 'Welcome to Singerkone Ramkrishana Ashram and Vibsran, a spiritual center for peace, meditation, and enlightenment.',
  keywords: ['Ashram', 'Ramkrishana', 'Singerkone', 'Vibsran', 'Meditation', 'Spiritual', 'Yoga'],
  authors: [{ name: 'Singerkone Ramkrishana Ashram' }],
  creator: 'Singerkone Ramkrishana Ashram',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: 'Singerkone Ramkrishana Ashram and Vibsran',
    description: 'A spiritual center for peace, meditation, and enlightenment',
    siteName: 'Singerkone Ramkrishana Ashram',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Singerkone Ramkrishana Ashram',
    description: 'A spiritual center for peace, meditation, and enlightenment',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}