
'use client';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { achievements } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function AchievementsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
          My Achievements
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
          A collection of my notable accomplishments and recognitions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements?.map((achievement) => (
          <Card key={achievement.id} className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-primary border-2 border-transparent flex flex-col">
            {achievement.imageUrl && (
              <div className="relative bg-card flex items-center justify-center aspect-[3/2]">
                <Image
                  src={achievement.imageUrl}
                  alt={achievement.title}
                  width={600}
                  height={400}
                  className={cn(
                    'w-full h-full object-contain transition-transform duration-500 group-hover:scale-105',
                    typeof achievement.imageUrl !== 'string' && 'p-8'
                  )}
                  data-ai-hint={achievement.imageHint}
                />
              </div>
            )}
            <CardContent className="p-6 bg-card flex-grow flex flex-col">
              <CardTitle className="font-headline text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {achievement.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground flex-grow">
                {achievement.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
