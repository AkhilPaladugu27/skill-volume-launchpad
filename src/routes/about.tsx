import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Compass, Rocket, Target } from "lucide-react";
import { AUDIENCE, BRAND } from "@/lib/site";
import { CtaLink } from "@/components/site/Cta";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

const TITLE = "About Skill Volume | Online Digital Marketing Institute";
const DESCRIPTION =
  "Skill Volume is a 100% online digital marketing training institute built on practical, mentor-led live learning. Read our story, mission and vision.";

const WHY_LIST = [
  "100% Live Online Classes",
  "Expert Mentor Guidance",
  "AI-Powered Learning",
  "Practical Assignments",
  "Real-World Case Studies",
  "Course Recordings",
  "Downloadable Resources",
  "Beginner-Friendly Learning",
  "Career Support",
  "Resume Building Support",
  "LinkedIn Profile Optimization",
  "Mock Interview Preparation",
  "WhatsApp Community",
  "Course Completion Certificate",
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-16 lg:px-8 lg:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: "radial-gradient(55% 50% at 20% 0%, rgba(255,106,0,0.2), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            align="left"
            level={1}
            eyebrow="About Skill Volume"
            title={
              <>
                A modern institute for <span className="text-gradient-accent">future-ready</span>{" "}
                digital skills
              </>
            }
            description={`${BRAND.name} helps students, professionals, freelancers, business owners and entrepreneurs build successful careers in Digital Marketing and modern search optimization through live online classes, practical learning, AI-powered tools and mentor guidance.`}
          />
        </div>
      </section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: Compass,
              title: "Our Story",
              body: "Skill Volume was founded to make high-quality digital marketing education accessible to everyone through practical, mentor-led, live online learning.",
            },
            {
              icon: Target,
              title: "Mission",
              body: "Empower learners with future-ready digital skills that help them grow their careers, businesses, and freelancing opportunities.",
            },
            {
              icon: Rocket,
              title: "Vision",
              body: "Become one of India's most trusted online digital marketing learning platforms.",
            },
          ].map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <article className="surface-card h-full rounded-3xl p-8 transition-all duration-400 hover:-translate-y-1 hover:border-primary/40">
                <span className="grid size-12 place-items-center rounded-xl bg-primary/12 text-primary">
                  <card.icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="mt-6 text-xl font-semibold">{card.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section alt>
        <SectionHeading
          eyebrow="Why Skill Volume"
          title="Everything included with your enrollment"
          description="A complete learning ecosystem, not just recorded videos."
        />
        <ul className="mt-14 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_LIST.map((item, i) => (
            <Reveal as="li" key={item} delay={(i % 3) * 70}>
              <div className="surface-card flex h-full items-center gap-3.5 rounded-2xl px-6 py-5 text-sm font-medium text-subtle transition-colors hover:border-primary/40">
                <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <SectionHeading
            align="left"
            eyebrow="Who We Teach"
            title="Designed for every stage of your career"
            description="Whether you are starting out, switching careers, freelancing or growing a business, the curriculum meets you where you are."
          />
          <Reveal delay={100}>
            <ul className="flex flex-wrap gap-2.5">
              {AUDIENCE.map((item) => (
                <li key={item} className="glass-panel rounded-full px-5 py-2.5 text-sm text-subtle">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <section className="px-5 pb-24 lg:px-8">
        <Reveal className="mx-auto max-w-7xl">
          <div className="glow-ring rounded-3xl border border-primary/30 bg-background-alt px-7 py-14 text-center lg:px-16">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Join Our Next Batch</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-subtle">
              Seats in each live batch are limited so every learner gets mentor attention. Contact
              us to confirm the upcoming schedule.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <CtaLink to="/contact" className="px-7 py-3.5">
                Book Free Consultation <ArrowRight className="size-4" aria-hidden="true" />
              </CtaLink>
              <CtaLink to="/courses" variant="outline" className="px-7 py-3.5">
                Explore Courses
              </CtaLink>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
