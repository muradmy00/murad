
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

function stripHtml(html: string) {
  if (typeof window !== 'undefined') {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  }
  return html.replace(/<[^>]*>?/gm, '');
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
          <Link key={post.id} href={`/blog/${post.slug}`} className="group">
            <Card className="overflow-hidden shadow-lg h-full flex flex-col group-hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                {post.imageUrl && (
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full object-cover rounded-t-lg aspect-[3/2] group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={post.imageHint}
                  />
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
                  {stripHtml(post.content).substring(0, 150)}
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
        ))}
      </div>
    </div>
  );
}
