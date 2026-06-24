import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { TestimonialCard } from "../components/cards/TestimonialCard";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { testimonials } from "../data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Customer Words" title="Freshness customers remember." align="center" />
        <Swiper modules={[Autoplay, Pagination]} spaceBetween={18} slidesPerView={1} pagination={{ clickable: true }} autoplay={{ delay: 3800, pauseOnMouseEnter: true }} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }} className="mt-9 !pb-12">
          {testimonials.map((item) => (
            <SwiperSlide key={item.name} className="h-auto"><TestimonialCard {...item} /></SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
