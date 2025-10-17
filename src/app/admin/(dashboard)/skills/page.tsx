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
import { Progress } from '@/components/ui/progress';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, doc, deleteDoc } from 'firebase/firestore';

export default function AdminSkillsPage() {
  const firestore = useFirestore();
  const skillsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'skills'));
  }, [firestore]);
  const { data: skills, isLoading } = useCollection(skillsQuery);

  const handleDelete = async (id: string) => {
    if (!firestore) return;
    if (confirm('Are you sure you want to delete this skill?')) {
      await deleteDoc(doc(firestore, 'skills', id));
    }
  };

  return (
    <div>
      <div className="flex items-center">
        <h1 className="font-headline text-3xl font-bold">Skills</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button asChild size="sm" className="h-8 gap-1">
            <Link href="/admin/skills/new">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Skill
              </span>
            </Link>
          </Button>
        </div>
      </div>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Your Skills</CardTitle>
          <CardDescription>
            Manage your technical skills and their proficiency levels.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="w-[30%]">Proficiency</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading && <TableRow><TableCell colSpan={4}>Loading...</TableCell></TableRow>}
              {skills?.map((skill) => (
                <TableRow key={skill.id}>
                  <TableCell className="font-medium">{skill.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{skill.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={skill.level} className="h-2" />
                      <span>{skill.level}%</span>
                    </div>
                  </TableCell>
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
                          <Link href={`/admin/skills/edit/${skill.id}`}>Edit</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(skill.id)}>Delete</DropdownMenuItem>
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
            Showing <strong>1-{skills?.length ?? 0}</strong> of <strong>{skills?.length ?? 0}</strong> skills
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
