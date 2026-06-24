import { CalendarDays, MessageCircle, UsersRound } from "lucide-react";
import { generateWhatsAppEventInquiry } from "../utils/whatsapp";
import { Container } from "../components/ui/Container";
import { LinkButton } from "../components/ui/Button";

export function EventOrders() {
  return (
    <section id="events" className="py-16 lg:py-24">
      <Container>
        <div className="overflow-hidden rounded-[2.2rem] bg-dark text-white shadow-soft">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.85fr] lg:p-12">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Bulk / Event Orders</p>
              <h2 className="fluid-title mt-4 max-w-3xl font-display font-extrabold">Catering for Functions & Marriages</h2>
              <p className="fluid-lead mt-4 max-w-2xl text-white/72">
                Order chapathi, pathiri, noolputtu, porotta, and kuboos in larger quantities for weddings, family functions, and community events.
              </p>
              <div className="mt-7 grid gap-3 sm:flex">
                <LinkButton href={generateWhatsAppEventInquiry()} target="_blank" rel="noreferrer" size="lg" full className="sm:w-auto">
                  <MessageCircle size={20} />
                  WhatsApp Event Inquiry
                </LinkButton>
              </div>
            </div>
            <div className="grid gap-4">
              {[
                { icon: UsersRound, title: "Guest-count planning", text: "Prefilled inquiry asks for event type, date, and approximate guests." },
                { icon: CalendarDays, title: "Date-based preparation", text: "Daily fresh batches can be planned around your function timing." },
              ].map((item) => (
                <div key={item.title} className="rounded-[1.5rem] bg-white/10 p-5 ring-1 ring-white/10">
                  <item.icon className="text-primary" size={26} />
                  <h3 className="mt-4 font-display text-xl font-extrabold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/68">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
