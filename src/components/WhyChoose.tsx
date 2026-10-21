import { Lightbulb, Boxes, Hammer, LifeBuoy } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const commitments = [
  {
    icon: Lightbulb,
    title: 'Tailored Solutions',
    description:
      'We design every system around your specific energy needs, property, and budget — no one-size-fits-all packages.',
  },
  {
    icon: Boxes,
    title: 'Quality Equipment Selection',
    description:
      'We source dependable solar panels, inverters, and batteries from established manufacturers for long-term performance.',
  },
  {
    icon: Hammer,
    title: 'Professional Installation',
    description:
      'Our installation team follows established procedures to ensure your system is installed safely and correctly.',
  },
  {
    icon: LifeBuoy,
    title: 'After-Installation Support',
    description:
      'We remain available after your system is live, offering maintenance, monitoring guidance, and responsive repairs.',
  },
];

export function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-navy-700 py-20 lg:py-28">
      {/* Decorative accents */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-solar-500/5" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-energy-500/5" />

      <div className="relative mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-solar-400">
            Why Choose Zacks Solar
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-[2.75rem]">
            Our Service Commitments to You
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-100 text-pretty">
            These are the principles that guide how we work — proposed commitments
            to the standard of service you can expect from our team.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {commitments.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="group relative h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-solar-400/40 hover:bg-white/[0.07]">
                {/* Number */}
                <span className="absolute right-5 top-5 font-display text-4xl font-extrabold text-white/5 transition-colors duration-300 group-hover:text-solar-500/20">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-solar-500/15 text-solar-400 transition-all duration-300 group-hover:bg-solar-500 group-hover:text-navy-700">
                  <c.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {c.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy-200">
                  {c.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
