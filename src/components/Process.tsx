import { ClipboardList, Gauge, Settings2, Headset } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const steps = [
  {
    icon: ClipboardList,
    title: 'Consultation',
    description:
      'We start with a conversation about your energy needs, goals, and property to understand what you are looking for.',
  },
  {
    icon: Gauge,
    title: 'Energy Assessment',
    description:
      'We assess your energy usage patterns and site conditions to determine the right system size and components.',
  },
  {
    icon: Settings2,
    title: 'System Design & Installation',
    description:
      'We design a tailored system and carry out the installation with attention to safety and quality workmanship.',
  },
  {
    icon: Headset,
    title: 'Ongoing Support',
    description:
      'After installation, we provide maintenance guidance and support to keep your system running smoothly.',
  },
];

export function Process() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-solar-600">
            Our Process
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-700 text-balance sm:text-4xl lg:text-[2.75rem]">
            How We Work With You
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400 text-pretty">
            A clear, step-by-step approach from your first enquiry through to
            long-term support after installation.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* Connecting line - desktop */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-navy-100 to-transparent lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 120}>
                <div className="relative text-center">
                  {/* Icon circle */}
                  <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-solar-500 text-navy-700 shadow-lg shadow-solar-500/20">
                    <step.icon className="h-6 w-6" strokeWidth={2} />
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-navy-700 text-[0.65rem] font-bold text-solar-400 ring-2 ring-white">
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold text-navy-700">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-navy-400">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
