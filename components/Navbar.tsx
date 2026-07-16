import Link from 'next/link';
import { Container } from './Container';
import { Hexagon } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/50 bg-white/60 backdrop-blur-xl transition-all dark:border-zinc-800/50 dark:bg-zinc-950/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center space-x-2 transition-opacity hover:opacity-80">
            <Hexagon className="h-6 w-6 text-zinc-900 transition-transform group-hover:-rotate-12 dark:text-zinc-50" />
            <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-lg font-bold tracking-tight text-transparent dark:from-zinc-50 dark:to-zinc-400">
              AI Journal
            </span>
          </Link>
          <nav className="flex items-center gap-4 md:gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
