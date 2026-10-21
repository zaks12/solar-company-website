import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const projects = [
  {
    title: 'Residential Rooftop System',
    category: 'Residential',
    description:
      'A rooftop solar installation for a family home, designed to cover daily household energy needs.',
    image:
      'https://images.pexels.com/photos/13558357/pexels-photo-13558357.jpeg?auto=compress&cs=tinysrgb&w=1000',
    size: 'large',
  },
  {
    title: 'Commercial Rooftop Array',
    category: 'Commercial',
    description:
      'A larger solar array installed on a commercial building to support business operations.',
    image:
      'https://images.pexels.com/photos/9799994/pexels-photo-9799994.jpeg?auto=compress&cs=tinysrgb&w=600',
    size: 'small',
  },
  {
    title: 'Hybrid Solar & Battery',
    category: 'Hybrid',
    description:
      'A hybrid system combining solar panels with battery storage for round-the-clock power availability.',
    image:
      'https://images.pexels.com/photos/9893731/pexels-photo-9893731.jpeg?auto=compress&cs=tinysrgb&w=600',
    size: 'small',
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-solar-600">
            Featured Projects
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-700 text-balance sm:text-4xl lg:text-[2.75rem]">
            Solar Installations We Envision
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-navy-400 text-pretty">
            The gallery below shows illustrative demo content representing residential,
            commercial, and hybrid solar systems. These will be replaced with genuine
            client projects.
          </p>
        </Reveal>

        {/* Gallery */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Large card */}
          <Reveal>
            <ProjectCard project={projects[0]} large />
          </Reveal>

          {/* Two stacked small cards */}
          <div className="grid gap-6">
            {projects.slice(1).map((p, i) => (
              <Reveal key={p.title} delay={120 + i * 100}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Demo content notice */}
        <Reveal delay={200}>
          <p className="mt-8 text-center text-sm font-medium text-navy-300">
            Illustrative demo content — images shown are representative samples, not
            actual Zacks Solar client installations.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl ${
        large ? 'h-[420px] md:h-full min-h-[420px]' : 'h-[240px] sm:h-[260px]'
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-700/90 via-navy-700/20 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-7">
        <span className="mb-2 inline-flex w-fit items-center rounded-full bg-solar-500/90 px-3 py-1 text-xs font-semibold text-navy-700">
          {project.category}
        </span>
        <h3
          className={`font-display font-bold text-white ${
            large ? 'text-2xl' : 'text-xl'
          }`}
        >
          {project.title}
        </h3>
        {large && (
          <p className="mt-2 max-w-md text-sm leading-relaxed text-navy-100">
            {project.description}
          </p>
        )}
        <Link
          to="/contact"
          className="mt-3 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-solar-400 transition-colors hover:text-solar-300"
        >
          Enquire About Similar
          <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
