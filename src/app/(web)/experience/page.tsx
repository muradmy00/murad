
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
      <div className="text-center mb-20">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
          Work Experience
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground mt-4">
          My professional journey and key accomplishments in the tech industry.
        </p>
      </div>

      <div className="relative">
        {/* Central timeline bar */}
        <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-border -translate-x-1/2"></div>
        <div className="space-y-12">
          {experience.map((item, index) => (
            <div
              key={item.id}
              className="relative flex items-start md:space-x-8"
            >
              <div
                className={cn(
                  'relative w-full pl-12 md:pl-0 md:w-1/2',
                  index % 2 === 0 ? 'md:order-1 md:pr-8' : 'md:order-3 md:pl-8'
                )}
              >
                {/* Icon on the timeline */}
                <div
                  className={cn(
                    "absolute top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md",
                    "left-[-22px] md:left-auto",
                    index % 2 === 0 ? 'md:right-[-2.2rem]' : 'md:left-[-2.2rem]'
                  )}
                >
                  <Briefcase className="h-5 w-5" />
                </div>
                
                <Card className="shadow-md transition-shadow duration-300 hover:shadow-xl">
                  <CardHeader className={cn(index % 2 !== 0 && 'md:text-right')}>
                    <p className="text-sm text-muted-foreground">{item.duration}</p>
                    <CardTitle className="font-headline text-xl mt-1">{item.role}</CardTitle>
                    <p className="text-accent font-semibold">{item.company}</p>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
              <div className={cn("hidden md:block w-1/2", index % 2 === 0 ? 'order-2' : 'order-2')}></div>
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
        {/* Central timeline bar */}
        <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-border -translate-x-1/2"></div>
        <div className="space-y-12">
          {education.map((item, index) => (
             <div
              key={item.id}
              className="relative flex items-start md:space-x-8"
            >
              <div
                className={cn(
                  'relative w-full pl-12 md:pl-0 md:w-1/2',
                  index % 2 === 0 ? 'md:order-1 md:pr-8' : 'md:order-3 md:pl-8'
                )}
              >
                {/* Icon on the timeline */}
                <div
                  className={cn(
                    "absolute top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-md",
                     "left-[-22px] md:left-auto",
                    index % 2 === 0 ? 'md:right-[-2.2rem]' : 'md:left-[-2.2rem]'
                  )}
                >
                  <GraduationCap className="h-5 w-5" />
                </div>
                
                <Card className="shadow-md transition-shadow duration-300 hover:shadow-xl">
                  <CardHeader className={cn(index % 2 !== 0 && 'md:text-right')}>
                    <p className="text-sm text-muted-foreground">{item.duration}</p>
                    <CardTitle className="font-headline text-xl mt-1">{item.degree}</CardTitle>
                    <p className="text-primary font-semibold">{item.institution}</p>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
              <div className={cn("hidden md:block w-1/2", index % 2 === 0 ? 'order-2' : 'order-2')}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
