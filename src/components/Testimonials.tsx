import { MessageSquareQuote } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

/**
 * Reusable Testimonials component.
 * Currently displays a tasteful placeholder.
 * When real testimonials are available, replace the
 * placeholder block with a mapped list of testimonial cards.
 */
export function Testimonials() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-solar-600">
            Client Testimonials
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-700 text-balance sm:text-4xl lg:text-[2.75rem]">
            What Our Clients Say
          </h2>
        </Reveal>

        <Reveal delay={150}>
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="rounded-2xl border border-dashed border-navy-200 bg-white px-8 py-12 text-center shadow-sm">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-solar-50 text-solar-500">
                <MessageSquareQuote className="h-7 w-7" strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-xl font-semibold text-navy-700">
                Verified Client Testimonials Coming Soon
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-navy-400 text-pretty">
                We are collecting feedback from our clients and will share verified
                testimonials here once they are available. We value authentic reviews
                and will only display feedback we can genuinely attribute.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
