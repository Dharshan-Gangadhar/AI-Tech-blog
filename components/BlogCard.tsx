import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { type Post } from '@/lib/mdx';

export function BlogCard({ post }: { post: Post }) {
  const { title, description, date, slug, readingTime, tags } = post.metadata;
  return (
    <article className="group relative flex flex-col items-start justify-between rounded-2xl border border-zinc-200/50 bg-white/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:border-zinc-800/50 dark:bg-zinc-900/30 dark:hover:border-blue-500/30 dark:hover:bg-zinc-900/80 dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.02)]">
      <div className="flex items-center gap-x-4 text-xs font-medium text-zinc-500 dark:text-zinc-400">
        <time dateTime={date}>
          {format(parseISO(date), 'MMMM d, yyyy')}
        </time>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500/50" />
          {readingTime}
        </span>
      </div>
      <div className="relative mt-4 max-w-xl">
        <h3 className="text-xl font-bold tracking-tight text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
          <Link href={`/blog/${slug}`}>
            <span className="absolute inset-0" />
            {title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </div>
      {tags && tags.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-zinc-100/80 px-2.5 py-0.5 text-xs font-semibold text-zinc-600 transition-colors group-hover:bg-zinc-100 dark:bg-zinc-800/80 dark:text-zinc-300 dark:group-hover:bg-zinc-800"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
