
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Code, ArrowRight, Eye } from 'lucide-react';
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
          <Card key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-accent border-2 border-transparent flex flex-col">
            <Link href={project.liveUrl || '#'} target="_blank" rel="noopener noreferrer">
              <div className="relative">
                {project.imageUrl && (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full object-cover aspect-[3/2] transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={project.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="text-center text-white">
                      <Eye className="h-10 w-10 mx-auto" />
                      <p className="mt-2 text-lg font-semibold">View Project</p>
                   </div>
                </div>
              </div>
            </Link>

            <CardContent className="p-6 bg-card flex-grow flex flex-col">
              <CardTitle className="font-headline text-2xl font-bold mb-2">{project.title}</CardTitle>
              <CardDescription className="text-muted-foreground mb-4 flex-grow">
                {project.description}
              </CardDescription>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack?.map((tech: string) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
              <div className="mt-auto flex justify-between items-center">
                  {project.repoUrl && (
                    <Button asChild variant="ghost" size="sm">
                        <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                            <Code className="mr-2" /> Source Code
                        </Link>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button asChild size="sm">
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            Live Demo <ArrowRight className="ml-2" />
                        </Link>
                    </Button>
                  )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
