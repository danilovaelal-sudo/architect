import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/site/TestimonialCard";
import { ScrollReveal } from "@/components/site/scroll-reveal";

export function Testimonials() {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="scroll-mt-20 border-t border-line/70 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-clay">
            Отзывы
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
            Что говорят те, кто уже прошёл этот путь
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={i * 80}>
              <TestimonialCard {...testimonial} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
