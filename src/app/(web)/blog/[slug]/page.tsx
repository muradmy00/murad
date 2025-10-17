import { blogPosts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';
import { Calendar, User, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary mb-4">
            {post.title}
          </h1>
          <div className="flex items-center justify-center space-x-4 text-muted-foreground text-sm mb-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{format(new Date(post.publishedAt), 'MMMM d, yyyy')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center justify-center flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          )}
        </header>

        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent my-8"></div>

        {post.imageUrl && !post.content.includes('<img') && (
          <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint={post.imageHint}
              priority
            />
          </div>
        )}

        <div
          className="prose prose-invert prose-lg max-w-none mx-auto text-foreground/90
            prose-headings:text-primary prose-headings:font-headline
            prose-a:text-accent prose-a:transition-colors hover:prose-a:text-accent/80
            prose-strong:text-primary-foreground
            prose-blockquote:border-l-accent prose-blockquote:text-muted-foreground
            prose-pre:bg-secondary prose-pre:text-foreground prose-pre:p-4 prose-pre:rounded-lg
            prose-code:text-accent prose-code:font-code"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}
