import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "../../utils/constants";
import { generateWhatsAppOrder } from "../../utils/whatsapp";
import { Container } from "../ui/Container";
import { LinkButton } from "../ui/Button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-8 z-40 bg-dark text-white shadow-sm">
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="font-display text-2xl font-extrabold text-white" aria-label="Tastish home">
          Tast<span className="text-primary">ish</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-bold text-white/78 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <LinkButton href={generateWhatsAppOrder()} target="_blank" rel="noreferrer" className="order-button">
            <MessageCircle size={18} />
            WhatsApp Order
          </LinkButton>
        </div>
        <button aria-label="Open menu" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-dark shadow-sm ring-1 ring-white/10 lg:hidden" onClick={() => setOpen(true)}>
          <Menu size={22} />
        </button>
      </Container>
      <AnimatePresence>
        {open ? (
          <motion.div className="fixed inset-0 z-50 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="absolute inset-0 bg-black/35" aria-label="Close menu" onClick={() => setOpen(false)} />
            <motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 28, stiffness: 260 }} className="absolute right-0 top-0 h-dvh w-[86vw] max-w-sm bg-white p-5 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-extrabold">Tast<span className="text-primary">ish</span></span>
                <button aria-label="Close menu" className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary" onClick={() => setOpen(false)}>
                  <X size={22} />
                </button>
              </div>
              <nav className="mt-8 grid gap-2" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="min-h-12 rounded-2xl px-4 py-3 text-lg font-extrabold transition hover:bg-secondary">
                    {item.label}
                  </a>
                ))}
              </nav>
              <LinkButton href={generateWhatsAppOrder()} target="_blank" rel="noreferrer" full className="order-button mt-8">
                <MessageCircle size={19} />
                Start WhatsApp Order
              </LinkButton>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
