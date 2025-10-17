
import { blogPosts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image, { StaticImageData } from 'next/image';
import { format } from 'date-fns';
import { Calendar, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center space-x-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-semibold text-sm">{tag}</Badge>
                ))}
              </div>
            )}
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex items-center space-x-6 text-muted-foreground text-sm">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>By {post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{format(new Date(post.publishedAt), 'MMMM d, yyyy')}</span>
              </div>
            </div>
          </header>

          {post.imageUrl && (
            <div className="relative w-full aspect-[16/9] my-8 rounded-lg overflow-hidden shadow-lg border border-border">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className={cn(
                  'object-cover',
                  typeof post.imageUrl !== 'string' && 'object-contain p-4 bg-secondary/20'
                )}
                data-ai-hint={post.imageHint}
                priority
              />
            </div>
          )}

          <div
            className="prose prose-lg dark:prose-invert max-w-none mx-auto text-foreground/90
              prose-headings:font-headline prose-headings:text-primary prose-headings:font-bold prose-headings:mb-4 prose-headings:mt-8
              prose-p:leading-relaxed prose-p:my-4
              prose-a:text-accent prose-a:font-medium prose-a:transition-colors hover:prose-a:text-accent/80 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground
              prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground
              prose-pre:bg-secondary/50 prose-pre:text-foreground prose-pre:p-4 prose-pre:rounded-lg prose-pre:border prose-pre:border-border
              prose-code:text-accent prose-code:font-code prose-code:bg-secondary/50 prose-code:rounded prose-code:px-1.5 prose-code:py-1
              prose-li:my-2
              prose-ol:my-4
              prose-ul:my-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
    return blogPosts?.map((post) => ({
        slug: post.slug,
    })) || [];
}
