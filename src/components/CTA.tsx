import { Link } from 'react-router-dom';
import { ArrowRight, Sun } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy-800 py-20 lg:py-28">
      {/* Background accent */}
      <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2">
        <Sun className="h-[500px] w-[500px] text-solar-500/[0.04]" strokeWidth={0.5} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-800" />

      <div className="relative mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-solar-500/30 bg-solar-500/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-solar-400" />
            <span className="text-sm font-medium text-solar-100">Let&apos;s Get Started</span>
          </div>

          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            Ready to Power Your Future?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-navy-100 text-pretty">
            Take the first step toward energy independence. Request a free
            consultation and let us design a solar solution that fits your needs.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-solar-500 px-7 py-3.5 text-base font-semibold text-navy-700 transition-all duration-200 hover:bg-solar-400 hover:shadow-xl hover:shadow-solar-500/30"
            >
              Get a Quote
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5"
            >
              View Services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
