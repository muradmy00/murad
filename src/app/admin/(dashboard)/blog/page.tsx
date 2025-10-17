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
import { format } from 'date-fns';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, doc, deleteDoc } from 'firebase/firestore';

export default function AdminBlogPage() {
  const firestore = useFirestore();
  const blogPostsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'blog_posts'));
  }, [firestore]);
  const { data: blogPosts, isLoading } = useCollection(blogPostsQuery);

  const handleDelete = async (id: string) => {
    if (!firestore) return;
    if (confirm('Are you sure you want to delete this post?')) {
      await deleteDoc(doc(firestore, 'blog_posts', id));
    }
  };

  return (
    <div>
      <div className="flex items-center">
        <h1 className="font-headline text-3xl font-bold">Blog Posts</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button asChild size="sm" className="h-8 gap-1">
            <Link href="/admin/blog/new">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Add Post
              </span>
            </Link>
          </Button>
        </div>
      </div>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Your Blog Posts</CardTitle>
          <CardDescription>
            Manage your blog posts here. Add, edit, or delete them.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Published</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading && <TableRow><TableCell colSpan={3}>Loading...</TableCell></TableRow>}
              {blogPosts?.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium">{post.title}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {post.publishedDate ? format(new Date(post.publishedDate), 'PPP') : 'N/A'}
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
                            <Link href={`/admin/blog/edit/${post.id}`}>Edit</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(post.id)}>Delete</DropdownMenuItem>
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
            Showing <strong>1-{blogPosts?.length ?? 0}</strong> of <strong>{blogPosts?.length ?? 0}</strong> posts
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
