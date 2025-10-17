
import { Briefcase, GraduationCap } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { experience, education } from '@/lib/data';

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-20">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
          Work Experience
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground mt-4">
          My professional journey and key accomplishments in the tech industry.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
        <div className="space-y-12">
          {experience.map((item) => (
            <div
              key={item.id}
              className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                <Briefcase className="h-5 w-5" />
              </div>
              <div className="w-10 md:hidden"></div>
              <div className="w-full md:w-[calc(50%-2.5rem)]">
                <Card className="shadow-md transition-shadow duration-300 hover:shadow-xl group-odd:md:text-right">
                  <CardHeader>
                    <p className="text-sm text-muted-foreground">{item.duration}</p>
                    <CardTitle className="font-headline text-xl mt-1">{item.role}</CardTitle>
                    <p className="text-accent font-semibold">{item.company}</p>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center my-20 pt-10">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
          Education
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground mt-4">
          My academic background and qualifications.
        </p>
      </div>
      
      <div className="relative">
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
        <div className="space-y-12">
          {education.map((item) => (
            <div
              key={item.id}
              className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-md">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="w-10 md:hidden"></div>
              <div className="w-full md:w-[calc(50%-2.5rem)]">
                <Card className="shadow-md transition-shadow duration-300 hover:shadow-xl group-odd:md:text-right">
                  <CardHeader>
                    <p className="text-sm text-muted-foreground">{item.duration}</p>
                    <CardTitle className="font-headline text-xl mt-1">{item.degree}</CardTitle>
                    <p className="text-primary font-semibold">{item.institution}</p>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
