import { ProductCard } from "../components/cards/ProductCard";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { products } from "../data/products";

export function Products() {
  return (
    <section id="products" className="py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Fresh Menu" title="Traditional Kerala foods, prepared daily." text="Every product card is wired for one-tap WhatsApp ordering with availability and pricing confirmation." />
        </Reveal>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <Reveal key={product.key} delay={index * 0.04}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
