import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { COURSES, COURSE_HIGHLIGHTS, FAQS, WHATSAPP_DEFAULT } from "@/lib/site";
import { CtaLink } from "@/components/site/Cta";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { CourseCard } from "@/components/site/CourseCard";
import { FaqList } from "@/components/site/FaqList";

const TITLE = "Digital Marketing & SEO + AEO + GEO Courses | Skill Volume";
const DESCRIPTION =
  "Explore Skill Volume's live online courses: Digital Marketing with AI (90 days, ₹15,999) and SEO + AEO + GEO Mastery, with full week-wise and module-wise curriculum.";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Digital Marketing Course, AI Marketing Course, SEO Course, AEO Course, GEO Course, Generative Engine Optimization, Answer Engine Optimization, ChatGPT SEO, AI Search Optimization",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/courses" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          ...COURSES.map((course) => ({
            "@context": "https://schema.org",
            "@type": "Course",
            name: course.title,
            description: course.summary,
            provider: { "@type": "EducationalOrganization", name: "Skill Volume" },
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "Online",
              courseWorkload: "P90D",
            },
          })),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]),
      },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-16 lg:px-8 lg:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: "radial-gradient(55% 50% at 80% 0%, rgba(255,106,0,0.2), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            align="left"
            level={1}
            eyebrow="Our Courses"
            title={
              <>
                Live online programs built for{" "}
                <span className="text-gradient-accent">real results</span>
              </>
            }
            description="Both programs run for 90 days with 100% live online classes, recordings, practical assignments and mentor guidance. Expand any curriculum below to see exactly what you'll learn."
          />
        </div>
      </section>

      <Section className="pt-0">
        <div className="grid gap-8">
          {COURSES.map((course, i) => (
            <Reveal key={course.id} delay={i * 80}>
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section alt>
        <SectionHeading eyebrow="Course Highlights" title="Included in both programs" />
        <ul className="mt-14 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {COURSE_HIGHLIGHTS.map((item, i) => (
            <Reveal as="li" key={item} delay={(i % 4) * 70}>
              <div className="surface-card flex h-full items-center gap-3.5 rounded-2xl px-6 py-5 text-sm font-medium text-subtle">
                <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Still unsure? Message us on WhatsApp and our team will guide you."
        />
        <FaqList items={FAQS} />
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <div className="glass-panel flex flex-col items-center gap-5 rounded-2xl p-8 text-center">
            <p className="font-display text-lg font-semibold text-foreground">
              Contact Us to Know the Upcoming Batch Schedule.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <CtaLink to="/contact">
                Book Free Consultation <ArrowRight className="size-4" aria-hidden="true" />
              </CtaLink>
              <CtaLink href={WHATSAPP_DEFAULT} variant="whatsapp">
                <WhatsAppIcon className="size-4" /> Talk on WhatsApp
              </CtaLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
