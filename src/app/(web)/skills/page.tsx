
'use client';
import type { Skill } from '@/lib/types';
import { skills } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import {
  Smartphone,
  Server,
  Languages,
  PenTool,
  Puzzle,
  GitBranch,
} from 'lucide-react';
import React from 'react';

const skillCategories: Exclude<Skill['category'], 'Database'>[] = [
  'Frontend',
  'Backend',
  'Languages',
  'Styling',
  'Tools',
  'Web3',
];

const categoryIcons: { [key in Exclude<Skill['category'], 'Database'>]: React.ReactNode } = {
  Frontend: <Smartphone className="h-6 w-6" />,
  Backend: <Server className="h-6 w-6" />,
  Languages: <Languages className="h-6 w-6" />,
  Styling: <PenTool className="h-6 w-6" />,
  Tools: <Puzzle className="h-6 w-6" />,
  Web3: <GitBranch className="h-6 w-6" />,
};

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
          My Technical Skills
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground mt-4">
          A showcase of the technologies and tools I use to build modern,
          performant, and scalable web applications.
        </p>
      </div>

      <div className="space-y-12">
        {skillCategories.map((category) => {
          const categorySkills = skills?.filter(
            (skill) => skill.category === category
          );
          if (!categorySkills || categorySkills.length === 0) return null;

          return (
            <div key={category}>
               <div className="flex items-center gap-4 mb-6">
                <div className="text-primary">{categoryIcons[category]}</div>
                <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary">
                  {category}
                </h2>
                <div className="flex-grow h-px bg-border"></div>
              </div>

              <div className="flex flex-wrap gap-4">
                {categorySkills.map((skill) => (
                  <div key={skill.id} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <Badge
                      variant="secondary"
                      className="relative px-5 py-3 text-base font-medium transition-all duration-200 transform group-hover:scale-110"
                    >
                      {skill.name}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
