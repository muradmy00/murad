'use client';
import { Briefcase } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { format } from 'date-fns';

export default function ExperiencePage() {
  const firestore = useFirestore();
  const experienceQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'experience'), orderBy('startDate', 'desc'));
  }, [firestore]);
  const { data: experience, isLoading } = useCollection(experienceQuery);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-20">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
          Work Experience
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground mt-4">
          A timeline of my professional journey, highlighting key roles, responsibilities, and accomplishments in the tech industry.
        </p>
      </div>

      {isLoading && <div className="text-center">Loading experience...</div>}

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>

        <div className="space-y-12">
          {experience?.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                'relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group',
                'md:w-full'
              )}
            >
              {/* Icon */}
              <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-4 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md md:top-0 md:-translate-y-0">
                <Briefcase className="h-5 w-5" />
              </div>
              
              {/* Spacer for mobile */}
              <div className="w-10 md:hidden"></div>

              {/* Card */}
              <div className="w-full md:w-[calc(50%-2.5rem)]">
                <Card className="shadow-md transition-shadow duration-300 hover:shadow-xl group-odd:md:text-right">
                  <CardHeader>
                    <div className="flex flex-col">
                      <p className="text-sm text-muted-foreground">
                        {item.startDate ? format(new Date(item.startDate), 'MMM yyyy') : ''} - {item.endDate ? format(new Date(item.endDate), 'MMM yyyy') : 'Present'}
                      </p>
                      <CardTitle className="font-headline text-xl mt-1">{item.title}</CardTitle>
                      <p className="text-accent font-semibold">{item.company}</p>
                    </div>
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
