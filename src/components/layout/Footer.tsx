import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";
import { products } from "../../data/products";
import { navItems, BRAND } from "../../utils/constants";
import { generateWhatsAppEventInquiry, generateWhatsAppOrder } from "../../utils/whatsapp";
import { Container } from "../ui/Container";
import { LinkButton } from "../ui/Button";

function FooterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-4 lg:border-0 lg:py-0">
      <button className="flex w-full items-center justify-between text-left font-display text-lg font-extrabold lg:pointer-events-none" onClick={() => setOpen((value) => !value)}>
        {title}
        <ChevronDown className={`lg:hidden ${open ? "rotate-180" : ""}`} size={18} />
      </button>
      <div className={`${open ? "grid" : "hidden"} mt-4 gap-3 text-sm text-white/68 lg:grid`}>{children}</div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-dark pb-28 pt-14 text-white lg:pb-10">
      <Container className="grid gap-8 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <h2 className="font-display text-3xl font-extrabold">Tast<span className="text-primary">ish</span></h2>
          <p className="mt-4 max-w-sm text-white/68">Freshly cooked traditional Kerala goodness for daily meals, family tables, and event spreads.</p>
          <LinkButton href={generateWhatsAppOrder()} target="_blank" rel="noreferrer" className="order-button mt-6">
            <MessageCircle size={18} />
            WhatsApp Tastish
          </LinkButton>
        </div>
        <FooterGroup title="Products">
          {products.map((product) => (
            <a key={product.key} href="#products" className="hover:text-primary">{product.name}</a>
          ))}
        </FooterGroup>
        <FooterGroup title="Quick Links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-primary">{item.label}</a>
          ))}
          <a href={generateWhatsAppEventInquiry()} target="_blank" rel="noreferrer" className="hover:text-primary">Bulk/Event Order</a>
        </FooterGroup>
        <FooterGroup title="Contact">
          <span>{BRAND.phoneDisplay}</span>
          <span>{BRAND.address}</span>
          <span>{BRAND.hours}</span>
        </FooterGroup>
      </Container>
      <Container className="mt-8 border-t border-white/10 pt-6 text-sm text-white/48">(c) 2026 Tastish. Freshly cooked daily.</Container>
    </footer>
  );
}
