'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ThreeScene } from '@/components/ThreeScene';
import { cn } from '@/lib/utils';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';

interface HeroProps {
  title?: string;
  subtitle?: string;
  image?: string;
  className?: string;
  showThreeScene?: boolean;
}

export function Hero({
  title = "Welcome to Singerkone Ramkrishana Ashram",
  subtitle = "A sanctuary for spiritual growth, meditation, and inner peace following the teachings of Ramkrishna",
  image = "https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg",
  className = "",
  showThreeScene = true,
}: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={cn("relative min-h-[80vh] flex items-center", className)}>
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt="Mountain landscape"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          <div className={cn(
            "flex items-center gap-4 mb-6 transition-all duration-700 transform",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            {showThreeScene && <ThreeScene size="md" className="bg-background/10 backdrop-blur-sm" />}
            <div className="h-1 flex-1 bg-primary rounded"></div>
          </div>

          <h1 className={cn(
            "text-white mb-6 transition-all duration-700 delay-150 transform",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            {title}
          </h1>

          <p className={cn(
            "text-white/90 text-xl md:text-2xl mb-8 transition-all duration-700 delay-300 transform",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            {subtitle}
          </p>

          <div className={cn(
            "flex flex-wrap gap-4 transition-all duration-700 delay-450 transform",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Button size="lg" asChild>
              <Link href="/about">
                Explore Ashram
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 hover:text-white" asChild>
              <Link href="/events">
                <Calendar className="mr-2 h-4 w-4" />
                Upcoming Events
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Animated overlay accent */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/30 to-transparent transition-opacity duration-1000",
        isVisible ? "opacity-100" : "opacity-0"
      )}></div>
    </section>
  );
}