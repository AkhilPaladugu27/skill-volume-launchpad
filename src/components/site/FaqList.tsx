import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FaqList({
  items,
  defaultOpen = 0,
}: {
  items: { q: string; a: string }[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <ul className="mx-auto mt-12 max-w-3xl space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li
            key={item.q}
            className={cn(
              "surface-card overflow-hidden rounded-2xl transition-colors duration-300",
              isOpen && "border-primary/40",
            )}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-4 px-6 py-5 text-left"
              >
                <span className="flex-1 text-base font-medium text-foreground">{item.q}</span>
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 text-muted-foreground transition-transform duration-300",
                    isOpen && "rotate-180 text-primary",
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              className={cn(
                "grid transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <p className="overflow-hidden px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
