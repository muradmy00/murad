
'use client';

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
import { useState, useEffect } from 'react';

export default function HomePage() {
  const socialLinks = [
    { icon: Github, href: '#', 'aria-label': 'GitHub' },
    { icon: Twitter, href: '#', 'aria-label': 'Twitter' },
    { icon: Linkedin, href: '#', 'aria-label': 'LinkedIn' },
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
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <main className="text-center">
        <div className="relative inline-block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold h-24 md:h-32 lg:h-36">
            I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary-foreground animate-gradient-x">
              {text}
              <span className="border-r-2 border-accent animate-pulse">&nbsp;</span>
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
                    <div className="relative md:col-span-2 flex justify-center items-center">
                      <div className="relative w-64 h-64 md:w-80 md:h-80">
                         <div className="absolute inset-0 bg-primary/20 rounded-lg blur-3xl -z-10 animate-pulse transform -rotate-6"></div>
                         {aboutImage && (
                            <Image
                                src={assets.my_image}
                                alt="About Mohiuddin Murad"
                                fill
                                className="object-cover rounded-lg shadow-2xl shadow-primary/40 border-4 border-card p-2 bg-card transform rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-105"
                                data-ai-hint={aboutImage.imageHint}
                            />
                         )}
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
