import { Link } from 'react-router-dom';
import { ArrowRight, Sun, Zap, ShieldCheck } from 'lucide-react';

const heroImage =
  'https://images.pexels.com/photos/13558357/pexels-photo-13558357.jpeg?auto=compress&cs=tinysrgb&w=1920';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-navy-700">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern home with solar panels under a clear sky"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-700 via-navy-700/85 to-navy-700/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-700/60 via-transparent to-navy-700/20" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-8xl flex-col justify-center px-5 pb-20 pt-32 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-solar-500/30 bg-solar-500/10 px-4 py-2 animate-fade-in-down">
            <Sun className="h-4 w-4 text-solar-400" />
            <span className="text-sm font-medium text-solar-100">
              Solar Energy Solutions for Nigeria
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white text-balance animate-fade-in-up sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '0.1s', opacity: 0 }}
          >
            Power Your World.
            <br />
            <span className="text-solar-500">The Smarter Way.</span>
          </h1>

          {/* Supporting text */}
          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100 text-pretty animate-fade-in-up"
            style={{ animationDelay: '0.25s', opacity: 0 }}
          >
            Discover dependable solar energy solutions for homes and businesses.
            Take control of your energy needs with a system designed around you.
          </p>

          {/* Buttons */}
          <div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4 animate-fade-in-up"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-solar-500 px-7 py-3.5 text-base font-semibold text-navy-700 transition-all duration-200 hover:bg-solar-400 hover:shadow-xl hover:shadow-solar-500/30"
            >
              Get a Free Quote
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:bg-white/10"
            >
              Explore Solutions
            </Link>
          </div>

          {/* Quick trust indicators */}
          <div
            className="mt-12 flex flex-wrap gap-x-8 gap-y-4 animate-fade-in-up"
            style={{ animationDelay: '0.55s', opacity: 0 }}
          >
            <div className="flex items-center gap-2.5">
              <Zap className="h-5 w-5 text-solar-400" />
              <span className="text-sm font-medium text-navy-100">Energy Independence</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="h-5 w-5 text-solar-400" />
              <span className="text-sm font-medium text-navy-100">Tailored System Design</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/30 p-1.5">
          <div className="h-2 w-1 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
