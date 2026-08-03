import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  level = 2,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  level?: 1 | 2;
}) {
  const Tag = level === 1 ? "h1" : "h2";
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-hover">
          {eyebrow}
        </span>
      ) : null}
      <Tag className="mt-5 text-balance text-3xl font-semibold leading-[1.15] sm:text-4xl lg:text-[2.75rem]">
        {title}
      </Tag>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </Reveal>
  );
}

export function Section({
  children,
  className,
  id,
  alt = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 px-5 py-20 lg:px-8 lg:py-28",
        alt && "bg-background-alt",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
