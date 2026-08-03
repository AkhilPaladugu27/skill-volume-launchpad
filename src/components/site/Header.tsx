import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/site";
import logoAsset from "@/assets/skill-volume-logo.png.asset.json";
import { CtaLink } from "./Cta";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass-panel border-b bg-background/85" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Skill Volume home">
          <img
            src={logoAsset.url}
            alt="Skill Volume logo"
            width={40}
            height={40}
            className="size-10 object-contain"
          />
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold tracking-tight">
              {BRAND.name}
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
              Digital Skills Institute
            </span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-subtle transition-colors hover:text-primary-hover data-[status=active]:bg-primary/10 data-[status=active]:text-primary-hover"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={BRAND.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-subtle transition-colors hover:border-primary/60 hover:text-primary-hover md:inline-flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call Now
          </a>
          <CtaLink to="/contact" className="hidden px-5 py-2.5 sm:inline-flex">
            Enroll Now
          </CtaLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-xl border border-border text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="glass-panel border-t bg-background/95 lg:hidden"
      >
        <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl px-5 py-5">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-subtle transition-colors data-[status=active]:bg-primary/10 data-[status=active]:text-primary-hover"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 grid gap-3">
            <CtaLink to="/contact">Enroll Now</CtaLink>
            <CtaLink href={BRAND.phoneHref} variant="outline">
              <Phone className="size-4" aria-hidden="true" /> Call {BRAND.phone}
            </CtaLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
