
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { format } from 'date-fns';
import { blogPosts } from '@/lib/data';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const BlogPostCard = ({ post }: { post: (typeof blogPosts)[0] }) => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    // stripHtml should only run on the client after hydration
    function stripHtml(html: string) {
      if (typeof window === 'undefined') return ''; // Don't run on server
      const doc = new DOMParser().parseFromString(html, 'text/html');
      return doc.body.textContent || "";
    }
    setDescription(stripHtml(post.content).substring(0, 150));
  }, [post.content]);

  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <Card className="overflow-hidden shadow-lg h-full flex flex-col group-hover:shadow-2xl group-hover:border-primary border-2 border-transparent transition-all duration-300">
        <CardHeader className="p-0">
          {post.imageUrl && (
            <div className={cn(
              "relative w-full aspect-[3/2] rounded-t-lg overflow-hidden",
              typeof post.imageUrl !== 'string' && 'bg-secondary/20 p-4'
            )}>
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className={cn(
                  'object-cover group-hover:scale-105 transition-transform duration-300',
                  typeof post.imageUrl !== 'string' && 'object-contain'
                )}
                data-ai-hint={post.imageHint}
              />
            </div>
          )}
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="font-headline text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </CardTitle>
          <p className="text-sm text-muted-foreground mb-4">
            {post.publishedAt ? format(new Date(post.publishedAt), 'MMMM d, yyyy') : ''}
          </p>
          <CardDescription className="text-muted-foreground line-clamp-3">
            {description ? `${description}...` : <span className="animate-pulse">Loading...</span>}
          </CardDescription>
        </CardContent>
        <div className="p-6 pt-0 mt-auto">
           <div className="flex items-center text-primary font-semibold">
              Read More
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
           </div>
        </div>
      </Card>
    </Link>
  )
}

export default function BlogPage() {

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
          My Blog
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
          Thoughts on web development, technology, and everything in between.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts?.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
