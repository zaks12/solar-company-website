import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { ButtonLink } from '@/components/Layout';

/**
 * Reusable CTA band — dark navy with headline, supporting text,
 * and a Get a Quote button. Used across interior pages.
 */
type CTABandProps = {
  title?: string;
  subtitle?: string;
};

export function CTABand({
  title = 'Ready to Power Your Future?',
  subtitle = 'Take the first step toward energy independence. Request a free consultation and let us design a solar solution that fits your needs.',
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden bg-navy-800 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-800" />

      <div className="relative mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-solar-500/30 bg-solar-500/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-solar-400" />
            <span className="text-sm font-medium text-solar-100">
              Let&apos;s Get Started
            </span>
          </div>

          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-navy-100 text-pretty">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <ButtonLink to="/contact" variant="primary">
              Get a Quote
              <ArrowRight className="h-5 w-5" />
            </ButtonLink>
            <ButtonLink to="/services" variant="secondary">
              View Services
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
