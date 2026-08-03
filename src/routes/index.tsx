import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  MessageCircle,
  PlayCircle,
  Sparkles,
  Users,
  Award,
  Video,
  Bot,
  ClipboardCheck,
  UserCheck,
  Layers,
  Repeat,
  Download,
  MonitorPlay,
  CreditCard,
  Send,
} from "lucide-react";
import {
  BRAND,
  CAREER_DISCLAIMER,
  CAREER_SUPPORT,
  COURSES,
  EMI_NOTE,
  FAQS,
  STEPS,
  STUDENT_BENEFITS,
  TRUST_BADGES,
  WHATSAPP_DEFAULT,
  WHY_POINTS,
  AUDIENCE,
} from "@/lib/site";
import { CtaLink } from "@/components/site/Cta";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CourseCard } from "@/components/site/CourseCard";
import { TestimonialSlider } from "@/components/site/TestimonialSlider";
import { FaqList } from "@/components/site/FaqList";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";

const TITLE = "Digital Marketing Course with AI | Live Online SEO Training | Skill Volume";
const DESCRIPTION =
  "Learn Digital Marketing with AI and SEO + AEO + GEO Mastery through 100% live online classes, practical assignments, AI-powered tools and mentor guidance at Skill Volume.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Digital Marketing Course, Digital Marketing with AI, AI Marketing Course, SEO Course, SEO Training, AEO Course, GEO Course, Online Digital Marketing Course, Live Online Digital Marketing Course, Digital Marketing Institute, Skill Volume",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.slice(0, 5).map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

