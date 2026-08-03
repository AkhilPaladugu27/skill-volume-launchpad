export const BRAND = {
  name: "Skill Volume",
  tagline: "Master Future-Ready Digital Skills",
  phone: "+91 9701565449",
  phoneHref: "tel:+919701565449",
  email: "contact@skillvolume.com",
  emailHref: "mailto:contact@skillvolume.com",
};

export const WHATSAPP_NUMBER = "919701565449";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT = whatsappLink(
  "Hi Skill Volume, I'd like to know more about your live online Digital Marketing and SEO courses.",
);

export const SOCIALS = [
  { label: "WhatsApp", href: "https://wa.me/919701565449" },
  { label: "Instagram", href: "https://www.instagram.com/skillvolume" },
  { label: "Facebook", href: "https://www.facebook.com/skillvolume/" },
  { label: "YouTube", href: "https://www.youtube.com/@SkillVolume" },
] as const;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Courses", to: "/courses" },
  { label: "Why Skill Volume", to: "/why-skill-volume" },
  { label: "Contact", to: "/contact" },
] as const;

export const LEGAL_LINKS = [
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
] as const;

export const EMI_NOTE = "EMI option is also available for course fee payments.";

export const TRUST_BADGES = [
  "100% Live Online Classes",
  "90-Day Comprehensive Learning",
  "Recordings Provided",
  "AI-Powered Learning",
  "Practical Assignments",
  "Mentor Guidance",
  "Course Completion Certificate",
  "Career Support",
  "Resume Building Support",
  "WhatsApp Community",
  "EMI Option Available",
];

