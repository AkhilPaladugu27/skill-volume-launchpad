import { createFileRoute } from "@tanstack/react-router";
import { BRAND, CAREER_DISCLAIMER, EMI_NOTE } from "@/lib/site";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

const TITLE = "Terms & Conditions | Skill Volume";
const DESCRIPTION =
  "Read the terms and conditions for enrolling in Skill Volume live online Digital Marketing, SEO, AEO and GEO training programs.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const SECTIONS = [
  {
    title: "1. About these terms",
    body: [
      "These terms and conditions apply to the Skill Volume website and to every learner who enrolls in a Skill Volume course. By enrolling or by using this website, you agree to these terms.",
      "Skill Volume is an independent online training provider. We are not affiliated with, endorsed by, or certified by Google, Meta, OpenAI or any other platform mentioned in our course content.",
    ],
  },
  {
    title: "2. Courses and delivery",
    body: [
      "Our programs are delivered 100% online through live classes over a 90-day period. Recordings of live sessions are shared with enrolled learners for revision purposes.",
      "Class schedules, batch dates, mentors, session order and curriculum details may be updated to keep content current with the industry. We will inform enrolled learners of significant changes.",
      "You need your own laptop or computer and a stable internet connection to attend classes and complete assignments.",
    ],
  },
  {
    title: "3. Fees and payments",
    body: [
      "Course fees are listed on our courses page and are quoted in Indian Rupees. Fees may change for future batches, but the fee confirmed at the time of your enrollment applies to your batch.",
      EMI_NOTE + " EMI plans, eligibility and any charges levied by the payment or financing partner are shared by our team at the time of enrollment.",
      "Your seat is confirmed only after the applicable payment or the first EMI instalment is received.",
    ],
  },
  {
    title: "4. Refunds and cancellations",
    body: [
      "Because seats are limited and course material is shared from the first session, fees are generally non-refundable once a batch begins.",
      "If you need to withdraw, contact us before your batch starts and our team will review your request. Where approved, we may offer a transfer to a later batch instead of a refund.",
      "If Skill Volume cancels a batch and cannot offer you an alternative batch, the fee paid for that batch is refunded.",
    ],
  },
  {
    title: "5. Learner conduct",
    body: [
      "Live class links, recordings, notes, templates and other course material are for your personal learning only. Sharing, reselling, recording, republishing or distributing them is not permitted.",
      "We expect respectful behaviour in live sessions and in our community groups. We may remove access for abusive conduct, spamming or sharing of course material.",
    ],
  },
  {
    title: "6. Certificates and career support",
    body: [
      "A course completion certificate is issued after you complete your classes, assignments and final project. It is a Skill Volume certificate of completion and is not a university or government qualification.",
      CAREER_DISCLAIMER,
    ],
  },
  {
    title: "7. Intellectual property",
    body: [
      "All Skill Volume course content, curriculum, resources, branding and website material belong to Skill Volume and are protected by applicable law. You may not reuse them commercially without written permission.",
    ],
  },
  {
    title: "8. Limitation of liability",
    body: [
      "Our courses provide education and practical training. Business, freelancing, ranking, traffic and career outcomes depend on your own effort, market conditions and factors outside our control, so we do not guarantee specific results.",
      "To the extent permitted by law, our liability in connection with a course is limited to the fee you paid for it.",
    ],
  },
  {
    title: "9. Changes and contact",
    body: [
      "We may update these terms from time to time. The version published on this page is the one that applies.",
      `Questions about these terms? Email ${BRAND.email} or call ${BRAND.phone}.`,
    ],
  },
];

function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-12 pt-16 lg:px-8 lg:pt-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: "radial-gradient(55% 50% at 80% 0%, rgba(255,106,0,0.18), transparent 70%)",
          }}
        />
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            align="left"
            level={1}
            eyebrow="Legal"
            title={
              <>
                Terms &amp; <span className="text-gradient-accent">Conditions</span>
              </>
            }
            description="The terms that apply when you use the Skill Volume website or enroll in one of our live online programs."
          />
        </div>
      </section>

      <Section className="pt-0">
        <div className="mx-auto max-w-3xl space-y-6">
          {SECTIONS.map((section, i) => (
            <Reveal key={section.title} delay={(i % 3) * 70}>
              <article className="surface-card rounded-2xl p-7">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-3.5">
                  {section.body.map((p) => (
                    <p key={p} className="text-sm leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
