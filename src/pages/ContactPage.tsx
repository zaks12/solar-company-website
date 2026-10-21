import { useState, type FormEvent } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Map,
  MessageCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Info,
  ShieldCheck,
  Loader2,
} from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { brand, whatsappEnabled, whatsappLink } from '@/config/brand';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const heroImage =
  'https://images.pexels.com/photos/8457868/pexels-photo-8457868.jpeg?auto=compress&cs=tinysrgb&w=1920';

const serviceTypes = [
  'Residential Solar',
  'Commercial Solar',
  'Inverter & Battery Storage',
  'Maintenance & Repairs',
  'Other',
] as const;

const contactItems = [
  { icon: MapPin, label: 'Address', value: brand.contact.address },
  { icon: Clock, label: 'Hours', value: brand.contact.hours },
  { icon: Map, label: 'Service Areas', value: brand.contact.serviceAreas },
];

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  fullName: '',
  phone: '',
  email: '',
  serviceType: '',
  message: '',
};

export function ContactPage() {
  useDocumentMeta({
    title: 'Contact / Get a Quote',
    description:
      'Get in touch with Zacks Solar to request a free solar consultation or quote. Fill out our enquiry form or reach us through our contact details.',
  });
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.fullName.trim()) e.fullName = 'Please enter your full name.';
    if (!form.phone.trim()) {
      e.phone = 'Please enter your phone number.';
    } else if (!/^[+]?[\d\s()-]{7,}$/.test(form.phone.trim())) {
      e.phone = 'Please enter a valid phone number.';
    }
    if (!form.email.trim()) {
      e.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      e.email = 'Please enter a valid email address.';
    }
    if (!form.serviceType) e.serviceType = 'Please select a service type.';
    if (!form.message.trim()) {
      e.message = 'Please tell us about your project.';
    } else if (form.message.trim().length < 10) {
      e.message = 'Please provide at least a brief description (10+ characters).';
    }
    return e;
  }

  function handleChange(
    field: keyof FormState,
    value: string
  ) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (status !== 'idle') setStatus('idle');
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Prevent duplicate submissions
    if (status === 'loading') return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('error');
      return;
    }

    if (brand.form.mode === 'live' && brand.form.endpoint) {
      // --- LIVE MODE ---
      // Submit to the configured endpoint. Replace this fetch logic
      // with a Supabase insert, email API call, or similar as needed.
      // Never hardcode API keys here — use server-side environment variables.
      setStatus('loading');
      try {
        const res = await fetch(brand.form.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setStatus('success');
        setForm(initialForm);
      } catch {
        // Preserve field values on recoverable error so the user can retry
        setStatus('error');
        setErrors({ message: 'Something went wrong. Please try again or contact us directly.' });
      }
    } else {
      // --- DEMO MODE ---
      // No backend is configured. Simulate a brief delay for UX realism,
      // then show an honest demo notice. No data is actually sent anywhere.
      setStatus('loading');
      await new Promise((r) => setTimeout(r, 600));
      setStatus('success');
      setForm(initialForm);
    }
  }

  return (
    <>
      <PageHero
        badge="Contact / Get a Quote"
        title={
          <>
            Let&apos;s Power
            <br />
            <span className="text-solar-500">Your Future Together</span>
          </>
        }
        subtitle="Get in touch to request a free consultation or ask about our solar energy services. We're ready to help you find the right solution."
        image={heroImage}
        alt="Solar panels on residential roofs promoting eco-friendly energy"
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
            {/* Contact info column */}
            <Reveal>
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-solar-600">
                  Get in Touch
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy-700 text-balance">
                  Contact Information
                </h2>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-navy-400 text-pretty">
                  Reach out through any of the channels below.
                </p>

                {/* Phone numbers */}
                <ul className="mt-8 space-y-5">
                  {brand.contact.phones.map((phone) => (
                    <li key={phone} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-solar-50 text-solar-600">
                        <Phone className="h-5 w-5" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-navy-300">
                          Phone
                        </p>
                        <a
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="mt-0.5 block text-sm text-navy-400 transition-colors hover:text-solar-600"
                        >
                          {phone}
                        </a>
                      </div>
                    </li>
                  ))}
                  {brand.contact.emails.map((email) => (
                    <li key={email} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-solar-50 text-solar-600">
                        <Mail className="h-5 w-5" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-navy-300">
                          Email
                        </p>
                        <a
                          href={`mailto:${email}`}
                          className="mt-0.5 block text-sm text-navy-400 transition-colors hover:text-solar-600"
                        >
                          {email}
                        </a>
                      </div>
                    </li>
                  ))}
                  {contactItems.map((item) => (
                    <li key={item.label} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-solar-50 text-solar-600">
                        <item.icon className="h-5 w-5" strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-navy-300">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-sm text-navy-400">{item.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* WhatsApp option */}
                <div className="mt-8 rounded-2xl border border-navy-100/60 bg-white p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-energy-500/10 text-energy-600">
                      <MessageCircle className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-navy-700">
                        Chat on WhatsApp
                      </h3>
                      <p className="mt-0.5 text-xs text-navy-400">
                        Quick questions? Send us a message.
                      </p>
                    </div>
                  </div>

                  {whatsappEnabled ? (
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-energy-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-energy-600 hover:shadow-lg hover:shadow-energy-500/20"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Start WhatsApp Chat
                    </a>
                  ) : (
                    <div>
                      <button
                        disabled
                        className="flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg bg-navy-100 px-5 py-3 text-sm font-semibold text-navy-300"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp Unavailable
                      </button>
                      <p className="mt-2 text-center text-xs text-navy-300">
                        A WhatsApp number has not been configured yet. Please use the
                        enquiry form or the contact details above.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>

            {/* Form column */}
            <Reveal delay={100}>
              <div className="rounded-2xl border border-navy-100/60 bg-white p-7 shadow-sm sm:p-8 lg:p-10">
                <h2 className="font-display text-2xl font-bold tracking-tight text-navy-700">
                  Request a Quote
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-navy-400 text-pretty">
                  Fill out the form below and we&apos;ll get back to you to schedule a
                  consultation. Fields marked with an asterisk (*) are required.
                </p>

                {/* Demo notice */}
                <div className="mt-5 flex items-start gap-3 rounded-lg border border-solar-200 bg-solar-50/50 px-4 py-3">
                  <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-solar-600" />
                  <p className="text-xs leading-relaxed text-navy-400">
                    This is a demo form. No backend or form submission service is
                    currently connected, so enquiries will not be delivered. The form is
                    ready for future integration with a backend or email service.
                  </p>
                </div>

                {/* Success message */}
                {status === 'success' && (
                  <div
                    role="alert"
                    className="mt-5 flex items-start gap-3 rounded-lg border border-energy-200 bg-energy-50/50 px-4 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-energy-600" />
                    <div>
                      <p className="text-sm font-semibold text-energy-700">
                        Form submitted successfully (demo)
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-energy-600">
                        In a live deployment, your enquiry would be sent to our team and
                        we would contact you shortly. Since this is a demo, no message
                        has actually been delivered.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error summary */}
                {status === 'error' && Object.keys(errors).length > 0 && (
                  <div
                    role="alert"
                    className="mt-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-4"
                  >
                    <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />
                    <p className="text-sm text-red-700">
                      Please correct the highlighted fields below and try again.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                  {/* Full name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-navy-700"
                    >
                      Full Name <span className="text-solar-600">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={form.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      className={`mt-1.5 w-full rounded-lg border px-4 py-2.5 text-sm text-navy-700 placeholder-navy-300 transition-colors focus:outline-none focus:ring-2 ${
                        errors.fullName
                          ? 'border-red-300 focus:ring-red-200'
                          : 'border-navy-100 focus:border-solar-400 focus:ring-solar-100'
                      }`}
                      placeholder="e.g. Adaobi Okonkwo"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="mt-1.5 text-xs text-red-600">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-navy-700"
                      >
                        Phone Number <span className="text-solar-600">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={`mt-1.5 w-full rounded-lg border px-4 py-2.5 text-sm text-navy-700 placeholder-navy-300 transition-colors focus:outline-none focus:ring-2 ${
                          errors.phone
                            ? 'border-red-300 focus:ring-red-200'
                            : 'border-navy-100 focus:border-solar-400 focus:ring-solar-100'
                        }`}
                        placeholder="e.g. 0801 234 5678"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1.5 text-xs text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-navy-700"
                      >
                        Email Address <span className="text-solar-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={`mt-1.5 w-full rounded-lg border px-4 py-2.5 text-sm text-navy-700 placeholder-navy-300 transition-colors focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-red-300 focus:ring-red-200'
                            : 'border-navy-100 focus:border-solar-400 focus:ring-solar-100'
                        }`}
                        placeholder="e.g. you@example.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-xs text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service type */}
                  <div>
                    <label
                      htmlFor="serviceType"
                      className="block text-sm font-medium text-navy-700"
                    >
                      Service Type <span className="text-solar-600">*</span>
                    </label>
                    <select
                      id="serviceType"
                      value={form.serviceType}
                      onChange={(e) => handleChange('serviceType', e.target.value)}
                      className={`mt-1.5 w-full rounded-lg border px-4 py-2.5 text-sm text-navy-700 transition-colors focus:outline-none focus:ring-2 ${
                        errors.serviceType
                          ? 'border-red-300 focus:ring-red-200'
                          : 'border-navy-100 focus:border-solar-400 focus:ring-solar-100'
                      } ${form.serviceType ? '' : 'text-navy-300'}`}
                      aria-invalid={!!errors.serviceType}
                      aria-describedby={errors.serviceType ? 'serviceType-error' : undefined}
                    >
                      <option value="">Select a service…</option>
                      {serviceTypes.map((type) => (
                        <option key={type} value={type} className="text-navy-700">
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.serviceType && (
                      <p id="serviceType-error" className="mt-1.5 text-xs text-red-600">
                        {errors.serviceType}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-navy-700"
                    >
                      Project Message <span className="text-solar-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className={`mt-1.5 w-full resize-y rounded-lg border px-4 py-2.5 text-sm text-navy-700 placeholder-navy-300 transition-colors focus:outline-none focus:ring-2 ${
                        errors.message
                          ? 'border-red-300 focus:ring-red-200'
                          : 'border-navy-100 focus:border-solar-400 focus:ring-solar-100'
                      }`}
                      placeholder="Tell us about your property, energy needs, and what you're looking for…"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Privacy note */}
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-navy-300" />
                    <p className="text-xs leading-relaxed text-navy-300">
                      Your information is used only to respond to your enquiry and is not
                      shared with third parties.
                    </p>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group flex w-full items-center justify-center gap-2 rounded-lg bg-solar-500 px-6 py-3.5 text-base font-semibold text-navy-700 transition-all duration-200 hover:bg-solar-400 hover:shadow-xl hover:shadow-solar-500/30 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Submit Enquiry
                        <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
