import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
          Get In Touch
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
          Have a project in mind, a question, or just want to say hi? I'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-muted-foreground">Drop me a line anytime.</p>
              <a href="mailto:contact@devfolio.pro" className="text-accent hover:underline">
                contact@devfolio.pro
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-muted-foreground">Available during business hours.</p>
              <a href="tel:+1234567890" className="text-accent hover:underline">
                +1 (234) 567-890
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="text-muted-foreground">Based in the beautiful city of San Francisco, CA.</p>
            </div>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
