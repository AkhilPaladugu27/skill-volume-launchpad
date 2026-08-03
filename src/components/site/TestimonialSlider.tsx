import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const pages = Math.max(1, TESTIMONIALS.length - perView + 1);
  const clamped = Math.min(index, pages - 1);

  const next = useCallback(() => setIndex((i) => (i + 1) % pages), [pages]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + pages) % pages), [pages]);

  useEffect(() => {
    const timer = window.setInterval(next, 6000);
    return () => window.clearInterval(timer);
  }, [next]);

  return (
    <div className="mt-14">
      <div className="overflow-hidden">
        <ul
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${clamped * (100 / perView)}%)` }}
        >
          {TESTIMONIALS.map((t) => (
            <li key={t.name} className="shrink-0 px-3" style={{ width: `${100 / perView}%` }}>
              <figure className="surface-card flex h-full flex-col gap-5 rounded-2xl p-7">
                <Quote className="size-7 text-primary" aria-hidden="true" />
                <blockquote className="text-sm leading-relaxed text-subtle">“{t.quote}”</blockquote>
                <div className="mt-auto flex items-center gap-3 border-t border-border pt-5">
                  <span className="grid size-11 place-items-center rounded-full bg-primary/15 font-display text-sm font-semibold text-primary-hover">
                    {t.name.charAt(0)}
                  </span>
                  <figcaption>
                    <span className="block text-sm font-semibold text-foreground">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.role}</span>
                  </figcaption>
                  <span className="ml-auto flex gap-0.5" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-3.5 fill-primary text-primary"
                        aria-hidden="true"
                      />
                    ))}
                  </span>
                </div>
              </figure>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonials"
          className="grid size-11 place-items-center rounded-full border border-border text-subtle transition-colors hover:border-primary/60 hover:text-primary-hover"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <div className="flex items-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial group ${i + 1}`}
              aria-current={i === clamped}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === clamped ? "w-7 bg-primary" : "w-2 bg-border hover:bg-muted-foreground",
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next testimonials"
          className="grid size-11 place-items-center rounded-full border border-border text-subtle transition-colors hover:border-primary/60 hover:text-primary-hover"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
