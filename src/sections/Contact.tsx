import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import { BRAND } from "../utils/constants";
import { callHref, generateWhatsAppOrder } from "../utils/whatsapp";
import { Container } from "../components/ui/Container";
import { LinkButton } from "../components/ui/Button";
import { SectionHeading } from "../components/ui/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="bg-white py-16 lg:py-24">
      <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading eyebrow="Contact" title="Order fresh. Ask fast. Confirm on WhatsApp." />
          <div className="mt-7 grid gap-4">
            {[
              { icon: Phone, label: BRAND.phoneDisplay },
              { icon: MessageCircle, label: "WhatsApp ordering available" },
              { icon: MapPin, label: BRAND.address },
              { icon: Clock3, label: BRAND.hours },
            ].map((item) => (
              <div key={item.label} className="flex min-h-14 items-center gap-4 rounded-2xl bg-secondary/60 px-4">
                <item.icon className="text-primary" size={22} />
                <span className="font-semibold text-black/70">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-3 sm:flex">
            <LinkButton href={generateWhatsAppOrder()} target="_blank" rel="noreferrer" full className="order-button sm:w-auto"><MessageCircle size={19} /> WhatsApp</LinkButton>
            <LinkButton href={callHref} variant="secondary" full className="sm:w-auto"><Phone size={19} /> Call Now</LinkButton>
          </div>
        </div>
        <div className="min-h-[22rem] rounded-[2rem] bg-[linear-gradient(135deg,#050505,#ffffff),radial-gradient(circle_at_70%_25%,rgba(217,4,41,0.24),transparent_35%)] p-5 shadow-soft ring-1 ring-black/10">
          <div className="grid h-full place-items-center rounded-[1.5rem] border-2 border-dashed border-primary/30 bg-white/90 text-center">
            <div>
              <MapPin className="mx-auto text-primary" size={36} />
              <p className="mt-4 font-display text-2xl font-extrabold">Kerala Delivery Area</p>
              <p className="mt-2 max-w-sm text-black/62">Map integration placeholder ready for a live Google Maps embed when the exact storefront location is confirmed.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
