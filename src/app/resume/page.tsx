
import { Button } from '@/components/ui/button';
import { resume } from '@/lib/data';
import { Download } from 'lucide-react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

export default function ResumePage() {
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
       <div className="max-w-4xl mx-auto">
        <div className="relative bg-card border rounded-lg shadow-2xl overflow-hidden animate-fade-in-up">
          <div className="absolute inset-0 w-full h-full">
            <Image
                src={assets.my_image} // A generic background image
                alt="Resume background"
                layout="fill"
                objectFit="cover"
                className="opacity-5 blur-sm"
                data-ai-hint="abstract texture"
            />
             <div className="absolute inset-0 bg-gradient-to-br from-card via-card/80 to-background"></div>
          </div>
         
          <div className="relative flex flex-col items-center justify-center text-center p-8 sm:p-16">
              <div className="mb-8">
                <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
                  My Resume
                </h1>
                <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
                  Download my resume to get a comprehensive overview of my skills,
                  experience, and qualifications.
                </p>
              </div>

              <div className="flex justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground group hover:from-primary/90 hover:to-accent/90 text-lg px-8 py-6">
                  <a href={resume.url} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-3 h-6 w-6" />
                    Download Resume
                  </a>
                </Button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
