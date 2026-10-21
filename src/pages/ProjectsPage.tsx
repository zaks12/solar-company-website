import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { CTABand } from '@/components/CTABand';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const heroImage =
  'https://images.pexels.com/photos/9893731/pexels-photo-9893731.jpeg?auto=compress&cs=tinysrgb&w=1920';

type Category = 'All' | 'Residential' | 'Commercial' | 'Inverter & Battery';

const categories: Category[] = ['All', 'Residential', 'Commercial', 'Inverter & Battery'];

type ProjectItem = {
  title: string;
  category: Exclude<Category, 'All'>;
  description: string;
  image: string;
  span: 'wide' | 'tall' | 'normal';
};

const projects: ProjectItem[] = [
  {
    title: 'Suburban Rooftop Solar System',
    category: 'Residential',
    description:
      'A rooftop installation for a family home, designed to cover daily household energy needs including lighting, appliances, and entertainment.',
    image:
      'https://images.pexels.com/photos/12243093/pexels-photo-12243093.jpeg?auto=compress&cs=tinysrgb&w=1000',
    span: 'wide',
  },
  {
    title: 'Contemporary Home Solar Array',
    category: 'Residential',
    description:
      'Solar panels installed on a modern two-storey home, providing clean energy for everyday household use.',
    image:
      'https://images.pexels.com/photos/16427010/pexels-photo-16427010.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'normal',
  },
  {
    title: 'Warehouse Solar Installation',
    category: 'Commercial',
    description:
      'A commercial-scale solar array installed on a warehouse rooftop, designed to support business energy operations.',
    image:
      'https://images.pexels.com/photos/17641131/pexels-photo-17641131.jpeg?auto=compress&cs=tinysrgb&w=1000',
    span: 'wide',
  },
  {
    title: 'Industrial Rooftop Solar',
    category: 'Commercial',
    description:
      'Solar panels covering an industrial facility roof, aimed at reducing grid dependence for business operations.',
    image:
      'https://images.pexels.com/photos/29289933/pexels-photo-29289933.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'normal',
  },
  {
    title: 'Home Battery Storage Installation',
    category: 'Inverter & Battery',
    description:
      'A battery storage system installed alongside solar panels, providing backup power during outages and overnight energy.',
    image:
      'https://images.pexels.com/photos/39057090/pexels-photo-39057090.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'normal',
  },
  {
    title: 'Solar Inverter Setup',
    category: 'Inverter & Battery',
    description:
      'A professionally installed solar inverter, converting solar energy into usable power for the home.',
    image:
      'https://images.pexels.com/photos/38171130/pexels-photo-38171130.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'normal',
  },
  {
    title: 'Neighbourhood Solar Homes',
    category: 'Residential',
    description:
      'An aerial view of residential properties equipped with rooftop solar panels, showcasing clean energy adoption.',
    image:
      'https://images.pexels.com/photos/9875685/pexels-photo-9875685.jpeg?auto=compress&cs=tinysrgb&w=1000',
    span: 'wide',
  },
  {
    title: 'Warehouse Rooftop Solar Array',
    category: 'Commercial',
    description:
      'A large warehouse roof with solar panels installed, supporting sustainable energy for commercial operations.',
    image:
      'https://images.pexels.com/photos/17641123/pexels-photo-17641123.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'normal',
  },
  {
    title: 'Indoor Battery System',
    category: 'Inverter & Battery',
    description:
      'A home battery system installed indoors, offering clean energy storage for reliable backup power.',
    image:
      'https://images.pexels.com/photos/33751679/pexels-photo-33751679.jpeg?auto=compress&cs=tinysrgb&w=800',
    span: 'normal',
  },
];

export function ProjectsPage() {
  useDocumentMeta({
    title: 'Featured Projects',
    description:
      'Explore our gallery of residential, commercial, and inverter & battery solar installations. Illustrative demo content — ready to be replaced with genuine client projects.',
  });
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHero
        badge="Featured Projects"
        title={
          <>
            Solar Installations
            <br />
            <span className="text-solar-500">We Envision</span>
          </>
        }
        subtitle="Explore our gallery of residential, commercial, and inverter & battery solar installations. All images shown are illustrative demo content — ready to be replaced with genuine client projects."
        image={heroImage}
        alt="Aerial view of a solar panel field"
      />

      {/* Gallery with filters */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          {/* Filter buttons */}
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                  className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-solar-500 text-navy-700 shadow-lg shadow-solar-500/20'
                      : 'border border-navy-100 bg-white text-navy-400 hover:border-solar-300 hover:text-navy-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Project grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <Reveal key={project.title} delay={(i % 3) * 80}>
                <article
                  className={`group relative overflow-hidden rounded-2xl ${
                    project.span === 'wide'
                      ? 'sm:col-span-2 h-[300px] sm:h-[360px]'
                      : 'h-[300px] sm:h-[320px]'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-700/90 via-navy-700/20 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="mb-2 inline-flex w-fit items-center rounded-full bg-solar-500/90 px-3 py-1 text-xs font-semibold text-navy-700">
                      {project.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-navy-100 line-clamp-2">
                      {project.description}
                    </p>
                    <Link
                      to="/contact"
                      className="mt-3 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-solar-400 transition-colors hover:text-solar-300"
                    >
                      Enquire About Similar
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Demo content notice */}
          <Reveal delay={200}>
            <div className="mt-10 rounded-xl border border-dashed border-navy-200 bg-white px-6 py-5 text-center">
              <p className="text-sm font-medium text-navy-300">
                Illustrative demo content — images shown are representative samples, not
                actual Zacks Solar client installations. This gallery is designed to be easily
                replaced with genuine project photographs and descriptions.
              </p>
            </div>
          </Reveal>

          {/* CTA within gallery */}
          <Reveal delay={150}>
            <div className="mt-12 text-center">
              <h3 className="font-display text-xl font-semibold text-navy-700">
                Have a project in mind?
              </h3>
              <p className="mt-2 text-sm text-navy-400">
                Let&apos;s discuss your installation and how we can bring your solar vision to life.
              </p>
              <Link
                to="/contact"
                className="group mt-5 inline-flex items-center gap-2 rounded-lg bg-solar-500 px-6 py-3 text-sm font-semibold text-navy-700 transition-all duration-200 hover:bg-solar-400 hover:shadow-lg hover:shadow-solar-500/30"
              >
                Discuss Your Project
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        title="Ready to Start Your Project?"
        subtitle="Whether it's a residential rooftop or a commercial facility, we're ready to help you design the right solar solution."
      />
    </>
  );
}
