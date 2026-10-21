import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

/**
 * Shared page layout — wraps every routed page with Navbar + Footer
 * and a scroll-to-top-on-navigation effect.
 */
export function Layout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-cream">{children}</div>;
}

/**
 * Link-aware button styled identically to the homepage CTA buttons.
 * Uses router navigation instead of anchor tags.
 */
type ButtonLinkProps = {
  to: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
};

export function ButtonLink({
  to,
  children,
  variant = 'primary',
  className = '',
}: ButtonLinkProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 text-base font-semibold transition-all duration-200';

  const styles = {
    primary:
      'bg-solar-500 text-navy-700 hover:bg-solar-400 hover:shadow-xl hover:shadow-solar-500/30',
    secondary:
      'border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:border-white/40 hover:bg-white/10',
    outline:
      'border border-navy-200 bg-white text-navy-700 hover:border-solar-300 hover:bg-solar-50/50',
  } as const;

  return (
    <Link to={to} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
