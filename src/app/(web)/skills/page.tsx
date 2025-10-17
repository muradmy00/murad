
import { skills } from '@/lib/data';
import { SkillIcon } from '@/components/icons/skill-icon';

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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="group relative flex flex-col items-center justify-center p-6 bg-secondary/30 rounded-lg border-2 border-transparent transition-all duration-300 hover:border-primary hover:bg-secondary/60 hover:shadow-2xl hover:shadow-primary/20"
          >
            <div className="h-16 w-16 mb-4 flex items-center justify-center">
              <SkillIcon
                skillName={skill.name}
                className="h-full w-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="text-lg font-semibold text-foreground text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
