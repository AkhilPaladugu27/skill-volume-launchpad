import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  BRAND,
  CAREER_SUPPORT,
  COURSES,
  LEGAL_LINKS,
  NAV_LINKS,
  SOCIALS,
} from "@/lib/site";
import logoAsset from "@/assets/skill-volume-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-alt">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Skill Volume logo"
              width={40}
              height={40}
              className="size-10 object-contain"
            />
            <span className="font-display text-lg font-semibold">{BRAND.name}</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Skill Volume is a 100% online digital marketing training institute helping students,
            professionals, freelancers, business owners and entrepreneurs build careers in Digital
            Marketing and modern search optimization through live classes, practical learning,
            AI-powered tools and mentor guidance.
          </p>
          <p className="mt-5 text-sm font-medium text-primary-hover">{BRAND.tagline}</p>
        </div>

        <nav aria-label="Quick links">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-primary-hover">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
            Legal
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {LEGAL_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-primary-hover">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
            Courses
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {COURSES.map((course) => (
              <li key={course.id}>
                <Link
                  to="/courses"
                  hash={course.id}
                  className="transition-colors hover:text-primary-hover"
                >
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
            Career Support
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {CAREER_SUPPORT.slice(0, 4).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
            Contact
          </h2>
          <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li>
              <a
                href={BRAND.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-primary-hover"
              >
                <Phone className="size-4 text-primary" aria-hidden="true" />
                {BRAND.phone}
              </a>
            </li>
            <li>
              <a
                href={BRAND.emailHref}
                className="flex items-center gap-3 transition-colors hover:text-primary-hover"
              >
                <Mail className="size-4 text-primary" aria-hidden="true" />
                {BRAND.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              100% Online. Learn from anywhere in India.
            </li>
          </ul>

          <h2 className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
            Follow Us
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-border px-3.5 py-2 text-xs font-medium text-subtle transition-colors hover:border-primary/60 hover:text-primary-hover"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Skill Volume. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="transition-colors hover:text-primary-hover"
              >
                {link.label}
              </Link>
            ))}
            <span>Live online Digital Marketing, SEO, AEO &amp; GEO training.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
