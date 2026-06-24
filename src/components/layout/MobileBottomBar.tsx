import { MessageCircle, Phone } from "lucide-react";
import { callHref, generateWhatsAppOrder } from "../../utils/whatsapp";

export function MobileBottomBar() {
  return (
    <nav aria-label="Quick contact" className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_35px_rgb(0_0_0_/_0.12)] backdrop-blur lg:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a href={generateWhatsAppOrder()} target="_blank" rel="noreferrer" className="order-button flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-4 font-bold">
          <MessageCircle size={19} />
          WhatsApp
        </a>
        <a href={callHref} className="order-button flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-4 font-bold">
          <Phone size={19} />
          Call Now
        </a>
      </div>
    </nav>
  );
}
