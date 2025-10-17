import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, FileText, Lightbulb, MessageSquare } from 'lucide-react';
import { projects, blogPosts, skills, messages } from '@/lib/data';

const stats = [
  {
    title: "Projects",
    count: projects.length,
    icon: Briefcase,
    color: "text-blue-500",
  },
  {
    title: "Blog Posts",
    count: blogPosts.length,
    icon: FileText,
    color: "text-green-500",
  },
  {
    title: "Skills",
    count: skills.length,
    icon: Lightbulb,
    color: "text-yellow-500",
  },
  {
    title: "Messages",
    count: messages.length,
    icon: MessageSquare,
    color: "text-purple-500",
  },
];

export default function DashboardPage() {
  return (
    <div>
      <h1 className="font-headline text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 text-muted-foreground ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.count}</div>
              <p className="text-xs text-muted-foreground">
                Total {stat.title.toLowerCase()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

       <div className="mt-8">
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Welcome to your Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    This is your central hub for managing your portfolio content. Use the navigation on the left to add, edit, or delete projects, experiences, skills, and blog posts. You can also view contact messages sent through your portfolio.
                </p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
