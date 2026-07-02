import Link from 'next/link';
import { Home, ArrowLeft, TreePalm } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-cream-100 px-6 pt-20">
      <div className="text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-forest-200 text-forest-800">
          <TreePalm className="h-8 w-8" />
        </span>
        <h1 className="mt-8 font-serif text-7xl font-semibold text-forest-800 md:text-9xl">404</h1>
        <h2 className="mt-4 font-serif text-2xl font-semibold text-forest-700">
          This path leads nowhere
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-forest-700/70">
          The page you are looking for may have been moved or no longer exists. Let us guide you
          back.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-forest-800 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-forest-700"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-forest-800/30 px-7 py-3.5 text-sm font-semibold text-forest-800 transition-all hover:bg-forest-800 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
