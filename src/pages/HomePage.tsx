import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { brand } from '@/config/brand';
import { Hero } from '@/components/Hero';
import { TrustIntro } from '@/components/TrustIntro';
import { Services } from '@/components/Services';
import { WhyChoose } from '@/components/WhyChoose';
import { Projects } from '@/components/Projects';
import { Process } from '@/components/Process';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';

export function HomePage() {
  useDocumentMeta({
    title: brand.seo.defaultTitle,
    description: brand.seo.defaultDescription,
  });
  return (
    <>
      <Hero />
      <TrustIntro />
      <Services />
      <WhyChoose />
      <Projects />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
