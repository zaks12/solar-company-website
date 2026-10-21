import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun } from 'lucide-react';
import { brand } from '@/config/brand';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // On the homepage the navbar starts transparent over the hero.
  // On other pages it should always have a solid background.
  const isHome = location.pathname === '/';
  const showSolid = scrolled || !isHome || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolid
          ? 'bg-navy-700/95 backdrop-blur-md shadow-lg shadow-navy-900/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2.5"
          aria-label={`${brand.name} home`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-solar-500 text-navy-700 transition-transform duration-300 group-hover:scale-105">
            <Sun className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-white">
            {brand.shortName}<span className="text-solar-500">.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-solar-500 after:transition-all after:duration-300 hover:after:w-full ${
                    isActive
                      ? 'text-white after:w-full'
                      : 'text-navy-100 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-lg bg-solar-500 px-5 py-2.5 text-sm font-semibold text-navy-700 transition-all duration-200 hover:bg-solar-400 hover:shadow-lg hover:shadow-solar-500/30"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-navy-700 transition-all duration-300 lg:hidden ${
          menuOpen ? 'max-h-[420px] border-t border-white/10' : 'max-h-0'
        }`}
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col gap-1 px-5 py-4 sm:px-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-white/10 hover:text-white ${
                    isActive ? 'bg-white/5 text-solar-400' : 'text-navy-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="mt-2">
            <Link
              to="/contact"
              className="block rounded-lg bg-solar-500 px-4 py-3 text-center text-base font-semibold text-navy-700 transition-colors hover:bg-solar-400"
            >
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
