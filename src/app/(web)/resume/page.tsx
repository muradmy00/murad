import { Button } from '@/components/ui/button';
import { resume } from '@/lib/data';
import { Download } from 'lucide-react';

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
          My Resume
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
          Download my resume to get a comprehensive overview of my skills,
          experience, and qualifications.
        </p>
      </div>

      <div className="flex justify-center">
        <Button asChild size="lg">
          <a href={resume.url} download="resume.pdf">
            <Download className="mr-2 h-5 w-5" />
            Download Resume (PDF)
          </a>
        </Button>
      </div>

      <div className="mt-12 bg-card border rounded-lg p-8 shadow-sm">
        <iframe
          src={`${resume.url}#toolbar=0`}
          title="Resume"
          className="w-full h-[800px] border-none rounded-md"
        />
      </div>
    </div>
  );
}
