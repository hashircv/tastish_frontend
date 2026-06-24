import { motion } from "framer-motion";

const items = ["Freshly Cooked Daily", "WhatsApp Orders Available", "Traditional Kerala Foods", "Bulk Orders for Functions"];

export function OfferRibbon() {
  return (
    <div className="sticky top-0 z-50 overflow-hidden bg-dark py-2 text-white">
      <motion.div
        className="flex w-max gap-8 whitespace-nowrap text-xs font-extrabold uppercase tracking-[0.2em]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-8">
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
