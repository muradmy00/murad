
import { Button } from '@/components/ui/button';
import { resume } from '@/lib/data';
import { Download } from 'lucide-react';

export default function ResumePage() {
  const getGoogleDriveEmbedUrl = (url: string) => {
    const fileId = url.match(/d\/(.+?)\//)?.[1];
    if (fileId) {
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    return `${url}#toolbar=0`;
  };
  
  const embedUrl = getGoogleDriveEmbedUrl(resume.url);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-8 animate-fade-in-up">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
          My Resume
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
          Download my resume to get a comprehensive overview of my skills,
          experience, and qualifications.
        </p>
      </div>

      <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '150ms' }}>
        <Button asChild size="lg">
          <a href={resume.url} target="_blank" rel="noopener noreferrer">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </a>
        </Button>
      </div>

      <div className="mt-12 bg-card border rounded-lg shadow-sm animate-fade-in-up overflow-hidden" style={{ animationDelay: '300ms' }}>
        <div className="relative w-full h-[1000px]">
            <iframe
                src={embedUrl}
                title="Resume"
                className="absolute top-0 left-0 w-full h-full border-none"
                allow="autoplay"
            />
        </div>
      </div>
    </div>
  );
}
