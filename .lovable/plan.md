## Skill Volume updates

### 1. Brand logo
- Register the uploaded white logo as a CDN asset pointer (`src/assets/skill-volume-logo.png.asset.json`) and use it in the header and footer in place of the "SV" square, keeping the "Skill Volume" wordmark text next to it in the header.
- Also generate a square padded `public/favicon.png` from the same file and point the root route's icon link at it (removing `favicon.ico`).

### 2. WhatsApp icon
- Register the uploaded WhatsApp mark as an asset pointer and use it for the floating WhatsApp button and WhatsApp CTAs, replacing the current Lucide `MessageCircle` glyph. The uploaded mark is black-on-white, so it will be rendered as a white/inverted mask so it stays visible on the orange button.

### 3. Social links
Update `SOCIALS` in `src/lib/site.ts` to exactly four, and remove LinkedIn + Telegram everywhere:
- WhatsApp `https://wa.me/919701565449`
- Instagram `https://www.instagram.com/skillvolume`
- Facebook `https://www.facebook.com/skillvolume/`
- YouTube `https://www.youtube.com/@SkillVolume`

Telegram/LinkedIn also get removed from content lists: trust badges, "Why Choose" points, career support ("LinkedIn Profile Optimization" is a service, not a link, so it stays), student benefits and community mentions become "WhatsApp Community" only. Footer socials render as icons/labels for the four platforms.

### 4. Terms & Privacy pages
- New routes `/terms` and `/privacy` with the same dark premium styling, per-page SEO metadata and single H1.
- Content: standard, accurate policy copy for an online training institute (enrollment, fees and refund terms, course delivery, intellectual property, acceptable use, disclaimers including the no-employment-guarantee note; privacy covers what data the consultation form collects, how WhatsApp/phone contact is used, cookies/analytics, retention and contact details).
- Footer gets a "Legal" group linking both, plus links in the footer bottom bar. Not added to the main header nav.

### 5. Pricing and EMI
- Course 2 fee set to `₹16,999`.
- Both course cards show an "EMI option available" line next to the fee; the courses page and the final CTA area mention that EMI payment options are available. Wording stays factual: EMI options available, details shared by the team.

### 6. Download Brochure links
- Course 1 brochure: the Google Docs link provided.
- Course 2 brochure: the Google Docs link provided.
- The "Download Brochure" button becomes a real external link (new tab) on the courses page, and is also shown on the home page course cards.

### 7. Hero right-side visual
Replace the "Meta Ads / Week 06" mock class panel (course-1 specific) with a universal visual that represents both programs: a glass panel headed "Two flagship live online programs" containing two selectable course tiles (Digital Marketing with AI, SEO + AEO + GEO Mastery) each with duration, fee and a link to its section, above a shared row of universal proof points (100% live online, recordings provided, mentor guidance, AI-powered learning, certificate) and a floating "Learners across India" badge. Same glassmorphism, glow and float animation.

### 8. Em dash removal
Sweep every page and shared data file for `—`/`–` in visible copy and rewrite those sentences with commas, colons, or full stops. This includes course summaries, all 12 week titles and 9 module titles (e.g. "Week 1: Business & Audience Fundamentals"), AI notes, section descriptions, testimonials, FAQ answers, contact-time options, "Not sure yet, please guide me", and SEO titles/descriptions. Verified by a repository-wide search returning zero matches in user-visible strings.

### Technical notes
Most content changes land in `src/lib/site.ts`. Component edits: `Header.tsx`, `Footer.tsx`, `FloatingActions.tsx`, `CourseCard.tsx` (brochure link + EMI + fee), `src/routes/index.tsx` (hero panel), plus new `src/routes/terms.tsx` and `src/routes/privacy.tsx`. Root route head updates the favicon link.
