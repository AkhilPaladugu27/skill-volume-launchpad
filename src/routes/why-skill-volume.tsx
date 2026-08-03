import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Check,
  ClipboardCheck,
  Download,
  GraduationCap,
  Layers,
  MonitorPlay,
  Repeat,
  UserCheck,
} from "lucide-react";
import { CAREER_DISCLAIMER, CAREER_SUPPORT } from "@/lib/site";
import { CtaLink } from "@/components/site/Cta";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { TestimonialSlider } from "@/components/site/TestimonialSlider";

const TITLE = "Why Skill Volume | Live, Mentor-Led, AI-Powered Learning";
const DESCRIPTION =
  "See why learners choose Skill Volume: live online classes, mentor guidance, AI-powered curriculum, practical assignments, real case studies and dedicated career support.";

const PILLARS = [
  {
    icon: MonitorPlay,
    title: "Live Online Learning Experience",
    body: "Every session is a live class, not a recording. You join from anywhere, interact with your mentor in real time and get doubts cleared while the topic is fresh.",
  },
  {
    icon: UserCheck,
    title: "Mentor Guidance",
    body: "A practising mentor reviews your assignments, points out what to improve and guides your learning path from fundamentals to advanced execution.",
  },
  {
    icon: Bot,
    title: "AI-Powered Learning",
    body: "AI is integrated into the curriculum itself: research, content, ad creatives, technical audits and reporting workflows you can use immediately.",
  },
  {
    icon: ClipboardCheck,
    title: "Practical Assignments",
    body: "Each module ends with hands-on work on real websites, campaigns and accounts so learning turns into demonstrable skill.",
  },
  {
    icon: Layers,
    title: "Real-World Case Studies",
    body: "Break down live campaigns and websites to understand what worked, what failed and how to diagnose performance problems yourself.",
  },
  {
    icon: Download,
    title: "Downloadable Resources",
    body: "Checklists, audit templates, prompt libraries, reporting sheets and swipe files you keep and reuse for clients and your own projects.",
  },
  {
    icon: Repeat,
    title: "Flexible Learning with Recordings",
    body: "Balancing a job or college? Every class recording is shared so you can revise at your own pace without falling behind.",
  },
  {
    icon: GraduationCap,
    title: "Career Support",
    body: "Resume building, LinkedIn optimization, mock interviews and job updates shared inside our WhatsApp community.",
  },
];

const METHODOLOGY = [
  {
    step: "Learn",
    body: "Concept-first live teaching with clear frameworks, with no jargon-heavy theory dumps.",
  },
  {
    step: "Apply",
    body: "Immediately implement the concept on a real website, ad account or content asset.",
  },
  {
    step: "Review",
    body: "Your mentor reviews the work and gives specific, actionable feedback.",
  },
  {
    step: "Refine",
    body: "Rework, re-test and build the judgement that separates practitioners from beginners.",
  },
];

export const Route = createFileRoute("/why-skill-volume")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/why-skill-volume" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/why-skill-volume" }],
  }),
  component: WhyPage,
});

function WhyPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-16 lg:px-8 lg:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: "radial-gradient(55% 50% at 50% 0%, rgba(255,106,0,0.2), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            level={1}
            eyebrow="Why Skill Volume"
            title={
              <>
                Why learners choose to train <span className="text-gradient-accent">with us</span>
              </>
            }
            description="We focus on one thing: making sure you can actually do the work after the course, not just talk about it."
          />
        </div>
      </section>

      <Section className="pt-4">
        <ul className="grid gap-5 md:grid-cols-2">
          {PILLARS.map((pillar, i) => (
            <Reveal as="li" key={pillar.title} delay={(i % 2) * 90}>
              <article className="surface-card group h-full rounded-3xl p-8 transition-all duration-400 hover:-translate-y-1 hover:border-primary/40">
                <span className="grid size-12 place-items-center rounded-xl bg-primary/12 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <pillar.icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="mt-6 text-xl font-semibold">{pillar.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section alt>
        <SectionHeading
          eyebrow="Our Teaching Methodology"
          title="A four-part loop that builds real skill"
          description="We repeat this loop every single week of the program."
        />
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {METHODOLOGY.map((m, i) => (
            <Reveal as="li" key={m.step} delay={i * 90}>
              <div className="surface-card h-full rounded-2xl p-7">
                <span className="font-display text-4xl font-bold text-primary/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{m.step}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="Career Support"
            title="Dedicated support to help you get hired"
            description="Skills matter most, but presentation and preparation decide interviews. We help with both."
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

      <Section alt>
        <SectionHeading
          eyebrow="Student Success"
          title="Stories from our learners"
          description="From first jobs and freelance clients to better in-house performance."
        />
        <TestimonialSlider />
      </Section>

      <section className="px-5 pb-24 lg:px-8">
        <Reveal className="mx-auto max-w-7xl">
          <div className="glow-ring rounded-3xl border border-primary/30 bg-background-alt px-7 py-14 text-center lg:px-16">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Start Learning Today
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-subtle">
              Book a free consultation and we'll help you choose the right program and share the
              upcoming batch schedule.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <CtaLink to="/contact" className="px-7 py-3.5">
                Book Free Consultation <ArrowRight className="size-4" aria-hidden="true" />
              </CtaLink>
              <CtaLink to="/courses" variant="outline" className="px-7 py-3.5">
                View Curriculum
              </CtaLink>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
