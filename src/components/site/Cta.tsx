import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-60";

const styles = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover hover:-translate-y-0.5 shadow-[0_14px_38px_-14px_rgb(255_106_0/0.75)] hover:shadow-[0_18px_46px_-12px_rgb(255_138_61/0.85)]",
  outline:
    "border border-border bg-card-alt/60 text-foreground hover:border-primary/60 hover:text-primary-hover hover:-translate-y-0.5",
  ghost: "text-subtle hover:text-primary-hover",
  whatsapp:
    "border border-primary/40 bg-primary/10 text-primary-hover hover:bg-primary/20 hover:-translate-y-0.5",
} as const;

export type CtaVariant = keyof typeof styles;

export function CtaLink({
  to,
  href,
  variant = "primary",
  className,
  children,
  ariaLabel,
  ...props
}: {
  to?: string;
  href?: string;
  variant?: CtaVariant;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>)
{
  const classes = cn(base, styles[variant], className);

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
  href={href}
  className={classes}
  aria-label={ariaLabel}
  {...props}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
  to={to ?? "/"}
  className={classes}
  aria-label={ariaLabel}
  {...props}
>
      {children}
    </Link>
  );
}

export function CtaButton({
  variant = "primary",
  className,
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: CtaVariant }) {
  return (
    <button className={cn(base, styles[variant], className)} {...rest}>
      {children}
    </button>
  );
}
