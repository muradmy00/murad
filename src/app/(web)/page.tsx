import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Code, Download } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card';


const CodeLine = ({ children, indent = 0 }: { children: React.ReactNode, indent?: number }) => (
  <div style={{ paddingLeft: `${indent * 1.5}rem` }}>{children}</div>
);

export default function HomePage() {
  const socialLinks = [
    { label: 'JavaScript lover', icon: '🚀' },
    { label: 'OlovaJS creator', icon: '🔧' },
    { label: 'Crafting frameworks', icon: '💻' },
  ];

  const profileCode = [
    { line: "const profile = {", indent: 0, color: "text-pink-400" },
    { line: "name: 'Nazmul Hossain',", indent: 1, color: "text-white" },
    { line: "title: 'Full-Stack Developer | Cloud Enthusiast | Problem Solver',", indent: 1, color: "text-white" },
    { line: "skills: [", indent: 1, color: "text-white" },
    { line: "'React', 'NextJS', 'Redux', 'Express',", indent: 2, color: "text-amber-300" },
    { line: "'MySQL', 'MongoDB', 'Docker', 'AWS', 'TypeScript',", indent: 2, color: "text-amber-300" },
    { line: "'GraphQL', 'Git', 'Linux', 'Discord Development'", indent: 2, color: "text-amber-300" },
    { line: "],", indent: 1, color: "text-white" },
    { line: "hardWorker: true,", indent: 1, color: "text-purple-400" },
    { line: "quickLearner: true,", indent: 1, color: "text-purple-400" },
    { line: "problemSolver: true,", indent: 1, color: "text-purple-400" },
    { line: "yearsOfExperience: 4,", indent: 1, color: "text-purple-400" },
    { line: "hireable: function() {", indent: 1, color: "text-purple-400" },
    { line: "return (", indent: 2, color: "text-pink-400" },
    { line: "this.hardWorker &&", indent: 3, color: "text-white" },
    { line: "this.problemSolver &&", indent: 3, color: "text-white" },
    { line: "this.skills.length >= 5 &&", indent: 3, color: "text-white" },
    { line: "this.yearsOfExperience >= 3", indent: 3, color: "text-white" },
    { line: ");", indent: 2, color: "text-pink-400" },
    { line: "}", indent: 1, color: "text-white" },
    { line: "};", indent: 0, color: "text-pink-400" },
  ];
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <main className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-6">
          <Badge
            variant="outline"
            className="w-fit-content border-primary text-primary"
          >
            ● Welcome to my universe
          </Badge>
          <div className="space-y-4">
            <h1 className="font-headline text-5xl md:text-7xl font-bold">
              Hello <br /> I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-400 to-primary-foreground animate-gradient-x">
                Nazmul Hossain
              </span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Badge className="bg-accent text-accent-foreground">UI Magic</Badge>
            <Badge className="bg-secondary">Clean Code</Badge>
            <Badge className="bg-secondary">Learning MARN Stack</Badge>
            <Badge className="bg-yellow-600 text-white">Innovation</Badge>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            {socialLinks.map((link, index) => (
              <div key={index} className="flex items-center gap-2">
                <span>{link.label}</span>
                <span>{link.icon}</span>
                {index < socialLinks.length - 1 && <span>|</span>}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-white">
              <Link href="/projects">Learn More</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/resume">
                Get Resume <Download className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        <Card className="bg-gray-900/50 backdrop-blur-sm border-2 border-primary/20 shadow-2xl shadow-primary/10 rounded-lg overflow-hidden">
          <CardHeader className="p-2 bg-gray-800/50 flex flex-row items-center justify-between">
             <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
             </div>
             <p className="text-sm text-muted-foreground">developer.js</p>
          </CardHeader>
          <CardContent className="p-6 font-code text-sm">
            {profileCode.map((item, index) => (
                <CodeLine key={index} indent={item.indent}>
                  <span className={item.color}>{item.line}</span>
                </CodeLine>
              ))}
          </CardContent>
        </Card>
      </main>
      <div className="text-center mt-16 text-muted-foreground">
        <Link href="#about" className="hover:text-primary">About me</Link>
      </div>
    </div>
  );
}
