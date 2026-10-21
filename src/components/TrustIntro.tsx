import { Sun, BatteryCharging, Wrench, Users } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const pillars = [
  {
    icon: Sun,
    title: 'Dependable Solar Energy',
    description:
      'We focus on solar power systems designed for reliability, so your home or business has access to clean energy when you need it.',
  },
  {
    icon: BatteryCharging,
    title: 'Energy Independence',
    description:
      'Reduce your dependence on the grid with thoughtfully designed solar and battery solutions tailored to your energy usage.',
  },
  {
    icon: Users,
    title: 'Tailored System Design',
    description:
      'Every property is different. We assess your needs and design a system that fits your space, budget, and energy goals.',
  },
  {
    icon: Wrench,
    title: 'Professional Service',
    description:
      'From the first consultation to post-installation support, our team is committed to a professional and transparent experience.',
  },
];

export function TrustIntro() {
  return (
    <section id="about" className="relative bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-solar-600">
            Why Solar
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-700 text-balance sm:text-4xl lg:text-[2.75rem]">
            A Smarter Approach to Energy
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400 text-pretty">
            Solar energy offers a practical path toward greater energy independence.
            At Zacks Solar, we combine dependable technology, tailored system design, and
            professional service to help you make the switch with confidence.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-navy-100/60 bg-white p-7 transition-all duration-300 hover:border-solar-300 hover:shadow-xl hover:shadow-navy-900/5">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-solar-50 text-solar-600 transition-colors duration-300 group-hover:bg-solar-500 group-hover:text-white">
                  <p.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy-700">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-navy-400">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
