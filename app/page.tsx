'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { ThreeScene } from '@/components/ThreeScene';
import { EventCard } from '@/components/EventCard';
import { Gallery } from '@/components/Gallery';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Heart, 
  BookOpen, 
  Users, 
  Calendar,
  ArrowDown
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Mock data for the gallery
const galleryItems = [
  {
    id: '1',
    src: 'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg',
    alt: 'Mountain sunrise view',
    width: 1600,
    height: 1067,
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg',
    alt: 'Mountain lake reflection',
    width: 1600,
    height: 1067,
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg',
    alt: 'Mountain peak in clouds',
    width: 1600,
    height: 1067,
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg',
    alt: 'Mountain valley view',
    width: 1600,
    height: 1067,
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/1666012/pexels-photo-1666012.jpeg',
    alt: 'Mountain meadow',
    width: 1600,
    height: 1067,
  },
  {
    id: '6',
    src: 'https://images.pexels.com/photos/1699030/pexels-photo-1699030.jpeg',
    alt: 'Mountain forest path',
    width: 1600,
    height: 1067,
  },
];

// Mock data for upcoming events
const upcomingEvents = [
  {
    id: '1',
    title: 'Morning Meditation Retreat',
    description: 'Start your day with peace and clarity through guided meditation sessions led by our experienced practitioners.',
    date: new Date('2025-05-10'),
    time: '6:00 AM - 9:00 AM',
    location: 'Main Meditation Hall',
    image: 'https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg',
  },
  {
    id: '2',
    title: 'Bhagavad Gita Study Session',
    description: 'Dive deep into the profound wisdom of the Bhagavad Gita with our scholars and understand its relevance in modern life.',
    date: new Date('2025-05-15'),
    time: '4:00 PM - 6:00 PM',
    location: 'Library Hall',
    image: 'https://images.pexels.com/photos/1666012/pexels-photo-1666012.jpeg',
  },
  {
    id: '3',
    title: 'Full Moon Kirtan & Chanting',
    description: 'Experience the divine vibrations of sacred chants and kirtans under the full moon in a serene atmosphere.',
    date: new Date('2025-05-22'),
    time: '7:00 PM - 9:30 PM',
    location: 'Garden Pavilion',
    image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg',
  },
];

export default function Home() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Hero Section */}
      <Hero />
      
      {/* Scroll indicator */}
      <div className="flex justify-center -mt-16 relative z-10">
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full bg-background/80 backdrop-blur-sm border-primary hover:bg-primary/20"
          aria-label="Scroll down"
          onClick={handleScroll}
        >
          <ArrowDown className="h-4 w-4 text-primary animate-bounce" />
        </Button>
      </div>
      
      {/* Welcome Section */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="mb-6">Discover Inner Peace at Our Spiritual Sanctuary</h2>
              <p className="text-lg mb-6">
                Founded on the timeless teachings of Ramkrishna, our ashram is a sacred space where seekers from all walks of life come together to explore spirituality, practice meditation, and find inner harmony.
              </p>
              <p className="text-lg mb-8">
                We blend ancient wisdom with modern practices to create a supportive environment for spiritual growth and self-discovery.
              </p>
              <Button size="lg" asChild>
                <Link href="/about">
                  Learn About Our Philosophy
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-lg overflow-hidden aspect-video shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg"
                  alt="Mountain meditation scene"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 z-10 hidden md:block">
                <ThreeScene size="lg" rotationSpeed={0.5} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Spiritual Offerings</h2>
            <p className="section-subtitle">
              Explore the wide range of spiritual practices and activities we offer to nurture your soul and guide your spiritual journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Heart className="h-10 w-10" />}
              title="Daily Meditation"
              description="Join our daily meditation sessions to cultivate mindfulness, reduce stress, and connect with your inner self."
            />
            <FeatureCard
              icon={<BookOpen className="h-10 w-10" />}
              title="Spiritual Teachings"
              description="Immerse yourself in the timeless wisdom of Ramkrishna through regular classes, discussions, and study groups."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10" />}
              title="Community Living"
              description="Experience the joy of spiritual community living with like-minded individuals in a supportive environment."
            />
          </div>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="section-title mb-3 md:text-left">Upcoming Events</h2>
              <p className="text-lg text-muted-foreground max-w-2xl md:text-left">
                Join us for these transformative events and deepen your spiritual practice
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0" asChild>
              <Link href="/events">
                View All Events
                <Calendar className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="section bg-primary/5">
        <div className="container max-w-5xl">
          <div className="text-center">
            <ThreeScene size="md" className="mx-auto mb-8" />
            <blockquote className="text-2xl md:text-3xl font-heading italic mb-8 leading-relaxed">
              "The highest truth is this: God is present in all beings. They are His multiple forms. There is no other God to seek."
            </blockquote>
            <Separator className="max-w-xs mx-auto mb-6" />
            <p className="text-lg font-semibold">Sri Ramakrishna Paramahamsa</p>
            <p className="text-muted-foreground">Spiritual Teacher & Mystic</p>
          </div>
        </div>
      </section>
      
      {/* Gallery Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Ashram Gallery</h2>
            <p className="section-subtitle">
              Glimpses of our spiritual sanctuary and community activities
            </p>
          </div>
          
          <Gallery items={galleryItems} columns={3} gap="md" className="mb-8" />
          
          <div className="text-center">
            <Button asChild>
              <Link href="/gallery">
                Explore Full Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-hero bg-primary/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute w-96 h-96 rounded-full bg-primary blur-3xl -top-20 -right-20"></div>
          <div className="absolute w-96 h-96 rounded-full bg-secondary blur-3xl -bottom-20 -left-20"></div>
        </div>
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Begin Your Spiritual Journey Today</h2>
            <p className="text-lg mb-8">
              Whether you're seeking peace, purpose, or a deeper connection to your true self, Singerkone Ramkrishana Ashram welcomes you with open arms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="card p-6 transition-all duration-300 hover:shadow-md hover:border-primary/50">
      <div className="rounded-full bg-primary/10 p-3 w-fit mb-6 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}