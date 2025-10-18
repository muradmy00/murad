
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

const TimelineItem = ({ item, icon, isLast, isEducation = false, index }: { item: any; icon: React.ReactNode; isLast: boolean; isEducation?: boolean; index: number }) => (
  <div className="relative pl-12 pb-12 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
    {/* Timeline Line */}
    {!isLast && <div className="absolute left-[22px] top-5 h-full w-0.5 bg-border -translate-x-1/2"></div>}
    
    {/* Icon on the timeline */}
    <div className={cn(
      "absolute top-0 left-0 flex h-11 w-11 items-center justify-center rounded-full shadow-md",
      isEducation ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
    )}>
      {icon}
    </div>
    
    {/* Card with content */}
    <Card className="shadow-md transition-shadow duration-300 hover:shadow-xl hover:border-primary/30 ml-4">
      <CardHeader>
        <p className="text-sm text-muted-foreground">{item.duration}</p>
        <CardTitle className="font-headline text-xl mt-1">{isEducation ? item.degree : item.role}</CardTitle>
        <p className={cn("font-semibold", isEducation ? "text-primary" : "text-accent")}>
          {isEducation ? item.institution : item.company}
        </p>
      </CardHeader>
      <CardContent>
        <CardDescription>{item.description}</CardDescription>
      </CardContent>
    </Card>
  </div>
);


export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
          Work Experience
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground mt-4">
          My professional journey and key accomplishments in the tech industry.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {experience.map((item, index) => (
          <TimelineItem 
            key={item.id}
            item={item} 
            icon={<Briefcase className="h-5 w-5" />}
            isLast={index === experience.length - 1}
            index={index}
          />
        ))}
      </div>
      
      <div className="text-center my-16 pt-10 animate-fade-in-up">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
          Education
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground mt-4">
          My academic background and qualifications.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        {education.map((item, index) => (
          <TimelineItem 
            key={item.id}
            item={item} 
            icon={<GraduationCap className="h-5 w-5" />}
            isLast={index === education.length - 1}
            isEducation={true}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
