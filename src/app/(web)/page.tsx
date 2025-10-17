import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Code, Briefcase, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects, skills } from '@/lib/data';

export default function HomePage() {
  const featuredProjects = projects.slice(0, 2);
  const topSkills = skills.slice(0, 6);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-primary">
          Mohiuddin Murad
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-8">
          A professional frontend developer crafting modern, responsive, and user-friendly web experiences.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/projects">
              My Work <Briefcase className="ml-2" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">
              Get in Touch <Mail className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* About Me Snippet */}
      <section className="py-16 md:py-24 bg-card border rounded-xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="px-6">
                <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4">About Me</h2>
                <p className="text-muted-foreground mb-4">
                    I am a passionate frontend developer with a knack for creating beautiful and functional web applications. With a strong foundation in modern JavaScript frameworks and a keen eye for design, I strive to build products that not only look good but also provide an exceptional user experience.
                </p>
                <p className="text-muted-foreground">
                    From architecting scalable component libraries to optimizing application performance, I love tackling challenging problems and continuously learning in the ever-evolving world of web development.
                </p>
            </div>
            <div className="px-6">
                 <Image
                    src="https://picsum.photos/seed/aboutme/600/400"
                    alt="A developer working on a laptop"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg object-cover"
                    data-ai-hint="developer laptop"
                />
            </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-2">My Skills</h2>
          <p className="max-w-xl mx-auto text-muted-foreground">A glimpse into the technologies and tools I work with.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {topSkills.map((skill) => (
            <Badge key={skill.id} variant="secondary" className="text-lg py-2 px-4 shadow-sm">
              {skill.name}
            </Badge>
          ))}
          <Button asChild variant="ghost" className="text-accent">
            <Link href="/skills">
              See all skills <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-2">Featured Projects</h2>
          <p className="max-w-xl mx-auto text-muted-foreground">Here are a few projects I'm proud of.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
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
              <CardContent className="p-6">
                <h3 className="font-headline text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
                <div className="flex justify-end gap-4">
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
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