const WHY_ICONS = [
  MonitorPlay,
  UserCheck,
  Bot,
  Layers,
  ClipboardCheck,
  Award,
  Download,
  Video,
  PlayCircle,
  MessageCircle,
  Send,
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-70"
          style={{
            background:
              "radial-gradient(60% 55% at 15% 8%, rgba(255,106,0,0.22), transparent 65%), radial-gradient(50% 45% at 90% 25%, rgba(255,138,61,0.14), transparent 70%)",
          }}
        />
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-hover">
                <Sparkles className="size-3.5" aria-hidden="true" />
                {BRAND.tagline}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
                Master Digital Marketing &amp; Modern SEO with{" "}
                <span className="text-gradient-accent">AI</span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-subtle sm:text-lg">
                Learn Digital Marketing, SEO, AEO, and GEO through live online classes with
                practical assignments, AI-powered tools, mentor guidance, and industry-relevant
                learning.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-9 flex flex-wrap gap-3">
                <CtaLink to="/contact" className="px-7 py-3.5">
                  Enroll Now <ArrowRight className="size-4" aria-hidden="true" />
                </CtaLink>
                <CtaLink to="/contact" variant="outline" className="px-7 py-3.5">
                  Book Free Consultation
                </CtaLink>
              </div>
            </Reveal>
            <Reveal delay={260}>
              <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4">
                {[
                  { k: "90 Days", v: "Comprehensive Program" },
                  { k: "100%", v: "Live Online Classes" },
                  { k: "2", v: "Flagship Courses" },
                ].map((stat) => (
                  <div key={stat.k} className="glass-panel rounded-2xl px-4 py-4">
                    <dt className="font-display text-xl font-semibold text-primary-hover sm:text-2xl">
                      {stat.k}
                    </dt>
                    <dd className="mt-1 text-xs leading-snug text-muted-foreground">{stat.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={180} className="relative">
            <div className="glass-panel float-slow relative rounded-3xl p-7">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary-hover">
                  <span
                    className="size-2 animate-pulse rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  Live Batches Open
                </span>
                <span className="text-xs text-muted-foreground">90 Days each</span>
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold">
                Two flagship live online programs
              </h2>
              <div className="mt-6 grid gap-3">
                {COURSES.map((c) => (
                  <Link
                    key={c.id}
                    to="/courses"
                    hash={c.id}
                    className="group/card flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-primary/50"
                  >
                    <span>
                      <span className="block text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                        {c.duration} · Live Online
                      </span>
                      <span className="mt-1.5 block text-sm font-semibold text-foreground">
                        {c.title}
                      </span>
                    </span>
                    <span className="shrink-0 text-sm font-semibold text-primary-hover">
                      {c.fee}
                    </span>
                  </Link>
                ))}
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5">
                {[
                  "100% Live Online",
                  "Recordings Provided",
                  "Mentor Guidance",
                  "AI-Powered Learning",
                  "Practical Assignments",
                  "Completion Certificate",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-subtle">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 flex items-center gap-2 rounded-xl border border-primary/25 bg-primary/8 px-4 py-3 text-xs font-medium text-primary-hover">
                <CreditCard className="size-3.5 shrink-0" aria-hidden="true" />
                {EMI_NOTE}
              </p>
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-8 -left-6 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-[0_20px_50px_-20px_rgb(0_0_0/0.9)] sm:block"
            >
              <span className="flex items-center gap-3 text-sm font-medium text-subtle">
                <Users className="size-5 text-primary" />
                Learners across India
              </span>
            </div>
          </Reveal>

        </div>
      </section>

      {/* TRUST STRIP */}
      <section
        aria-label="Why learners trust Skill Volume"
        className="overflow-hidden border-y border-border bg-background-alt py-6"
      >
        <div className="relative flex w-max marquee-track gap-3">
          {[0, 1].map((dup) => (
            <ul key={dup} className="flex gap-3" aria-hidden={dup === 1}>
              {TRUST_BADGES.map((badge) => (
                <li
                  key={badge}
                  className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-subtle"
                >
                  <Check className="size-4 text-primary" aria-hidden="true" />
                  {badge}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* FEATURED COURSES */}
      <Section id="courses">
        <SectionHeading
          eyebrow="Featured Courses"
          title="Two flagship live online programs"
          description="Choose the program that matches your goal: a complete AI-integrated digital marketing career track, or a deep specialisation in modern search visibility."
        />
        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {COURSES.map((course, i) => (
            <Reveal key={course.id} delay={i * 100}>
              <CourseCard course={course} compact />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WHY CHOOSE */}
      <Section alt>
        <SectionHeading
          eyebrow="Why Choose Skill Volume"
          title="Built for practical, mentor-led learning"
          description="Every element of our programs is designed so you can apply what you learn the same week you learn it."
        />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_POINTS.map((point, i) => {
            const Icon = WHY_ICONS[i % WHY_ICONS.length]!;
            return (
              <Reveal as="li" key={point} delay={(i % 3) * 80}>
                <div className="surface-card group flex h-full items-center gap-4 rounded-2xl p-6 transition-all duration-400 hover:-translate-y-1 hover:border-primary/40">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-foreground">{point}</span>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Section>

      {/* HOW IT WORKS */}
      <Section>
        <SectionHeading
          eyebrow="How Our Online Learning Works"
          title="From enrollment to certificate in six clear steps"
        />
        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={(i % 3) * 90}>
              <div className="surface-card relative h-full rounded-2xl p-7 transition-all duration-400 hover:-translate-y-1 hover:border-primary/40">
                <span className="font-display text-5xl font-bold text-primary/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* STUDENT BENEFITS */}
      <Section alt>
        <SectionHeading
          eyebrow="Student Benefits"
          title="What you get as a Skill Volume learner"
          description="Practical support that continues beyond every live class."
        />
        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STUDENT_BENEFITS.map((benefit, i) => (
            <Reveal as="li" key={benefit.title} delay={(i % 3) * 90}>
              <div className="surface-card h-full rounded-2xl p-7">
                <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{benefit.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
        <Reveal className="mt-12">
          <div className="glass-panel rounded-2xl p-7">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-primary-hover">
              Who these courses are for
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {AUDIENCE.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-subtle"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* CAREER SUPPORT */}
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="Career Support"
            title="We help you become job-ready"
            description="At Skill Volume, we help learners become job-ready by providing structured career support alongside the curriculum."
          />
          <Reveal delay={100}>
            <ul className="space-y-3">
              {CAREER_SUPPORT.map((item) => (
                <li
                  key={item}
                  className="surface-card flex items-start gap-3.5 rounded-2xl p-5 text-sm text-subtle"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal className="mt-10">
          <p className="rounded-2xl border border-border bg-background-alt p-6 text-sm leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-subtle">Please note: </strong>
            {CAREER_DISCLAIMER}
          </p>
        </Reveal>
      </Section>

      {/* TESTIMONIALS */}
      <Section alt>
        <SectionHeading
          eyebrow="Testimonials"
          title="What our learners say"
          description="Real feedback from students, professionals, freelancers and business owners who trained with us."
        />
        <TestimonialSlider />
      </Section>

      {/* FAQ PREVIEW */}
      <Section>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions learners ask before enrolling"
          description="A quick preview. The full list lives on our courses page."
        />
        <FaqList items={FAQS.slice(0, 5)} />
        <Reveal className="mt-10 text-center">
          <CtaLink to="/courses" variant="ghost">
            Read all FAQs <ArrowRight className="size-4" aria-hidden="true" />
          </CtaLink>
        </Reveal>
      </Section>

      {/* FINAL CTA */}
      <section className="px-5 pb-24 lg:px-8">
        <Reveal className="mx-auto max-w-7xl">
          <div className="glow-ring relative overflow-hidden rounded-3xl border border-primary/30 bg-background-alt px-7 py-14 text-center lg:px-16 lg:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 70% at 50% 0%, rgba(255,106,0,0.24), transparent 70%)",
              }}
            />
            <div className="relative">
              <h2 className="text-balance font-display text-3xl font-semibold sm:text-4xl lg:text-[2.75rem]">
                Ready to Start Your Digital Marketing Journey?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-subtle">
                Talk to our team to confirm the upcoming batch, understand the curriculum and pick
                the right program for your goals.
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <CtaLink to="/contact" className="px-7 py-3.5">
                  Enroll Now <ArrowRight className="size-4" aria-hidden="true" />
                </CtaLink>
                <CtaLink href={WHATSAPP_DEFAULT} variant="whatsapp" className="px-7 py-3.5">
                  <WhatsAppIcon className="size-4" /> Talk on WhatsApp
                </CtaLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
