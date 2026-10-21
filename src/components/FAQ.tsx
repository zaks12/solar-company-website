import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const faqs = [
  {
    question: 'How do I know what solar system size I need?',
    answer:
      'System sizing depends on your daily energy consumption, the appliances you run, available roof or ground space, and your budget. We assess these factors during the energy assessment step and recommend a system size that aligns with your usage patterns.',
  },
  {
    question: 'Do I need battery storage with my solar system?',
    answer:
      'Battery storage is optional but recommended if you want power available during grid outages or at night. Without batteries, a grid-tied system produces power only when the sun is shining. We can help you decide based on your energy goals and typical outage patterns in your area.',
  },
  {
    question: 'How long does a solar installation take?',
    answer:
      'Installation timelines vary depending on system size and site complexity. A typical residential installation can take a few days once design and equipment are finalised. Larger commercial projects may take longer. We provide a clearer timeline after the initial assessment.',
  },
  {
    question: 'What maintenance does a solar system require?',
    answer:
      'Solar systems are generally low-maintenance. Periodic cleaning of panels, visual inspections, and checking inverter performance help keep the system running well. We offer maintenance services and can set up a schedule that suits your system.',
  },
  {
    question: 'How do I request a quote?',
    answer:
      'You can request a quote by clicking the "Get a Quote" button and filling out the contact section, or by reaching out to us directly through the contact details listed on this page. We will get back to you to schedule a consultation.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          {/* Left column — heading */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="text-sm font-semibold uppercase tracking-wider text-solar-600">
                FAQ
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-700 text-balance sm:text-4xl">
                Questions, Answered
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-navy-400 text-pretty">
                Common questions about solar system sizing, battery storage,
                installation, maintenance, and getting a quote.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-solar-600 transition-colors hover:text-solar-700"
              >
                Still have questions? Contact us
              </Link>
            </div>
          </Reveal>

          {/* Right column — accordion */}
          <Reveal delay={100}>
            <div className="space-y-3">
              {faqs.map((faq, i) => {
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
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
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
                      id={`faq-panel-${i}`}
                      aria-labelledby={`faq-button-${i}`}
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
