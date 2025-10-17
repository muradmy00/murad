
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import Image from 'next/image';
import { getPlaceholder } from '@/lib/data';
import { assets } from '@/assets/assets';

export default function HomePage() {
  const socialLinks = [
    { icon: Github, href: '#', 'aria-label': 'GitHub' },
    { icon: Twitter, href: '#', 'aria-label': 'Twitter' },
    { icon: Linkedin, href: '#', 'aria-label': 'LinkedIn' },
  ];

  const aboutImage = getPlaceholder('about-me');

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

        <Card className="mt-24 max-w-6xl mx-auto bg-transparent border-none shadow-none">
            <CardContent className="p-0">
                <div className="grid md:grid-cols-5 items-center gap-8 md:gap-16">
                    <div className="relative md:col-span-2 flex justify-center">
                      <div className="relative w-64 h-64 md:w-80 md:h-80">
                         {aboutImage && (
                            <Image
                                src={assets.my_image}
                                alt="About Mohiuddin Murad"
                                fill
                                className="object-cover rounded-full shadow-2xl shadow-primary/40"
                                data-ai-hint={aboutImage.imageHint}
                            />
                         )}
                         <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
                      </div>
                    </div>
                    <div className="md:col-span-3 p-8 text-left">
                        <h3 className="font-headline text-3xl font-bold text-primary mb-4">About Me</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            As a frontend developer, I'm driven by a passion for creating pixel-perfect, intuitive user interfaces that people love to use. I specialize in turning complex problems into beautiful, functional web experiences using modern technologies like React, Next.js, and TypeScript. My focus is on writing clean, maintainable code and building responsive applications that perform flawlessly on any device.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>

      </main>
    </div>
  );
}
