import { useState } from "react";
import { ChevronDown, Check, Sparkles, CreditCard, Download } from "lucide-react";
import { COURSES, EMI_NOTE } from "@/lib/site";
import { CtaLink } from "./Cta";
import { cn } from "@/lib/utils";

type Course = (typeof COURSES)[number];

export function CourseCard({ course }: { course: Course; compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const [openItem, setOpenItem] = useState<number | null>(0);
  const panelId = `${course.id}-curriculum`;

  return (
    <article
      id={course.id}
      className="surface-card group relative scroll-mt-28 overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 sm:p-9"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-primary/12 blur-3xl transition-opacity duration-500 group-hover:bg-primary/20"
      />
      <div className="relative">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-hover">
          <Sparkles className="size-3.5" aria-hidden="true" />
          {course.kicker}
        </span>
        <h3 className="mt-5 text-2xl font-semibold sm:text-[1.75rem]">{course.title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{course.summary}</p>

        <dl className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Meta label="Duration" value={course.duration} />
          <Meta label="Mode" value="Live Online" />
          <Meta label="Recordings" value={course.recordings} />
          <Meta label="Course Fee" value={course.fee ?? "On Request"} highlight />
        </dl>

        <p className="mt-3.5 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-2 text-xs font-medium text-primary-hover">
          <CreditCard className="size-3.5" aria-hidden="true" />
          {EMI_NOTE}
        </p>

        <h4 className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
          Highlights
        </h4>
        <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {course.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-subtle">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          <CtaLink
  to="/contact"
  data-course={course.id}
  data-action="enroll"
>Enroll Now</CtaLink>
          <CtaLink
  href={course.brochure}
  variant="outline"
  data-course={course.id}
  data-action="brochure"
>
            <Download className="size-4" aria-hidden="true" /> Download Brochure
          </CtaLink>

          <button
  type="button"
  data-course={course.id}
  data-action="curriculum"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card-alt/60 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/60 hover:text-primary-hover"
          >
            View Curriculum
            <ChevronDown
              className={cn("size-4 transition-transform duration-300", open && "rotate-180")}
              aria-hidden="true"
            />
          </button>
        </div>

        <div
          id={panelId}
          className={cn(
            "grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "mt-8 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <div className="overflow-hidden">
            <div className="rounded-2xl border border-border bg-background/60 p-5 sm:p-6">
              <h4 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-primary-hover">
                {course.curriculumLabel}
              </h4>
              <ul className="mt-5 divide-y divide-border">
                {course.curriculum.map((mod, i) => {
                  const isOpen = openItem === i;
                  return (
                    <li key={mod.title}>
                      <h5>
                        <button
                          type="button"
                          onClick={() => setOpenItem(isOpen ? null : i)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center gap-4 py-4 text-left"
                        >
                          <span
                            className={cn(
                              "grid size-8 shrink-0 place-items-center rounded-lg text-xs font-semibold transition-colors",
                              isOpen
                                ? "bg-primary text-primary-foreground"
                                : "bg-card-alt text-muted-foreground",
                            )}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="flex-1 text-sm font-medium text-foreground">
                            {mod.title}
                          </span>
                          <ChevronDown
                            className={cn(
                              "size-4 shrink-0 text-muted-foreground transition-transform duration-300",
                              isOpen && "rotate-180 text-primary",
                            )}
                            aria-hidden="true"
                          />
                        </button>
                      </h5>
                      <div
                        className={cn(
                          "grid transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                          isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <p className="overflow-hidden pl-12 pr-2 text-sm leading-relaxed text-muted-foreground">
                          {mod.body}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <p className="mt-5 flex items-start gap-2.5 rounded-xl border border-primary/25 bg-primary/8 p-4 text-sm text-primary-hover">
                <Sparkles className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {course.aiNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function Meta({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="rounded-xl border border-border bg-background/50 px-4 py-3">
      <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </dt>
      <dd
        className={cn(
          "mt-1 text-sm font-semibold",
          highlight ? "text-primary-hover" : "text-foreground",
        )}
      >
        {value}
      </dd>
    </div>
  );
}
