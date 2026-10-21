import { type ReactNode } from 'react';

/**
 * Reusable page hero — shorter than the homepage hero, used on
 * interior pages with a background image, headline, and subtitle.
 */
type PageHeroProps = {
  title: ReactNode;
  subtitle: string;
  image: string;
  badge?: string;
  alt: string;
};

export function PageHero({ title, subtitle, image, badge, alt }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-navy-700 pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-700 via-navy-700/85 to-navy-700/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-700/50 via-transparent to-navy-700/20" />
      </div>

      <div className="relative mx-auto w-full max-w-8xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          {badge && (
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-solar-500/30 bg-solar-500/10 px-4 py-2 animate-fade-in-down">
              <span className="h-2 w-2 rounded-full bg-solar-400" />
              <span className="text-sm font-medium text-solar-100">{badge}</span>
            </div>
          )}
          <h1
            className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white text-balance animate-fade-in-up sm:text-5xl"
            style={{ animationDelay: '0.1s', opacity: 0 }}
          >
            {title}
          </h1>
          <p
            className="mt-5 max-w-xl text-lg leading-relaxed text-navy-100 text-pretty animate-fade-in-up"
            style={{ animationDelay: '0.25s', opacity: 0 }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
