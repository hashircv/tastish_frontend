import { AnimatedFoodImage } from "../components/animations/AnimatedFoodImage";
import { Container } from "../components/ui/Container";
import { products } from "../data/products";

export function CategoryBanners() {
  const categories = [
    { title: "Chapathi Packs", product: products[0] },
    { title: "Pathiri Specials", product: products[1] },
    { title: "Porotta Varieties", product: products[3] },
    { title: "Steamed Noolputtu", product: products[2] },
    { title: "Fresh Appam", product: products[7] },
  ];
  return (
    <section className="bg-secondary py-16">
      <Container className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {categories.map(({ title, product }) => (
          <article key={title} className="overflow-hidden rounded-[1.75rem] bg-white shadow-soft ring-1 ring-black/5">
            <AnimatedFoodImage product={product} size="sm" className="rounded-b-none shadow-none ring-0" />
            <div className="p-5">
              <h3 className="font-display text-xl font-extrabold">{title}</h3>
              <p className="mt-2 text-sm text-black/62">{product.short}</p>
            </div>
          </article>
        ))}
      </Container>
    </section>
  );
}
