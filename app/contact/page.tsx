import Image from 'next/image';
import { Hero } from '@/components/Hero';
import { ContactForm } from '@/components/ContactForm';
import { ThreeScene } from '@/components/ThreeScene';
import { MapPin, Clock, Phone, Mail, Globe } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Singerkone Ramkrishana Ashram',
  description: 'Get in touch with us for inquiries, visits, or to learn more about our spiritual programs and activities.',
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, spiritual guidance, or to plan your visit"
        image="https://images.pexels.com/photos/1699030/pexels-photo-1699030.jpeg"
      />
      
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="mb-6">Get In Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We welcome your questions, feedback, and inquiries. Whether you're interested in visiting, participating in our programs, or seeking spiritual guidance, we're here to help.
              </p>
              
              <div className="space-y-6 mb-10">
                <ContactInfo 
                  icon={<MapPin className="h-6 w-6" />}
                  title="Our Location"
                  content="123 Spiritual Path, Singerkone, West Bengal, India 700001"
                />
                <ContactInfo 
                  icon={<Clock className="h-6 w-6" />}
                  title="Visiting Hours"
                  content="Daily: 6:00 AM - 8:00 PM\nMeditation Hall: 5:00 AM - 9:00 PM"
                />
                <ContactInfo 
                  icon={<Phone className="h-6 w-6" />}
                  title="Phone"
                  content="+91 98765 43210\n+91 98765 43211"
                />
                <ContactInfo 
                  icon={<Mail className="h-6 w-6" />}
                  title="Email"
                  content="info@singerkone-ashram.org\nvisit@singerkone-ashram.org"
                />
                <ContactInfo 
                  icon={<Globe className="h-6 w-6" />}
                  title="Social Media"
                  content="Follow us on Facebook, Instagram, Twitter, and YouTube"
                />
              </div>
              
              {/* Map or Image */}
              <div className="rounded-lg overflow-hidden shadow-md h-64 md:h-80 relative">
                <Image
                  src="https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg"
                  alt="Mountain location"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 right-4">
                  <ThreeScene size="sm" />
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-muted/40 p-6 md:p-8 rounded-lg shadow-sm border border-border">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about visiting and participating in our ashram activities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FAQCard
              question="What are the accommodation options for visitors?"
              answer="We offer simple, comfortable dormitory-style accommodations for short-term visitors and private rooms for longer retreats. All accommodations include basic amenities and vegetarian meals."
            />
            <FAQCard
              question="Do I need to be familiar with Hinduism to visit?"
              answer="Not at all. We welcome visitors from all religious backgrounds and beliefs. Our teachings emphasize universal spiritual principles that transcend any single religious tradition."
            />
            <FAQCard
              question="What should I bring for my visit?"
              answer="We recommend bringing comfortable, modest clothing, personal toiletries, any necessary medications, and an open heart and mind. For meditation sessions, a shawl or light blanket is useful."
            />
            <FAQCard
              question="Are there any behavioral guidelines to follow?"
              answer="Yes, we ask all visitors to respect the peaceful atmosphere by maintaining silence in designated areas, dressing modestly, abstaining from alcohol and non-vegetarian food, and participating in daily community activities."
            />
            <FAQCard
              question="Can I volunteer at the ashram?"
              answer="Yes, we welcome volunteers who wish to contribute their time and skills. Service (seva) is an integral part of our spiritual practice. Please contact us in advance to discuss volunteer opportunities."
            />
            <FAQCard
              question="Do you offer guided tours of the ashram?"
              answer="Yes, we conduct guided tours every day at 10:00 AM and 3:00 PM. These tours provide insights into our history, philosophy, and daily activities. No reservation is required for these tours."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactInfo({ 
  icon, 
  title, 
  content 
}: { 
  icon: React.ReactNode;
  title: string;
  content: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="rounded-full bg-primary/10 p-3 text-primary flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-medium mb-1">{title}</h4>
        <p className="text-muted-foreground whitespace-pre-line">{content}</p>
      </div>
    </div>
  );
}

function FAQCard({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
      <h4 className="text-lg font-semibold mb-3">{question}</h4>
      <p className="text-muted-foreground">{answer}</p>
    </div>
  );
}