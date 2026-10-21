import { Link } from 'react-router-dom';
import {
  Home,
  Building2,
  BatteryFull,
  Wrench,
  ArrowRight,
  Check,
  ClipboardList,
  Gauge,
  Settings2,
  Headset,
  ChevronDown,
} from 'lucide-react';
import { useState } from 'react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CTABand } from '@/components/CTABand';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const heroImage =
  'https://images.pexels.com/photos/9875679/pexels-photo-9875679.jpeg?auto=compress&cs=tinysrgb&w=1920';

const detailedServices = [
  {
    icon: Home,
    title: 'Residential Solar Installation',
    description:
      'Custom solar power systems designed for Nigerian homes. We assess your roof space, daily energy consumption, and budget to design a system that covers your household needs — from lighting and appliances to running your home comfortably through grid outages.',
    benefits: [
      'System sized to your household energy usage',
      'Roof-mounted panels with professional installation',
      'Options for hybrid and off-grid configurations',
      'Designed with future expansion in mind',
    ],
    image:
      'https://images.pexels.com/photos/12243093/pexels-photo-12243093.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    icon: Building2,
    title: 'Commercial Solar Solutions',
    description:
      'Scalable solar installations for businesses, offices, shops, and facilities. Whether you are looking to reduce your operational energy costs or ensure business continuity during power outages, we design commercial systems that align with your operational requirements.',
    benefits: [
      'Systems tailored to business energy profiles',
      'Grid-tied and hybrid options available',
      'Designed to scale with your operations',
      'Professional project management from start to finish',
    ],
    image:
      'https://images.pexels.com/photos/9799994/pexels-photo-9799994.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    icon: BatteryFull,
    title: 'Inverters & Battery Storage',
    description:
      'Quality inverters and battery storage systems that keep your power on when the grid fails. We help you select the right inverter capacity and battery bank for your needs, ensuring stored energy is available when you need it most — at night, during outages, or on low-sunlight days.',
    benefits: [
      'Inverter sizing matched to your load requirements',
      'Battery storage for overnight and backup power',
      'Compatibility with new or existing solar systems',
      'Guidance on battery capacity and expected runtime',
    ],
    image:
      'https://images.pexels.com/photos/39057090/pexels-photo-39057090.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    icon: Wrench,
    title: 'Solar Maintenance & Repairs',
    description:
      'Keep your solar system performing at its best with scheduled maintenance, inspections, and prompt repair services. From panel cleaning and inverter checks to troubleshooting and component replacement, we help protect your investment and keep your power flowing.',
    benefits: [
      'Scheduled panel cleaning and system inspections',
      'Inverter diagnostics and performance checks',
      'Battery health assessments',
      'Prompt repair service for system faults',
    ],
    image:
      'https://images.pexels.com/photos/6961112/pexels-photo-6961112.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
];

const processSteps = [
  {
    icon: ClipboardList,
    title: 'Consultation',
    description:
      'We discuss your energy needs, goals, and property to understand what you are looking for.',
  },
  {
    icon: Gauge,
    title: 'Energy Assessment',
    description:
      'We assess your energy usage patterns and site conditions to determine the right system size.',
  },
  {
    icon: Settings2,
    title: 'System Design & Installation',
    description:
      'We design a tailored system and carry out the installation with attention to safety and quality.',
  },
  {
    icon: Headset,
    title: 'Ongoing Support',
    description:
      'After installation, we provide maintenance guidance and support to keep your system running.',
  },
];

const serviceFaqs = [
  {
    question: 'How do you determine the right solar system for my home?',
    answer:
      'We assess your daily energy consumption, the appliances you typically run, available roof or ground space, and your budget. This information helps us recommend a system size and configuration that aligns with your needs.',
  },
  {
    question: 'Can you install solar on any type of roof?',
    answer:
      'Most roof types can accommodate solar panels, but the suitability depends on factors like roof orientation, angle, structural integrity, and available shading. We evaluate these during the site assessment and advise accordingly.',
  },
  {
    question: 'What size battery storage do I need?',
    answer:
      'Battery sizing depends on what you want to power during an outage and for how long. We help you calculate your critical load requirements and recommend a battery capacity that meets your backup power goals.',
  },
  {
    question: 'Do you offer maintenance for systems installed by others?',
    answer:
      'Yes. We offer maintenance and repair services for existing solar systems, even if they were not originally installed by us. Contact us to schedule an inspection and assessment.',
  },
  {
    question: 'Can I upgrade my system later?',
    answer:
      'In many cases, yes. We design systems with future expansion in mind where possible. If you anticipate increasing your energy usage, let us know during the consultation so we can plan for scalability.',
  },
];

export function ServicesPage() {
  useDocumentMeta({
    title: 'Solar Energy Services',
    description:
      'Residential solar, commercial solar, inverters & battery storage, and maintenance — explore the full range of solar energy services from Zacks Solar.',
  });
  return (
    <>
      <PageHero
        badge="Our Services"
        title={
          <>
            Solar Solutions for
            <br />
            <span className="text-solar-500">Every Need</span>
          </>
        }
        subtitle="From residential rooftops to commercial facilities, inverters to maintenance — explore the full range of solar energy services we offer."
        image={heroImage}
        alt="Aerial view of houses with solar panels"
      />

      {/* Introduction */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-solar-600">
              Proposed Energy Solutions
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-700 text-balance sm:text-4xl">
              Designed Around Your Energy Needs
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-400 text-pretty">
              Every home and business has unique energy requirements. Our approach
              begins with understanding your needs and designing a solar solution
              that fits — not a one-size-fits-all package. Below are the core services
              we propose, each with a clear process and a commitment to professional
              service from start to finish.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Detailed service sections */}
      {detailedServices.map((service, i) => (
        <section
          key={service.title}
          className={i % 2 === 0 ? 'bg-white py-20 lg:py-28' : 'bg-cream py-20 lg:py-28'}
        >
          <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
            <div
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              {/* Image */}
              <Reveal>
                <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-navy-900/10">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 text-solar-600 shadow-lg backdrop-blur-sm">
                    <service.icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                </div>
              </Reveal>

              {/* Content */}
              <Reveal delay={100}>
                <div>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-navy-700 text-balance sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-navy-400 text-pretty">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-energy-500/10 text-energy-500">
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </span>
                        <span className="text-sm text-navy-400">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="group mt-7 inline-flex items-center gap-2 rounded-lg bg-solar-500 px-6 py-3 text-sm font-semibold text-navy-700 transition-all duration-200 hover:bg-solar-400 hover:shadow-lg hover:shadow-solar-500/30"
                  >
                    Request This Service
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* Consultation process */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-solar-600">
              Our Process
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-700 text-balance sm:text-4xl">
              Consultation & System Assessment
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-navy-400 text-pretty">
              Every engagement follows a clear, step-by-step process — from your first
              enquiry through to ongoing support after installation.
            </p>
          </Reveal>

          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-navy-100 to-transparent lg:block" />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, i) => (
                <Reveal key={step.title} delay={i * 120}>
                  <div className="relative text-center">
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

      {/* Service FAQs */}
      <ServiceFAQ />

      <CTABand
        title="Ready to Get Started?"
        subtitle="Request a free consultation and let us help you find the right solar solution for your home or business."
      />
    </>
  );
}

function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="text-sm font-semibold uppercase tracking-wider text-solar-600">
                Service FAQs
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-700 text-balance sm:text-4xl">
                Common Service Questions
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-navy-400 text-pretty">
                Answers to questions about our services, system design, and
                maintenance offerings.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="space-y-3">
              {serviceFaqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={faq.question}
                    className={`overflow-hidden rounded-xl border transition-colors duration-200 ${
                      isOpen
                        ? 'border-solar-300 bg-solar-50/30'
                        : 'border-navy-100/60 bg-white hover:border-navy-200'
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      aria-expanded={isOpen}
                      aria-controls={`service-faq-panel-${i}`}
                      id={`service-faq-button-${i}`}
                    >
                      <span className="font-display text-base font-semibold text-navy-700 sm:text-lg">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`flex-shrink-0 h-5 w-5 text-solar-600 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                      role="region"
                      id={`service-faq-panel-${i}`}
                      aria-labelledby={`service-faq-button-${i}`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-5 text-[0.95rem] leading-relaxed text-navy-400">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
