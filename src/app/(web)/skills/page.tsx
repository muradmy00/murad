
'use client';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { skills } from '@/lib/data';
import type { Skill } from '@/lib/types';

const skillCategories: Skill['category'][] = [
  'Frontend',
  'Backend',
  'Languages',
  'Styling',
  'Database',
  'Tools',
  'Web3',
];

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
          My Technical Skills
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
          A summary of my technical capabilities and the tools I use to build
          modern web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => {
          const categorySkills = skills?.filter(
            (skill) => skill.category === category
          );
          if (!categorySkills || categorySkills.length === 0) return null;

          return (
            <Card key={category} className="shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-headline">{category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-medium">{skill.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {skill.proficiency}%
                      </p>
                    </div>
                    <Progress value={skill.proficiency} />
                  </div>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
