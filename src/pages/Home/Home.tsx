import { About } from "../../sections/About";
import { CategoryBanners } from "../../sections/CategoryBanners";
import { Contact } from "../../sections/Contact";
import { CTA } from "../../sections/CTA";
import { EventOrders } from "../../sections/EventOrders";
import { Features } from "../../sections/Features";
import { Gallery } from "../../sections/Gallery";
import { Hero } from "../../sections/Hero";
import { Products } from "../../sections/Products";
import { Promo } from "../../sections/Promo";
import { Testimonials } from "../../sections/Testimonials";

export function Home() {
  return (
    <main className="safe-bottom">
      <Hero />
      <About />
      <Promo />
      <Products />
      <CategoryBanners />
      <Features />
      <Testimonials />
      <Gallery />
      <CTA />
      <Contact />
      <EventOrders />
      <CTA />
    </main>
  );
}
