import { MessageCircle, Phone } from "lucide-react";
import { callHref, generateWhatsAppOrder } from "../utils/whatsapp";
import { Container } from "../components/ui/Container";
import { LinkButton } from "../components/ui/Button";

export function CTA() {
  return (
    <section className="py-14">
      <Container>
        <div className="rounded-[2rem] bg-[linear-gradient(135deg,#050505,#D90429_58%,#050505)] p-6 text-white shadow-soft md:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-extrabold md:text-5xl">Ready to Order?</h2>
              <p className="mt-3 max-w-2xl text-white/88">Start with WhatsApp for quick availability, pricing, and fresh-batch confirmation.</p>
            </div>
            <div className="grid gap-3 sm:flex">
              <LinkButton href={generateWhatsAppOrder()} target="_blank" rel="noreferrer" full className="order-button sm:w-auto"><MessageCircle size={19} /> WhatsApp Order</LinkButton>
              <LinkButton href={callHref} variant="accent" full className="sm:w-auto"><Phone size={19} /> Call Now</LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
