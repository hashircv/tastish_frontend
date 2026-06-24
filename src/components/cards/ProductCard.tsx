import { MessageCircle } from "lucide-react";
import type { Product } from "../../data/products";
import { generateWhatsAppOrder } from "../../utils/whatsapp";
import { AnimatedFoodImage } from "../animations/AnimatedFoodImage";
import { LinkButton } from "../ui/Button";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-soft ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <AnimatedFoodImage product={product} size="sm" className="rounded-b-none shadow-none ring-0" />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-primary">{product.category}</p>
            <h3 className="mt-1 font-display text-xl font-extrabold text-dark">{product.name}</h3>
          </div>
          <p className="rounded-full bg-secondary px-3 py-1 text-right text-xs font-extrabold text-dark">{product.price}</p>
        </div>
        <p className="mt-3 text-sm leading-6 text-black/64">{product.description}</p>
        <LinkButton href={generateWhatsAppOrder(product.name)} target="_blank" rel="noreferrer" full className="order-button mt-5">
          <MessageCircle size={18} />
          Order {product.name}
        </LinkButton>
      </div>
    </article>
  );
}
