
import { Briefcase, GraduationCap } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { experience, education } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-20 animate-fade-in-up">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
          Work Experience
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground mt-4">
          My professional journey and key accomplishments in the tech industry.
        </p>
      </div>

      <div className="relative">
        {/* Central timeline bar - for lg and up */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 animate-fade-in hidden lg:block"></div>
        <div className="space-y-12">
          {experience.map((item, index) => (
            <div
              key={item.id}
              className="relative flex items-start animate-fade-in-up lg:flex-row lg:items-center"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Mobile Timeline Bar */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 animate-fade-in lg:hidden"></div>

              <div
                className={cn(
                  "absolute top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md left-5 -translate-x-1/2",
                   "lg:left-1/2"
                )}
              >
                <Briefcase className="h-5 w-5" />
              </div>
              
              <div className={cn(
                "w-full ml-12 lg:ml-0 lg:w-1/2",
                index % 2 === 0 ? "lg:pr-8" : "lg:pl-8 lg:self-end"
              )}>
                <Card className="shadow-md transition-shadow duration-300 hover:shadow-xl">
                  <CardHeader className={cn(index % 2 !== 0 && 'lg:text-right')}>
                    <p className="text-sm text-muted-foreground">{item.duration}</p>
                    <CardTitle className="font-headline text-xl mt-1">{item.role}</CardTitle>
                    <p className="text-accent font-semibold">{item.company}</p>
                  </CardHeader>
                  <CardContent className={cn(index % 2 !== 0 && 'lg:text-right')}>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center my-20 pt-10 animate-fade-in-up">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
          Education
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground mt-4">
          My academic background and qualifications.
        </p>
      </div>
      
      <div className="relative">
        {/* Central timeline bar - for lg and up */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 animate-fade-in hidden lg:block"></div>
        <div className="space-y-12">
          {education.map((item, index) => (
             <div
              key={item.id}
              className="relative flex items-start animate-fade-in-up lg:flex-row lg:items-center"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Mobile Timeline Bar */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 animate-fade-in lg:hidden"></div>

              <div
                className={cn(
                  "absolute top-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-md left-5 -translate-x-1/2",
                  "lg:left-1/2"
                )}
              >
                <GraduationCap className="h-5 w-5" />
              </div>
                
              <div className={cn(
                  "w-full ml-12 lg:ml-0 lg:w-1/2",
                  index % 2 === 0 ? "lg:pr-8" : "lg:pl-8 lg:self-end"
              )}>
                <Card className="shadow-md transition-shadow duration-300 hover:shadow-xl">
                  <CardHeader className={cn(index % 2 !== 0 && 'lg:text-right')}>
                    <p className="text-sm text-muted-foreground">{item.duration}</p>
                    <CardTitle className="font-headline text-xl mt-1">{item.degree}</CardTitle>
                    <p className="text-primary font-semibold">{item.institution}</p>
                  </CardHeader>
                  <CardContent className={cn(index % 2 !== 0 && 'lg:text-right')}>
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
