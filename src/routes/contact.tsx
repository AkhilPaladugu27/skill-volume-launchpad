import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, Phone, Clock } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import {
  BRAND,
  CONTACT_TIMES,
  COURSE_OPTIONS,
  SOCIALS,
  WHATSAPP_DEFAULT,
  whatsappLink,
} from "@/lib/site";
import { CtaButton, CtaLink } from "@/components/site/Cta";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

const TITLE = "Contact Skill Volume | Book a Free Digital Marketing Consultation";
const DESCRIPTION =
  "Book a free consultation with Skill Volume. Call or WhatsApp +91 9701565449, email contact@skillvolume.com, and get the upcoming live batch schedule.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Skill Volume",
          mainEntity: {
            "@type": "Organization",
            name: "Skill Volume",
            telephone: "+91 9701565449",
            email: "contact@skillvolume.com",
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

const inputClass =
  "w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-primary/70 focus:outline-none";

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: COURSE_OPTIONS[0],
    time: CONTACT_TIMES[0],
    message: "",
  });

  const update = (key: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = [
      "Free Consultation Request | Skill Volume",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Interested Course: ${form.course}`,
      `Preferred Contact Time: ${form.time}`,
      form.message ? `Message: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="relative overflow-hidden px-5 pb-12 pt-16 lg:px-8 lg:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: "radial-gradient(55% 50% at 25% 0%, rgba(255,106,0,0.2), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            align="left"
            level={1}
            eyebrow="Contact Us"
            title={
              <>
                Book your <span className="text-gradient-accent">free consultation</span>
              </>
            }
            description="Tell us your goal and preferred contact time. Our team will reach out with the right course recommendation and the upcoming live batch schedule."
          />
        </div>
      </section>

      <Section className="pt-6">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="surface-card rounded-3xl p-7 sm:p-9">
              <h2 className="font-display text-xl font-semibold">Free Consultation Form</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Submitting opens WhatsApp with your details prefilled so our team can reply
                instantly.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-subtle">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-subtle">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-subtle">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+91 00000 00000"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="course" className="mb-2 block text-sm font-medium text-subtle">
                    Interested Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={form.course}
                    onChange={update("course")}
                    className={inputClass}
                  >
                    {COURSE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="time" className="mb-2 block text-sm font-medium text-subtle">
                    Preferred Contact Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={form.time}
                    onChange={update("time")}
                    className={inputClass}
                  >
                    {CONTACT_TIMES.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-subtle">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Tell us your goal: career switch, freelancing or business growth"
                    className={`${inputClass} resize-y`}
                  />
                </div>
              </div>

              <CtaButton type="submit" className="mt-8 w-full px-7 py-3.5 sm:w-auto">
                Book Free Consultation <ArrowRight className="size-4" aria-hidden="true" />
              </CtaButton>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-5">
              <div className="surface-card rounded-3xl p-7">
                <h2 className="font-display text-xl font-semibold">Contact Information</h2>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <span className="block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      Business Name
                    </span>
                    <span className="mt-1 block font-semibold text-foreground">{BRAND.name}</span>
                  </li>
                  <li>
                    <span className="block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      Phone / WhatsApp
                    </span>
                    <a
                      href={BRAND.phoneHref}
                      className="mt-1 flex items-center gap-2 font-semibold text-foreground transition-colors hover:text-primary-hover"
                    >
                      <Phone className="size-4 text-primary" aria-hidden="true" />
                      {BRAND.phone}
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      Email
                    </span>
                    <a
                      href={BRAND.emailHref}
                      className="mt-1 flex items-center gap-2 font-semibold text-foreground transition-colors hover:text-primary-hover"
                    >
                      <Mail className="size-4 text-primary" aria-hidden="true" />
                      {BRAND.email}
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      Mode
                    </span>
                    <span className="mt-1 flex items-center gap-2 font-semibold text-foreground">
                      <Clock className="size-4 text-primary" aria-hidden="true" />
                      100% Online. Learn from anywhere
                    </span>
                  </li>
                </ul>
                <div className="mt-7 grid gap-3">
                  <CtaLink href={WHATSAPP_DEFAULT} variant="whatsapp">
                    <WhatsAppIcon className="size-4" /> Talk on WhatsApp
                  </CtaLink>
                  <CtaLink href={BRAND.phoneHref} variant="outline">
                    <Phone className="size-4" aria-hidden="true" /> Call Now
                  </CtaLink>
                </div>
              </div>

              <div className="surface-card rounded-3xl p-7">
                <h2 className="font-display text-xl font-semibold">Follow Skill Volume</h2>
                <ul className="mt-5 grid grid-cols-2 gap-2.5">
                  {SOCIALS.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center rounded-xl border border-border px-4 py-3 text-sm font-medium text-subtle transition-colors hover:border-primary/60 hover:text-primary-hover"
                      >
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <section className="px-5 pb-24 lg:px-8">
        <Reveal className="mx-auto max-w-7xl">
          <div className="glow-ring rounded-3xl border border-primary/30 bg-background-alt px-7 py-14 text-center lg:px-16">
            <h2 className="text-balance font-display text-3xl font-semibold sm:text-4xl">
              Contact Us to Know the Upcoming Batch Schedule
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-subtle">
              Seats in every live batch are limited so each learner gets mentor attention. Reach out
              today and secure your seat.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <CtaLink href={WHATSAPP_DEFAULT} className="px-7 py-3.5">
                <WhatsAppIcon className="size-4" /> Talk on WhatsApp
              </CtaLink>
              <CtaLink href={BRAND.phoneHref} variant="outline" className="px-7 py-3.5">
                <Phone className="size-4" aria-hidden="true" /> Call {BRAND.phone}
              </CtaLink>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