export const COURSES = [
  {
    id: "digital-marketing-with-ai",
    title: "Digital Marketing with AI",
    kicker: "Flagship Program",
    summary:
      "A complete, AI-integrated digital marketing program covering SEO, paid ads, social media, analytics, websites, funnels and freelancing, taught live with practical assignments.",
    duration: "90 Days",
    mode: "100% Live Online Classes",
    recordings: "Provided",
    fee: "₹15,999",
    brochure:
      "https://docs.google.com/document/d/1aLagpxRQUeCnjZnE-Vnb26jsDZnNrhyutEvNGoGBtQY/edit?usp=sharing",
    highlights: [
      "Duration: 90 Days",
      "Live Online Classes",
      "Recordings Provided",
      "AI Integrated Learning",
      "SEO",
      "Google Ads",
      "Meta Ads",
      "Social Media Marketing",
      "Analytics",
      "Website Building",
      "Funnels",
      "Freelancing",
    ],
    curriculumLabel: "Week-wise Curriculum",
    curriculum: [
      {
        title: "Week 1: Business & Audience Fundamentals",
        body: "Understand business models, offers, customer journeys and audience research. Build ideal customer profiles and use AI to speed up audience and competitor research.",
      },
      {
        title: "Week 2: SEO Foundations & Keyword Strategy",
        body: "How search engines crawl, index and rank. Search intent, keyword mapping and building a keyword strategy with AI-assisted clustering.",
      },
      {
        title: "Week 3: On-Page, Off-Page, Local & Technical SEO",
        body: "Page-level optimization, internal linking, Google Business Profile, local citations, link building basics and technical SEO checks.",
      },
      {
        title: "Week 4: Google Tools, Core Web Vitals & E-E-A-T",
        body: "Search Console, Analytics, PageSpeed Insights, Core Web Vitals diagnosis and building experience, expertise, authority and trust signals.",
      },
      {
        title: "Week 5: Social Media Strategy",
        body: "Platform-wise strategy, content pillars, calendars, hooks and creative direction, accelerated with AI content and ideation workflows.",
      },
      {
        title: "Week 6: Meta Ads",
        body: "Campaign structure, audiences, creatives, pixel and events setup, testing frameworks, budget scaling and reporting.",
      },
      {
        title: "Week 7: Google Ads",
        body: "Search, Performance Max and YouTube campaigns. Keyword match types, ad copy, quality score, conversion tracking and optimization.",
      },
      {
        title: "Week 8: Technical Website Fixes",
        body: "Site speed, indexing issues, redirects, schema markup, mobile usability and hands-on debugging of real website problems.",
      },
      {
        title: "Week 9: Analytics & Reporting",
        body: "GA4 events and conversions, Looker Studio dashboards, attribution basics and building client-ready reports with AI summaries.",
      },
      {
        title: "Week 10: Website & Funnel Setup",
        body: "Build a conversion-focused website, landing pages, lead forms, WhatsApp and email follow-up flows, and full funnel tracking.",
      },
      {
        title: "Week 11: Freelancing & Client Handling",
        body: "Positioning, pricing, proposals, audits, onboarding, communication and retention systems for freelancers and agency owners.",
      },
      {
        title: "Week 12: Live Project Simulation & Final Review",
        body: "Run an end-to-end campaign simulation, present your work, receive mentor feedback and complete your certification review.",
      },
    ],
    aiNote:
      "AI integration is highlighted throughout every week: research, content, ad creatives, technical audits, reporting and client deliverables.",
  },
  {
    id: "seo-aeo-geo-mastery",
    title: "SEO + AEO + GEO Mastery",
    kicker: "Modern Search Specialisation",
    summary:
      "A specialist program for modern search: classic SEO plus Answer Engine Optimization and Generative Engine Optimization for ChatGPT, Gemini, Perplexity and Bing AI visibility.",
    duration: "90 Days",
    mode: "100% Live Online Classes",
    recordings: "Provided",
    fee: "₹16,999",
    brochure:
      "https://docs.google.com/document/d/1dQNUl8-qc1rs1_RaBmShddUaEUAT_kbXZ3PebV1kBNM/edit?usp=sharing",
    highlights: [
      "Duration: 90 Days",
      "Live Online Classes",
      "Recordings Provided",
      "SEO",
      "AEO",
      "GEO",
      "Google Search",
      "AI Search",
      "ChatGPT",
      "Gemini",
      "Perplexity",
      "Bing AI",
      "AI Visibility",
    ],
    curriculumLabel: "Module-wise Curriculum",
    curriculum: [
      {
        title: "Module 1: Search Foundations",
        body: "How traditional search, answer engines and generative engines differ in crawling, retrieval and citation behaviour.",
      },
      {
        title: "Module 2: Keyword & Entity Research",
        body: "Move from keywords to entities and topics. Research questions, prompts and the language AI engines use to answer them.",
      },
      {
        title: "Module 3: On-Page & Technical SEO",
        body: "Semantic HTML, headings, structured data, crawl efficiency, rendering and indexation for both search bots and AI crawlers.",
      },
      {
        title: "Module 4: Content Systems & Topic Clusters",
        body: "Pillar and cluster architecture, internal linking, content refresh cycles and editorial systems that compound authority.",
      },
      {
        title: "Module 5: Answer Engine Optimization (AEO)",
        body: "Win featured snippets, People Also Ask, FAQ and How-To results with answer-first formatting and schema.",
      },
      {
        title: "Module 6: Generative Engine Optimization (GEO)",
        body: "Earn mentions and citations inside ChatGPT, Gemini, Perplexity and Bing AI answers. Prompt-based visibility testing and tracking.",
      },
      {
        title: "Module 7: Link Building & Authority",
        body: "Digital PR, ethical outreach, brand mentions, reviews and the trust signals AI engines rely on when citing sources.",
      },
      {
        title: "Module 8: Analytics & Performance Tracking",
        body: "Search Console, GA4, rank and AI-visibility tracking, plus dashboards that report SEO, AEO and GEO performance together.",
      },
      {
        title: "Module 9: Capstone Project",
        body: "Run a full audit and optimization plan on a live website, implement fixes and present measurable outcomes to your mentor.",
      },
    ],
    aiNote:
      "Every module includes hands-on work inside AI search tools so you can measure and improve real AI visibility.",
  },
] as const;

export const COURSE_HIGHLIGHTS = [
  "Live Online Classes",
  "Recordings Provided",
  "Mentor Guidance",
  "Practical Assignments",
  "AI-Powered Learning",
  "Downloadable Resources",
  "Course Completion Certificate",
  "EMI Option Available",
];

export const WHY_POINTS = [
  "100% Live Online Learning",
  "Mentor-Led Training",
  "AI-Powered Curriculum",
  "Beginner to Advanced",
  "Practical Assignments",
  "Real-World Case Studies",
  "Downloadable Resources",
  "Course Recordings",
  "Interactive Live Sessions",
  "WhatsApp Community",
];

export const STEPS = [
  {
    title: "Choose Your Course",
    body: "Compare both programs and pick the track that matches your career goal.",
  },
  {
    title: "Book Your Seat",
    body: "Talk to our team, confirm the upcoming batch and reserve your seat.",
  },
  {
    title: "Attend Live Online Classes",
    body: "Join interactive live sessions where you can ask questions in real time.",
  },
  {
    title: "Complete Practical Assignments",
    body: "Apply every concept on real websites, campaigns and case studies.",
  },
  {
    title: "Receive Mentor Guidance",
    body: "Get reviews, feedback and doubt-clearing support from your mentor.",
  },
  {
    title: "Earn Your Certificate",
    body: "Finish your assignments and capstone to receive your completion certificate.",
  },
];

