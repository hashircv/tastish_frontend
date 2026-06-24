import { Counter } from "../components/ui/Counter";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { SectionHeading } from "../components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About Tastish"
            title="Kerala staples prepared with startup-level consistency."
            text="Tastish brings daily freshness, traditional preparation, hygiene, and affordable pricing together for families and bulk buyers."
          />
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Counter value={750} suffix="+" label="Happy Customers" />
          <Counter value={320} suffix="+" label="Daily Orders" />
          <Counter value={100} suffix="%" label="Quality Commitment" />
        </div>
      </Container>
    </section>
  );
}
