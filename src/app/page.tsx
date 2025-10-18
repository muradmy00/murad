
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Github, Linkedin, Facebook } from 'lucide-react';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import Image from 'next/image';
import { getPlaceholder, resume } from '@/lib/data';
import { assets } from '@/assets/assets';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/muradmy00', 'aria-label': 'GitHub' },
    { icon: Facebook, href: 'https://www.facebook.com/mdmohiudden.murad/', 'aria-label': 'Facebook' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/murad00/', 'aria-label': 'LinkedIn' },
  ];

  const aboutImage = getPlaceholder('about-me');

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = ["Mohiuddin Murad"];
  const period = 2000; // Time between typing cycles
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => {
      clearInterval(ticker);
    };
  }, [text, typingSpeed]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    setTypingSpeed(isDeleting ? 80 : 150);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150)
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <main className="text-center">
        <div className="relative inline-block animate-fade-in-up">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl min-h-[9rem] sm:min-h-[7rem] md:min-h-[8rem] lg:min-h-32 flex items-center justify-center">
            <span className="leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary-foreground animate-gradient-x font-medium">
                {text}
                <span className="border-r-2 border-accent animate-pulse">&nbsp;</span>
              </span>
            </span>
          </h1>
        </div>

        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '150ms' }}>
          A passionate Frontend Developer creating modern, responsive, and
          performant web applications.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent text-primary-foreground group hover:from-primary/90 hover:to-accent/90">
            <Link href="/projects">
              View My Work <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
            <a href={resume.url} target="_blank" rel="noopener noreferrer">
              Download Resume <Download className="ml-2" />
            </a>
          </Button>
        </div>
        
        <div className="mt-10 flex justify-center space-x-6 animate-fade-in-up" style={{ animationDelay: '450ms' }}>
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-muted-foreground hover:text-primary transition-colors" aria-label={link['aria-label']}>
                <link.icon className="h-7 w-7" />
              </Link>
            ))}
        </div>

        <Card className="mt-20 max-w-6xl mx-auto bg-transparent border-none shadow-none animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <CardContent className="p-0">
                <div className="grid md:grid-cols-5 items-center gap-8">
                    <div className="relative md:col-span-2 flex justify-center items-center">
                      <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                         <div className="absolute inset-0 bg-primary/20 rounded-lg blur-3xl -z-10 animate-pulse transform -rotate-6"></div>
                         {aboutImage && (
                            <Image
                                src={assets.my_image}
                                alt="About Mohiuddin Murad"
                                fill
                                className="object-cover rounded-lg border-4 border-card p-2 bg-card transition-all duration-500 ease-in-out shadow-[0_0_15px_rgba(var(--primary),0.4),0_0_30px_rgba(var(--accent),0.3)] group-hover:scale-105 group-hover:shadow-[0_0_25px_hsl(var(--primary)/0.6),0_0_45px_hsl(var(--accent)/0.5)]"
                                data-ai-hint={aboutImage.imageHint}
                            />
                         )}
                      </div>
                    </div>
                    <div className="md:col-span-3 text-left p-4 sm:p-8">
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
