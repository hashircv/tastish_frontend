import { ArrowDown, Phone, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { products } from "../data/products";
import { callHref, generateWhatsAppOrder } from "../utils/whatsapp";
import { Container } from "../components/ui/Container";
import { LinkButton } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";

const heroProducts = products.filter((product) => ["chapathi", "idiyappam", "coinPorotta", "appam"].includes(product.key));

export function Hero() {
  const [index, setIndex] = useState(0);
  const product = heroProducts[index];

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % heroProducts.length), 4200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden bg-dark pt-8 text-white">
      <motion.img
        key={product.image.src}
        src={product.image.src}
        srcSet={product.image.srcSet}
        sizes="100vw"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-85"
        onError={(event) => {
          event.currentTarget.style.opacity = "0";
        }}
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 0.85, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72),rgba(0,0,0,0.38)_48%,rgba(217,4,41,0.12))]" />
      <Container className="relative grid min-h-[calc(90vh-4rem)] items-center gap-8 py-10 lg:grid-cols-[1fr_0.72fr] lg:py-16">
        <div>
          <Badge className="gap-2 bg-white text-primary"><Sparkles size={14} /> Freshly prepared daily</Badge>
          <h1 className="fluid-hero mt-5 max-w-4xl font-display font-extrabold text-white">
            Freshly Cooked Traditional Goodness
          </h1>
          <p className="fluid-lead mt-5 max-w-2xl text-white/78">
            Chapathi, nice pathiri, appam, noolputtu, porotta, and kuboos made fresh for Kerala homes, shops, functions, and marriages.
          </p>
          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
            <LinkButton href={generateWhatsAppOrder()} target="_blank" rel="noreferrer" size="lg" full className="order-button hidden sm:inline-flex sm:w-auto">
              <MessageCircle size={20} />
              WhatsApp Order
            </LinkButton>
            <LinkButton href={callHref} variant="accent" size="lg" full className="order-button hidden sm:inline-flex sm:w-auto">
              <Phone size={20} />
              Call Now
            </LinkButton>
            <LinkButton href="#products" variant="accent" size="lg" full className="order-button sm:w-auto">
              <ArrowDown size={20} />
              View Products
            </LinkButton>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 text-center">
            {["Daily Fresh", "Hygienic", "Bulk Ready"].map((item) => (
              <div key={item} className="rounded-2xl bg-white/12 px-3 py-4 text-sm font-extrabold text-white shadow-sm ring-1 ring-white/15 backdrop-blur">{item}</div>
            ))}
          </div>
        </div>
        <motion.div key={product.key} initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.45 }} className="lg:pl-8">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-red-200">Featured fresh batch</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-white">{product.name}</h2>
          <p className="mt-3 text-white/72">{product.short}</p>
          <p className="mt-5 inline-flex rounded-full bg-primary px-4 py-2 text-sm font-extrabold text-white">{product.price}</p>
        </motion.div>
      </Container>
    </section>
  );
}
