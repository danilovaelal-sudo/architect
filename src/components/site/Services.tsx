import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="border-t border-line/70 bg-paper-soft/40 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-clay">
            Форматы
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
            Что можно заказать в Смысловой мастерской
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-14">
          {services.map((service) => (
            <AccordionItem key={service.number} value={service.number}>
              <AccordionTrigger>
                <span className="flex items-baseline gap-4">
                  <span className="font-sans text-sm text-clay">
                    {service.number}
                  </span>
                  {service.title}
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <p className="leading-relaxed text-ink-soft">
                  {service.intro}
                </p>

                {service.points && (
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm leading-relaxed text-ink-soft"
                      >
                        <span className="text-clay">·</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                {service.note && (
                  <p className="mt-5 border-l-2 border-clay/40 pl-4 text-sm italic leading-relaxed text-ink-soft">
                    {service.note}
                  </p>
                )}

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.prices.map((price) => (
                    <Badge key={price.label}>
                      {price.label}: {price.value}
                    </Badge>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
