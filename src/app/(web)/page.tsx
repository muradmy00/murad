import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Code, Briefcase, Mail, Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects, skills } from '@/lib/data';

export default function HomePage() {
  const featuredProjects = projects.slice(0, 2);
  const topSkills = skills.slice(0, 6);
  const socialLinks = [
    { icon: Github, href: '#', 'aria-label': 'GitHub' },
    { icon: Twitter, href: '#', 'aria-label': 'Twitter' },
    { icon: Linkedin, href: '#', 'aria-label': 'LinkedIn' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
              <div className="md:order-1 order-2">
                <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                    Mohiuddin Murad
                  </span>
                </h1>
                <p className="max-w-xl text-lg sm:text-xl text-muted-foreground mb-8">
                  A professional frontend developer crafting modern, responsive, and user-friendly web experiences.
                </p>
                <div className="flex flex-wrap items-center gap-4 mb-8">
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
                 <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                    <Link key={index} href={link.href} className="text-muted-foreground hover:text-primary" aria-label={link['aria-label']}>
                        <link.icon className="h-6 w-6" />
                    </Link>
                    ))}
                </div>
              </div>
              <div className="md:order-2 order-1 flex justify-center md:justify-end">
                <div className="relative">
                    <Image
                        src="https://picsum.photos/seed/avatar-hero/400/400"
                        alt="Mohiuddin Murad"
                        width={400}
                        height={400}
                        className="rounded-full shadow-2xl object-cover ring-4 ring-primary/10"
                        data-ai-hint="man portrait"
                    />
                    <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg">
                        <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="absolute -top-6 -left-16 text-sm bg-card p-2 rounded-lg shadow-md whitespace-nowrap">Available for hire!</span>
                    </div>
                </div>
              </div>
          </div>
      </section>

      {/* About Me Snippet */}
      <section className="py-16 md:py-24 bg-card border rounded-xl">
        <div className="text-center px-6">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mb-4">About Me</h2>
            <div className="max-w-3xl mx-auto">
                <p className="text-muted-foreground mb-4 text-lg">
                    I am a passionate frontend developer with a knack for creating beautiful and functional web applications. With a strong foundation in modern JavaScript frameworks and a keen eye for design, I strive to build products that not only look good but also provide an exceptional user experience.
                </p>
                <p className="text-muted-foreground text-lg">
                    From architecting scalable component libraries to optimizing application performance, I love tackling challenging problems and continuously learning in the ever-evolving world of web development.
                </p>
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
