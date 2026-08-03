import { createFileRoute } from "@tanstack/react-router";
import { BRAND } from "@/lib/site";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";

const TITLE = "Privacy Policy | Skill Volume";
const DESCRIPTION =
  "How Skill Volume collects, uses and protects the information you share through our consultation form, WhatsApp, phone calls and this website.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const SECTIONS = [
  {
    title: "1. Who we are",
    body: [
      "Skill Volume is an online digital marketing training institute. This page is maintained by Skill Volume and explains how we handle the information you share with us through this website and our contact channels.",
    ],
  },
  {
    title: "2. Information we collect",
    body: [
      "Consultation and enrollment details you choose to give us: your name, email address, phone or WhatsApp number, the course you are interested in, your preferred contact time and your message.",
      "Communication content: messages you send us on WhatsApp, by email or during a phone call, so our team can answer your questions.",
      "Basic technical information your browser sends when you visit this site, such as device type and pages viewed, which helps us keep the site working well.",
      "We do not ask for sensitive personal information, and we do not collect payment card details on this website.",
    ],
  },
  {
    title: "3. How we use your information",
    body: [
      "To respond to your consultation request, share course details, batch schedules, fees and EMI options, and complete your enrollment if you choose to join.",
      "To deliver your course: sending class links, recordings, notes, assignments and certificates to enrolled learners.",
      "To send occasional updates about upcoming batches or new programs. You can ask us to stop at any time.",
      "We do not sell your personal information.",
    ],
  },
  {
    title: "4. WhatsApp and phone contact",
    body: [
      "Our consultation form opens WhatsApp with your details prefilled so you can review the message before you send it. Nothing is sent until you send it yourself.",
      "When you contact us on WhatsApp or by phone, that conversation is handled inside those services and is also subject to their own privacy terms.",
    ],
  },
  {
    title: "5. Sharing with service providers",
    body: [
      "We use trusted third parties to run our operations, such as website hosting, communication tools, meeting platforms for live classes, and payment or financing partners for fees and EMI plans. They receive only what they need to provide their service.",
      "We may also share information where we are legally required to do so.",
    ],
  },
  {
    title: "6. Cookies and analytics",
    body: [
      "This website may use cookies and similar technology to keep the site functioning and to understand how visitors use our pages. You can block or delete cookies in your browser settings, though some parts of the site may then work differently.",
    ],
  },
  {
    title: "7. Data retention and security",
    body: [
      "We keep enquiry and learner records for as long as needed to respond to you, deliver your course, issue certificates and meet our record-keeping obligations, and then remove them.",
      "We take reasonable measures to protect the information we hold. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    title: "8. Your choices",
    body: [
      "You can ask us to access, correct or delete the personal information you have shared, or to stop sending you updates. Write to us and we will act on your request.",
      "Our courses are intended for learners aged 16 and above. We do not knowingly collect information from young children.",
    ],
  },
  {
    title: "9. Updates and contact",
    body: [
      "We may update this policy as our services change. The version published on this page is the one that applies.",
      `For any privacy question or request, email ${BRAND.email} or call ${BRAND.phone}.`,
    ],
  },
];

function PrivacyPage() {
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
                Privacy <span className="text-gradient-accent">Policy</span>
              </>
            }
            description="What we collect when you contact Skill Volume, why we collect it and how you stay in control of it."
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
