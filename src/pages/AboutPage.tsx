import {
  Target,
  Eye,
  ShieldCheck,
  Award,
  Users,
  Wrench,
  Sun,
  Leaf,
  HandHeart,
} from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CTABand } from '@/components/CTABand';
import { brand } from '@/config/brand';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const heroImage =
  'https://images.pexels.com/photos/4254166/pexels-photo-4254166.jpeg?auto=compress&cs=tinysrgb&w=1920';

const aboutImage =
  'https://images.pexels.com/photos/9875418/pexels-photo-9875418.jpeg?auto=compress&cs=tinysrgb&w=1000';

const missionVision = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To make dependable solar energy accessible to Nigerian homes and businesses by designing, installing, and maintaining solar power systems that are tailored to each customer\u2019s needs and built for long-term reliability.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To be a trusted name in Nigeria\u2019s renewable energy landscape — helping communities and businesses move toward greater energy independence through practical, well-designed solar solutions.',
  },
];

const coreValues = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description:
      'We are honest about what solar can and cannot do. We will not make promises we cannot stand behind.',
  },
  {
    icon: Award,
    title: 'Quality',
    description:
      'We prioritise dependable equipment and professional workmanship in every system we design and install.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description:
      'Every system is designed around the customer\u2019s actual needs — not a generic template.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      'We believe solar energy is a practical step toward a cleaner, more sustainable energy future.',
  },
  {
    icon: HandHeart,
    title: 'Transparency',
    description:
      'We communicate clearly throughout the process — from consultation to post-installation support.',
  },
  {
    icon: Wrench,
    title: 'Reliability',
    description:
      'We design systems for dependable performance and remain available for support after installation.',
  },
];

const serviceApproach = [
  {
    title: 'Understanding Your Needs',
    description:
      'We start by listening. Every consultation begins with a conversation about your energy usage, goals, and constraints.',
  },
  {
    title: 'Honest Assessment',
    description:
      'We assess your property and energy patterns, then provide a straightforward recommendation — including where solar may not be the right fit.',
  },
  {
    title: 'Professional Installation',
    description:
      'Our installation process follows established procedures, with attention to safety, correct wiring, and secure mounting.',
  },
  {
    title: 'Continued Support',
    description:
      'After installation, we provide maintenance guidance and remain reachable for questions, servicing, and repairs.',
  },
];

const qualityPillars = [
  {
    icon: ShieldCheck,
    title: 'Quality You Can See',
    description:
      'From panel selection to mounting and wiring, we focus on the details that make a system reliable over the long term.',
  },
  {
    icon: Sun,
    title: 'Reliable Performance',
    description:
      'We design systems with dependable components and proper sizing to support consistent energy production.',
  },
  {
    icon: HandHeart,
    title: 'Customer Support',
    description:
      'We are committed to being reachable after your system is installed — for maintenance, questions, and repairs.',
  },
];

export function AboutPage() {
  useDocumentMeta({
    title: 'About Us',
    description:
      'Learn about Zacks Solar — our mission, vision, core values, and our approach to dependable solar energy for Nigerian homes and businesses.',
  });
  return (
    <>
      <PageHero
        badge="About Us"
        title={
          <>
            Powering a Brighter
            <br />
            <span className="text-solar-500">Tomorrow</span>
          </>
        }
        subtitle="Learn about Zacks Solar — a demo renewable-energy brand committed to dependable solar solutions for Nigerian homes and businesses."
        image={heroImage}
        alt="Solar energy professionals inspecting solar panels"
      />

      {/* Company overview */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-navy-900/10">
                <img
                  src={aboutImage}
                  alt="Solar panel installation technician on a rooftop"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-solar-600">
                  Company Overview
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-700 text-balance">
                  A Demo Brand With Real Intentions
                </h2>
                <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-navy-400">
                  <p>
                    {brand.name} is a demo brand created to showcase how a Nigerian
                    solar energy company might present itself online. This website is a
                    reusable template developed by Zarkode Digital Solutions, ready to be
                    customized for a real solar company client.
                  </p>
                  <p>
                    Behind the placeholder is a genuine approach to solar energy: we
                    believe in designing systems that fit the customer, selecting
                    dependable equipment, and providing professional service at every
                    stage — from the first conversation to ongoing support after
                    installation.
                  </p>
                  <p>
                    We do not make unsupported performance claims or fabricate a company
                    history. Instead, we focus on what we can commit to: a transparent
                    process, honest advice, and a system designed around your needs.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-7 md:grid-cols-2">
            {missionVision.map((item, i) => (
              <Reveal key={item.title} delay={i * 120}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-navy-100/60 bg-cream p-8 lg:p-10">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-solar-500/5" />
                  <div className="relative">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-solar-500 text-navy-700">
                      <item.icon className="h-7 w-7" strokeWidth={2} />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-navy-700">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-navy-400 text-pretty">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-navy-700 py-20 lg:py-28">
        <div className="relative mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-solar-400">
              Core Values
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
              What We Stand For
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-100 text-pretty">
              The principles below guide how we approach every project and every
              customer relationship.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, i) => (
              <Reveal key={value.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-solar-400/40 hover:bg-white/[0.07]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-solar-500/15 text-solar-400 transition-all duration-300 group-hover:bg-solar-500 group-hover:text-navy-700">
                    <value.icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-navy-200">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service approach */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-solar-600">
              Our Approach
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-700 text-balance sm:text-4xl">
              How We Serve Our Customers
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-400 text-pretty">
              Our proposed customer service and installation approach, step by step.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {serviceApproach.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <div className="flex h-full items-start gap-5 rounded-2xl border border-navy-100/60 bg-white p-7 transition-all duration-300 hover:border-solar-300 hover:shadow-xl hover:shadow-navy-900/5">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-solar-500 font-display text-base font-bold text-navy-700">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-navy-700">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality, reliability, support */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-solar-600">
              Our Commitments
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-700 text-balance sm:text-4xl">
              Quality, Reliability & Support
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-400 text-pretty">
              Three areas where we propose to hold ourselves to a consistent standard.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {qualityPillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 120}>
                <div className="group h-full rounded-2xl border border-navy-100/60 bg-cream p-8 text-center transition-all duration-300 hover:shadow-xl hover:shadow-navy-900/5">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-solar-50 text-solar-600 transition-all duration-300 group-hover:bg-solar-500 group-hover:text-white">
                    <pillar.icon className="h-7 w-7" strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy-700">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-400">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Let's Build Your Solar Future"
        subtitle="Have questions or ready to start? Get in touch for a free consultation — we're here to help you find the right energy solution."
      />
    </>
  );
}
