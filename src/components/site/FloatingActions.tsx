import { Phone } from "lucide-react";
import { BRAND, WHATSAPP_DEFAULT } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={WHATSAPP_DEFAULT}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Talk on WhatsApp"
        className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_16px_40px_-12px_rgb(255_106_0/0.9)] transition-transform duration-300 hover:scale-105 hover:bg-primary-hover"
      >
        <WhatsAppIcon className="size-7" />
      </a>
      <a
        href={BRAND.phoneHref}
        aria-label={`Call ${BRAND.phone}`}
        className="glass-panel grid size-14 place-items-center rounded-full text-foreground transition-transform duration-300 hover:scale-105 hover:text-primary-hover"
      >
        <Phone className="size-5" aria-hidden="true" />
      </a>
    </div>
  );
}
