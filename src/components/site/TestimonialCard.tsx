import { Card } from "@/components/ui/card";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ name, description, text }: Testimonial) {
  return (
    <Card className="text-left">
      <p className="leading-relaxed text-ink">«{text}»</p>
      <div className="mt-6 border-t border-line/70 pt-4">
        <p className="font-display text-lg text-ink">{name}</p>
        <p className="mt-1 text-sm text-ink-soft">{description}</p>
      </div>
    </Card>
  );
}
