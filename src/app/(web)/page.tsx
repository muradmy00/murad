import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import {
  Card,
  CardContent,
} from '@/components/ui/card';

export default function HomePage() {
  const socialLinks = [
    { icon: Github, href: '#', 'aria-label': 'GitHub' },
    { icon: Twitter, href: '#', 'aria-label': 'Twitter' },
    { icon: Linkedin, href: '#', 'aria-label': 'LinkedIn' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <main className="text-center">
        <div className="relative inline-block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold">
            I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary-foreground animate-gradient-x">
              Mohiuddin Murad
            </span>
          </h1>
        </div>

        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          A passionate Full-Stack Developer creating modern, responsive, and
          performant web applications.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent text-white group">
            <Link href="/projects">
              View My Work <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <Link href="/resume">
              Download Resume <Download className="ml-2" />
            </Link>
          </Button>
        </div>
        
        <div className="mt-12 flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-muted-foreground hover:text-primary transition-colors" aria-label={link['aria-label']}>
                <link.icon className="h-7 w-7" />
              </Link>
            ))}
        </div>

        <Card className="mt-24 max-w-4xl mx-auto bg-card/50 border-2 border-primary/10 shadow-2xl shadow-primary/10 rounded-lg overflow-hidden backdrop-blur-sm">
            <CardContent className="p-8 text-left">
                <h3 className="font-headline text-2xl font-bold text-primary mb-4">About Me</h3>
                <p className="text-muted-foreground leading-relaxed">
                    Hello! I'm Mohiuddin Murad, a dedicated Full-Stack Developer with a knack for building beautiful and functional web applications. With a strong foundation in both frontend and backend technologies, I specialize in bringing ideas to life from concept to deployment. I thrive on solving complex problems and am constantly learning to keep up with the fast-paced world of web development. My goal is to create seamless and engaging user experiences while writing clean, efficient, and maintainable code.
                </p>
            </CardContent>
        </Card>

      </main>
    </div>
  );
}
