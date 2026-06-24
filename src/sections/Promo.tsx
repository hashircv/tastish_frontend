import { PromoBanner } from "../components/banners/PromoBanner";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { products } from "../data/products";

export function Promo() {
  const chapathi = products.find((product) => product.key === "chapathi")!;
  const porotta = products.find((product) => product.key === "coinPorotta")!;

  return (
    <section className="py-10">
      <Container className="grid gap-5">
        <Reveal><PromoBanner product={chapathi} title="Fully cooked chapathi packs for everyday ease." text="Fresh, soft, and affordable packs ready for homes, shops, and quick dinner plans." /></Reveal>
        <Reveal><PromoBanner product={porotta} title="Porotta batches made for busy counters and gatherings." text="Layered Kerala porotta options with daily freshness and bulk-order reliability." reverse /></Reveal>
      </Container>
    </section>
  );
}
