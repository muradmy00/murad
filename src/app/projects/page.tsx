
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { projects } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
          My Work
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
          A collection of projects I've built, showcasing my skills in frontend
          development and beyond.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects?.map((project, index) => (
          <div
            key={project.id}
            className="animate-fade-in-up h-full"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <Card className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:shadow-xl border-2 border-transparent hover:border-primary/30 flex flex-col bg-secondary/20 h-full">
              <div className="relative aspect-[3/2] overflow-hidden">
                {project.imageUrl && (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className={cn(
                      'w-full h-full object-cover transition-transform duration-500 group-hover:scale-105',
                      typeof project.imageUrl !== 'string' && 'object-contain p-8'
                    )}
                    data-ai-hint={project.imageHint}
                  />
                )}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  {project.liveUrl && (
                    <Button asChild className="w-fit self-end bg-primary/80 backdrop-blur-sm hover:bg-primary" >
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        View Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>

              <CardContent className="p-6 bg-card flex-grow flex flex-col">
                <CardTitle className="font-headline text-2xl font-bold group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </CardTitle>
                
                <div className="flex flex-wrap gap-2 mb-4 min-h-[56px] items-start">
                  {project.techStack?.map((tech: string) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                
                <CardDescription className="text-muted-foreground mt-auto">
                  {project.description}
                </CardDescription>

              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
