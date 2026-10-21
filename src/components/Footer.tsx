import { Link } from 'react-router-dom';
import { Sun, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { brand } from '@/config/brand';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const serviceLinks = [
  { label: 'Residential Solar', to: '/services' },
  { label: 'Commercial Solar', to: '/services' },
  { label: 'Inverters & Batteries', to: '/services' },
  { label: 'Maintenance & Repairs', to: '/services' },
];

const socialIcons = [
  { Icon: Facebook, href: brand.social.facebook, label: 'Facebook' },
  { Icon: Twitter, href: brand.social.twitter, label: 'Twitter' },
  { Icon: Instagram, href: brand.social.instagram, label: 'Instagram' },
  { Icon: Linkedin, href: brand.social.linkedin, label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 pt-20 pb-8">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        {/* Top section */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-10">
          {/* Brand column */}
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-solar-500 text-navy-700">
                <Sun className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight text-white">
                {brand.shortName}<span className="text-solar-500">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-200">
              {brand.description}
            </p>

            {/* Social placeholders */}
            <div className="mt-6 flex gap-3">
              {socialIcons.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-navy-200 transition-all duration-200 hover:border-solar-400/40 hover:bg-solar-500/10 hover:text-solar-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-navy-200 transition-colors hover:text-solar-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-navy-200 transition-colors hover:text-solar-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-4">
              {brand.contact.phones.map((phone) => (
                <li key={phone} className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-solar-400" />
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="text-sm text-navy-200 transition-colors hover:text-solar-400"
                  >
                    {phone}
                  </a>
                </li>
              ))}
              {brand.contact.emails.map((email) => (
                <li key={email} className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-solar-400" />
                  <a
                    href={`mailto:${email}`}
                    className="text-sm text-navy-200 transition-colors hover:text-solar-400"
                  >
                    {email}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-solar-400" />
                <span className="text-sm text-navy-200">{brand.contact.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-solar-400" />
                <span className="text-sm text-navy-200">{brand.contact.hours}</span>
              </li>
            </ul>

            {/* Quote button */}
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-solar-500 px-5 py-2.5 text-sm font-semibold text-navy-700 transition-all duration-200 hover:bg-solar-400"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-navy-300">
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p className="text-xs text-navy-300">
            Website designed by{' '}
            <a
              href={brand.developer.website}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-navy-200 transition-colors hover:text-solar-400"
            >
              {brand.developer.name}
            </a>{' '}
            (
            <a
              href={brand.developer.website}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-navy-200 transition-colors hover:text-solar-400"
            >
              www.zarkode.com.ng
            </a>
            )
          </p>
        </div>
      </div>
    </footer>
  );
}
