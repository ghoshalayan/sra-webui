import Link from 'next/link';
import Image from 'next/image';
import { Hero } from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { ThreeScene } from '@/components/ThreeScene';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About Us | Singerkone Ramkrishana Ashram',
  description: 'Learn about our spiritual center, its history, philosophy, and the teachings we follow.',
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Our Ashram"
        subtitle="Discovering our roots, mission, and spiritual journey through the teachings of Ramkrishna"
        image="https://images.pexels.com/photos/4400038/pexels-photo-4400038.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      
      {/* Our History */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our History & Background</h2>
              <p className="text-lg mb-6">
                Singerkone Ramkrishana Ashram and Vibsran was established in 1985 with the vision of creating a spiritual sanctuary that would serve as a beacon of light and wisdom for seekers from all walks of life.
              </p>
              <p className="text-lg mb-6">
                Founded by Sri Swami Dayananada, a devoted disciple of the Ramakrishna tradition, our ashram has grown from a small meditation center to a vibrant spiritual community that welcomes thousands of visitors each year.
              </p>
              <p className="text-lg mb-6">
                For over three decades, we have been dedicated to preserving and propagating the teachings of Sri Ramakrishna, Swami Vivekananda, and the timeless wisdom of Vedanta philosophy.
              </p>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/11590361/pexels-photo-11590361.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Ashram founding ceremony"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-10 hidden md:block">
                <ThreeScene size="md" rotationSpeed={0.3} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Philosophy */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Our Philosophy & Teachings</h2>
            <p className="section-subtitle">
              We follow the universal teachings of Ramakrishna, embracing the harmony of all religions and the path to self-realization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PhilosophyCard
              title="Harmony of Religions"
              description="We believe in the essential unity of all religions, recognizing that different spiritual paths lead to the same ultimate truth."
            />
            <PhilosophyCard
              title="Service to Humanity"
              description="We practice karma yoga by serving others as manifestations of the divine, seeing service as a form of worship."
            />
            <PhilosophyCard
              title="Meditation & Self-Knowledge"
              description="We emphasize regular meditation and self-inquiry as essential practices for realizing one's true divine nature."
            />
            <PhilosophyCard
              title="Simple Living"
              description="We encourage a lifestyle of simplicity, contentment, and mindfulness that nurtures spiritual growth."
            />
            <PhilosophyCard
              title="Devotion & Surrender"
              description="We practice bhakti yoga through devotional practices that cultivate love for the divine and surrender of the ego."
            />
            <PhilosophyCard
              title="Knowledge & Wisdom"
              description="We study sacred texts and philosophical teachings that illuminate the path to truth and self-realization."
            />
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Our Spiritual Guides</h2>
            <p className="section-subtitle">
              Meet the dedicated monks and teachers who guide our ashram community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMemberCard
              name="Swami Premananda"
              role="Head of Ashram"
              bio="With over 40 years of spiritual practice, Swami Premananda guides the overall vision and activities of our ashram."
              image="https://images.pexels.com/photos/6474515/pexels-photo-6474515.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <TeamMemberCard
              name="Swami Dhyananda"
              role="Meditation Teacher"
              bio="An expert in various meditation techniques, Swami Dhyananda leads daily meditation sessions and retreats."
              image="https://images.pexels.com/photos/6474472/pexels-photo-6474472.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
            <TeamMemberCard
              name="Swami Gitananda"
              role="Vedanta Scholar"
              bio="A profound scholar of Vedanta philosophy, Swami Gitananda conducts classes on the Upanishads and Bhagavad Gita."
              image="https://images.pexels.com/photos/6474485/pexels-photo-6474485.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/team">
                Meet Our Full Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section-hero bg-primary/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute w-96 h-96 rounded-full bg-primary blur-3xl -top-20 -right-20"></div>
          <div className="absolute w-96 h-96 rounded-full bg-secondary blur-3xl -bottom-20 -left-20"></div>
        </div>
        
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Visit Our Ashram</h2>
            <p className="text-lg mb-8">
              Experience the peaceful atmosphere and spiritual guidance of our ashram firsthand. We welcome visitors of all backgrounds and beliefs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/visit">
                  Plan Your Visit
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PhilosophyCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-background rounded-lg p-6 shadow-sm border border-border transition-all duration-300 hover:shadow-md hover:border-primary/50">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function TeamMemberCard({ 
  name, 
  role, 
  bio, 
  image 
}: { 
  name: string; 
  role: string; 
  bio: string; 
  image: string;
}) {
  return (
    <div className="card overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="aspect-square relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-primary font-medium mb-3">{role}</p>
        <p className="text-muted-foreground">{bio}</p>
      </div>
    </div>
  );
}