import { Link } from 'react-router-dom';
import { Home, Building2, BatteryFull, Wrench, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const services = [
  {
    icon: Home,
    title: 'Residential Solar Installation',
    description:
      'Custom solar power systems for homes, designed around your roof, energy usage, and budget for reliable day-to-day power.',
    image:
      'https://images.pexels.com/photos/12243093/pexels-photo-12243093.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Building2,
    title: 'Commercial Solar Solutions',
    description:
      'Scalable solar installations for businesses, offices, and facilities looking to manage energy costs and reduce grid dependence.',
    image:
      'https://images.pexels.com/photos/9799994/pexels-photo-9799994.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: BatteryFull,
    title: 'Inverters & Battery Storage',
    description:
      'Quality inverters and battery storage systems that keep your power on through outages and maximise your solar investment.',
    image:
      'https://images.pexels.com/photos/38171130/pexels-photo-38171130.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Wrench,
    title: 'Solar Maintenance & Repairs',
    description:
      'Keep your system performing at its best with scheduled maintenance, inspections, and prompt repair services.',
    image:
      'https://images.pexels.com/photos/6961112/pexels-photo-6961112.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-solar-600">
            Our Services
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-700 text-balance sm:text-4xl lg:text-[2.75rem]">
            Solar Solutions for Every Need
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400 text-pretty">
            From residential rooftops to commercial facilities, we offer a full range
            of solar energy services to keep your power flowing.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="group h-full overflow-hidden rounded-2xl border border-navy-100/60 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-navy-900/10">
                {/* Image */}
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-700/40 to-transparent" />
                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-solar-600 shadow-lg backdrop-blur-sm">
                    <s.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                </div>

                {/* Body */}
                <div className="p-7">
                  <h3 className="font-display text-xl font-semibold text-navy-700">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-navy-400">
                    {s.description}
                  </p>
                  <Link
                    to="/services"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-solar-600 transition-colors hover:text-solar-700"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
