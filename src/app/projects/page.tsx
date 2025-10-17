
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { projects } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
          My Work
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
          A collection of projects I've built, showcasing my skills in frontend
          development and beyond.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects?.map((project) => (
          <Card key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-primary border-2 border-transparent flex flex-col">
            <Link href={project.liveUrl || '#'} target="_blank" rel="noopener noreferrer">
              <div className="relative bg-card flex items-center justify-center aspect-[3/2] overflow-hidden">
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
              </div>
            </Link>

            <CardContent className="p-6 bg-card flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-headline text-2xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.liveUrl && (
                  <Button asChild size="sm" variant="ghost" className="h-8 w-8 p-0 text-muted-foreground hover:text-primary">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Eye className="h-5 w-5" />
                          <span className="sr-only">Live Demo</span>
                      </Link>
                  </Button>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack?.map((tech: string) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
              
              <CardDescription className="text-muted-foreground flex-grow">
                {project.description}
              </CardDescription>

            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