export const CAREER_SUPPORT = [
  "Resume Building Support",
  "LinkedIn Profile Optimization",
  "Mock Interview Preparation",
  "Career Guidance",
  "Job Opening Updates through our WhatsApp Community",
];

export const CAREER_DISCLAIMER =
  "We provide career support, interview preparation, and access to job opportunities shared within our communities. Employment is not guaranteed and depends on individual skills, performance, interview results, and employer hiring requirements.";

export const STUDENT_BENEFITS = [
  {
    title: "Live Doubt Clearing",
    body: "Ask questions during class and get answers immediately, with no waiting on tickets.",
  },
  {
    title: "Lifetime Notes & Resources",
    body: "Downloadable checklists, templates, swipe files and audit sheets you can reuse.",
  },
  {
    title: "Recordings for Every Class",
    body: "Miss a session or want a revision? Every live class recording is shared with you.",
  },
  {
    title: "AI Tool Playbooks",
    body: "Practical prompt libraries and workflows for research, content, ads and reporting.",
  },
  {
    title: "Peer Learning Community",
    body: "An active WhatsApp group for updates, doubts and job openings.",
  },
  {
    title: "Portfolio-Ready Projects",
    body: "Finish with real work samples you can show clients, recruiters and employers.",
  },
];

export const AUDIENCE = [
  "Students",
  "Fresh Graduates",
  "Working Professionals",
  "Freelancers",
  "Digital Marketers",
  "Business Owners",
  "Agency Owners",
  "Content Creators",
  "Entrepreneurs",
];

export const TESTIMONIALS = [
  {
    name: "Ananya R.",
    role: "Fresh Graduate",
    quote:
      "I joined with zero marketing background. The live classes and weekly assignments made everything click, and my mentor reviewed every single submission.",
  },
  {
    name: "Rahul K.",
    role: "Working Professional",
    quote:
      "The AI workflows alone saved me hours every week at work. Keyword research, reporting and content briefs are now a fraction of the effort.",
  },
  {
    name: "Sneha M.",
    role: "Freelancer",
    quote:
      "The freelancing and client-handling week gave me a real process for audits and proposals. I landed my first two retainer clients after the course.",
  },
  {
    name: "Imran S.",
    role: "Business Owner",
    quote:
      "I finally understand my own ads and analytics. The funnel setup module helped me rebuild my website and track leads properly.",
  },
  {
    name: "Divya P.",
    role: "SEO Executive",
    quote:
      "The AEO and GEO modules are genuinely ahead of the curve. Tracking how ChatGPT and Perplexity cite our pages changed how I plan content.",
  },
  {
    name: "Karthik V.",
    role: "Agency Owner",
    quote:
      "Practical, structured and honest about what it takes. My team now follows the same audit and reporting system we learned here.",
  },
];

export const FAQS = [
  {
    q: "Is this beginner friendly?",
    a: "Yes. Both programs start from fundamentals and progress to advanced topics, so you can join without any prior marketing experience.",
  },
  {
    q: "Are live classes interactive?",
    a: "Absolutely. Sessions are live with your mentor, so you can ask questions, share your screen and get doubts cleared during class.",
  },
  {
    q: "Will recordings be provided?",
    a: "Yes. Every live class recording is shared with enrolled learners so you can revise or catch up on a missed session.",
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes. You receive a Skill Volume course completion certificate after completing your classes, assignments and final project.",
  },
  {
    q: "Do I need prior experience?",
    a: "No prior experience is required. You only need a laptop, a stable internet connection and consistency through the 90 days.",
  },
  {
    q: "Which AI tools will I learn?",
    a: "You will work with modern AI assistants and search engines such as ChatGPT, Gemini, Perplexity and Bing AI, plus AI features inside marketing, SEO, content and reporting tools.",
  },
  {
    q: "Is an EMI option available?",
    a: "Yes. An EMI option is available for course fee payments. Contact our team on WhatsApp or by phone and we will share the available plans.",
  },
  {
    q: "How do I enroll?",
    a: "Book a free consultation, message us on WhatsApp or call us. Our team will confirm your course, the batch and the enrollment steps.",
  },
  {
    q: "How can I know the next batch date?",
    a: "Batch dates are shared directly by our team. Contact us on WhatsApp, by phone or through the consultation form for the upcoming schedule.",
  },
];

export const COURSE_OPTIONS = [
  "Digital Marketing with AI",
  "SEO + AEO + GEO Mastery",
  "Not sure yet, please guide me",
];

export const CONTACT_TIMES = [
  "Morning (9 AM to 12 PM)",
  "Afternoon (12 PM to 4 PM)",
  "Evening (4 PM to 8 PM)",
  "Night (8 PM to 10 PM)",
  "Anytime",
];
