import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import type { Product } from "../../data/products";
import { cn } from "../../utils/cn";

type Props = {
  product: Product;
  size?: "sm" | "lg";
  priority?: boolean;
  className?: string;
};

export function AnimatedFoodImage({ product, size = "lg", priority = false, className }: Props) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView({ threshold: 0.15, rootMargin: "120px" });
  const active = inView && !reduced;

  return (
    <figure
      ref={ref}
      className={cn(
        "relative mx-auto isolate overflow-hidden rounded-[2rem] bg-white shadow-soft ring-1 ring-black/10",
        size === "sm" ? "h-48 w-full" : "aspect-[11/9] w-full max-w-[33rem]",
        className,
      )}
    >
      <motion.img
        src={product.image.src}
        srcSet={product.image.srcSet}
        sizes={size === "sm" ? "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 44vw, 100vw"}
        alt={product.image.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover"
        onError={(event) => {
          event.currentTarget.style.opacity = "0";
        }}
        animate={active ? { scale: [1.01, 1.045, 1.01] } : false}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.46))]" />
      <figcaption className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
        <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-extrabold text-dark shadow-sm backdrop-blur">
          {product.name}
        </span>
        <span className="rounded-full bg-primary px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-wide text-white">
          Fresh
        </span>
      </figcaption>
    </figure>
  );
}
