import { FeatureCard } from "../components/cards/FeatureCard";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";
import { features } from "../data/features";

export function Features() {
  return (
    <section id="features" className="py-16 lg:py-24">
      <Container>
        <Reveal><SectionHeading eyebrow="Why Choose Tastish" title="Built for daily trust, not just first orders." align="center" /></Reveal>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.04}><FeatureCard {...feature} /></Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
