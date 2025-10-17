import { Briefcase } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { experience } from '@/lib/data';

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
          Work Experience
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
          My professional journey as a developer, highlighting key roles and accomplishments.
        </p>
      </div>

      <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-border after:left-0">
        <div className="grid gap-12">
          {experience.map((item, index) => (
            <div key={item.id} className="relative">
              <div className="absolute left-[-2.1rem] top-1 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Briefcase className="h-5 w-5" />
              </div>
              <Card className="ml-8 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-headline text-xl">{item.role}</CardTitle>
                      <p className="text-accent font-semibold">{item.company}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.duration}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
