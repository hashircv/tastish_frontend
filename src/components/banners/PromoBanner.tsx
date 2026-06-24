import type { Product } from "../../data/products";
import { AnimatedFoodImage } from "../animations/AnimatedFoodImage";
import { LinkButton } from "../ui/Button";
import { generateWhatsAppOrder } from "../../utils/whatsapp";

type Props = {
  product: Product;
  title: string;
  text: string;
  reverse?: boolean;
};

export function PromoBanner({ product, title, text, reverse }: Props) {
  return (
    <article className="grid gap-5 overflow-hidden rounded-[2rem] bg-white p-4 shadow-soft ring-1 ring-black/5 md:grid-cols-2 md:items-center md:p-6">
      <div className={reverse ? "md:order-2" : ""}>
        <AnimatedFoodImage product={product} className="max-w-none" />
      </div>
      <div className="p-2 md:p-6">
        <p className="text-xs font-bold uppercase tracking-wide text-primary">{product.category}</p>
        <h3 className="mt-2 font-display text-2xl font-extrabold md:text-3xl">{title}</h3>
        <p className="mt-3 text-black/65">{text}</p>
        <LinkButton href={generateWhatsAppOrder(product.name)} className="order-button mt-5" full>
          Order this fresh batch
        </LinkButton>
      </div>
    </article>
  );
}
