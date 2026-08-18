import { Container } from '@/components/Container';
import { getAllPosts } from '@/lib/mdx';
import { BlogCard } from '@/components/BlogCard';

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Container className="mt-9">
        <div className="relative max-w-2xl">
          <div className="absolute -left-10 -top-10 -z-10 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-600/20"></div>
          <h1 className="bg-gradient-to-br from-zinc-900 via-zinc-700 to-zinc-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-600 sm:text-6xl sm:leading-[1.1]">
            Full Stack Developer, AI & Tech Enthusiast, and Continuous Learner.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
            I&apos;m a final year computer science student building intelligent systems and documenting my journey. Here, I share my thoughts on Artificial Intelligence, machine learning, and Technology.
          </p>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {posts.length > 0 ? (
              posts.map((post) => (
                <BlogCard key={post.metadata.slug} post={post} />
              ))
            ) : (
              <p className="text-zinc-500 dark:text-zinc-400">No posts found.</p>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
