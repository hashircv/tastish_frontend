import { X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { products } from "../data/products";

const gallery = [
  { product: products[0], title: "Chapathi batch", h: "h-64" },
  { product: products[1], title: "Fresh pathiri", h: "h-52" },
  { product: products[2], title: "Noolputtu coils", h: "h-72" },
  { product: products[3], title: "Coin porotta stack", h: "h-56" },
  { product: products[7], title: "Fresh appam", h: "h-60" },
  { product: products[6], title: "Kuboos pack", h: "h-64" },
  { product: products[5], title: "Event order prep", h: "h-80" },
];

export function Gallery() {
  const [active, setActive] = useState<(typeof gallery)[number] | null>(null);

  return (
    <section id="gallery" className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="Real food photos with a fresh-batch feel."
          text="The gallery uses local product photos with lightweight motion so the page stays fast and trustworthy on mobile."
        />
        <div className="masonry mt-9">
          {gallery.map((item) => (
            <button
              key={item.title}
              onClick={() => setActive(item)}
              className={`group relative mb-4 w-full break-inside-avoid overflow-hidden rounded-[1.5rem] bg-secondary ${item.h} text-left shadow-soft ring-1 ring-black/5`}
            >
              <motion.img
                src={item.product.image.src}
                srcSet={item.product.image.srcSet}
                sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
                alt={item.product.image.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/10 to-transparent" />
              <span className="absolute inset-x-5 bottom-5 font-display text-2xl font-extrabold text-white">{item.title}</span>
            </button>
          ))}
        </div>
      </Container>
      {active ? (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4" role="dialog" aria-modal="true" aria-label={active.title}>
          <button className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white" aria-label="Close gallery preview" onClick={() => setActive(null)}>
            <X />
          </button>
          <figure className="overflow-hidden rounded-[2rem] bg-white shadow-2xl">
            <img src={active.product.image.src} alt={active.product.image.alt} className="max-h-[78vh] w-full max-w-3xl object-cover" />
            <figcaption className="p-4 font-display text-xl font-extrabold">{active.title}</figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}
