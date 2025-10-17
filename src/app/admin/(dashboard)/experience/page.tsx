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
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, doc, deleteDoc, orderBy } from 'firebase/firestore';
import { format } from 'date-fns';

export default function AdminExperiencePage() {
  const firestore = useFirestore();
  const experienceQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'experience'), orderBy('startDate', 'desc'));
  }, [firestore]);
  const { data: experience, isLoading } = useCollection(experienceQuery);

  const handleDelete = async (id: string) => {
    if (!firestore) return;
    if (confirm('Are you sure you want to delete this experience entry?')) {
      await deleteDoc(doc(firestore, 'experience', id));
    }
  };

  return (
    <div>
      <div className="flex items-center">
        <h1 className="font-headline text-3xl font-bold">Experience</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button asChild size="sm" className="h-8 gap-1">
            <Link href="/admin/experience/new">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Experience
              </span>
            </Link>
          </Button>
        </div>
      </div>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Your Work Experience</CardTitle>
          <CardDescription>
            Manage your professional experience here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className="hidden md:table-cell">Duration</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading && <TableRow><TableCell colSpan={4}>Loading...</TableCell></TableRow>}
              {experience?.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>{item.company}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {item.startDate ? format(new Date(item.startDate), 'MMM yyyy') : ''} - {item.endDate ? format(new Date(item.endDate), 'MMM yyyy') : 'Present'}
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
                          <Link href={`/admin/experience/edit/${item.id}`}>Edit</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(item.id)}>Delete</DropdownMenuItem>
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
            Showing <strong>1-{experience?.length ?? 0}</strong> of <strong>{experience?.length ?? 0}</strong> entries
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
