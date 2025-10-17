'use client';
import Link from 'next/link';
import { PlusCircle, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, doc, deleteDoc } from 'firebase/firestore';

export default function AdminProjectsPage() {
  const firestore = useFirestore();
  const projectsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'projects'));
  }, [firestore]);
  const { data: projects, isLoading } = useCollection(projectsQuery);

  const handleDelete = async (id: string) => {
    if (!firestore) return;
    if (confirm('Are you sure you want to delete this project?')) {
      await deleteDoc(doc(firestore, 'projects', id));
    }
  };

  return (
    <div>
      <div className="flex items-center">
        <h1 className="font-headline text-3xl font-bold">Projects</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button asChild size="sm" className="h-8 gap-1">
            <Link href="/admin/projects/new">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Project
              </span>
            </Link>
          </Button>
        </div>
      </div>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Your Projects</CardTitle>
          <CardDescription>
            Manage your projects here. Add, edit, or delete them as needed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Tech Stack</TableHead>
                <TableHead className="hidden md:table-cell">Live URL</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading && <TableRow><TableCell colSpan={4}>Loading...</TableCell></TableRow>}
              {projects?.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.title}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {project.tags?.slice(0, 3).map((tech: string) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                      {project.tags?.length > 3 && <Badge variant="outline">...</Badge>}
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{project.liveUrl}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem asChild>
                          <Link href={`/admin/projects/edit/${project.id}`}>Edit</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(project.id)}>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-{projects?.length ?? 0}</strong> of <strong>{projects?.length ?? 0}</strong> projects
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
