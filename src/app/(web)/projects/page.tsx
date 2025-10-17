import Image from 'next/image';
import Link from 'next/link';
import { Code, ArrowRight } from 'lucide-react';
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
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader>
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="w-full object-cover rounded-t-lg"
                data-ai-hint={project.imageHint}
              />
            </CardHeader>
            <CardContent className="p-6 flex-grow">
              <CardTitle className="font-headline text-2xl font-bold mb-2">{project.title}</CardTitle>
              <CardDescription className="text-muted-foreground mb-4 h-24 overflow-hidden">
                {project.description}
              </CardDescription>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <div className="p-6 pt-0 mt-auto flex justify-between items-center">
                <Button asChild variant="ghost">
                    <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Code className="mr-2" /> Code
                    </Link>
                </Button>
                <Button asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo <ArrowRight className="ml-2" />
                    </Link>
                </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
