import { Phone, MessageCircle } from "lucide-react";
import { callHref, generateWhatsAppOrder } from "../../utils/whatsapp";
import { LinkButton } from "./Button";

export function FloatingActionButton() {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 lg:flex">
      <LinkButton href={generateWhatsAppOrder()} aria-label="Order on WhatsApp" size="icon" className="order-button h-14 w-14 animate-pulse">
        <MessageCircle size={22} />
      </LinkButton>
      <LinkButton href={callHref} aria-label="Call Tastish" variant="accent" size="icon" className="order-button h-14 w-14">
        <Phone size={22} />
      </LinkButton>
    </div>
  );
}
