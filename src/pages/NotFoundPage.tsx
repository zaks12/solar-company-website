import { Link } from 'react-router-dom';
import { Sun, ArrowLeft } from 'lucide-react';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export function NotFoundPage() {
  useDocumentMeta({
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
  });
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy-700 px-5">
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-solar-500/5" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-energy-500/5" />

      <div className="relative text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-solar-500 text-navy-700">
          <Sun className="h-8 w-8" strokeWidth={2.5} />
        </div>
        <h1 className="font-display text-6xl font-extrabold tracking-tight text-white sm:text-7xl">
          404
        </h1>
        <p className="mt-4 text-lg text-navy-100">
          The page you are looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-solar-500 px-6 py-3 text-base font-semibold text-navy-700 transition-all duration-200 hover:bg-solar-400 hover:shadow-xl hover:shadow-solar-500/30"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
