import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-line/70 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-clay">
            Форматы
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
            Что можно заказать в Смысловой мастерской
          </h2>
        </div>

        <nav
          aria-label="Быстрый переход к формату"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          <ul className="flex flex-wrap justify-center gap-2">
            {services.map((service) => (
              <li key={service.number}>
                <a
                  href={`#format-${service.number}`}
                  className="flex h-11 min-w-11 items-center justify-center rounded-full border border-line px-3 text-xs text-ink-soft transition-colors hover:border-clay hover:text-clay"
                >
                  {service.number}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-16">
          {services.map((service, index) => (
            <article
              key={service.number}
              id={`format-${service.number}`}
              className={cn(
                "scroll-mt-28 rounded-3xl px-6 py-12 md:px-10",
                index % 2 === 1 && "bg-paper-soft/50",
              )}
            >
              <div className="flex flex-wrap items-baseline gap-4">
                <span
                  aria-hidden="true"
                  className="font-display text-5xl text-clay/25 md:text-6xl"
                >
                  {service.number}
                </span>
                <h3 className="text-balance font-display text-2xl text-ink md:text-3xl">
                  {service.title}
                </h3>
              </div>

              <div className="mt-8 grid gap-10 md:grid-cols-[1fr_18rem] md:items-start">
                <div>
                  <p className="leading-relaxed text-ink-soft">
                    {service.intro}
                  </p>

                  {service.points && (
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-full border border-line px-3 py-1.5 text-sm text-ink-soft"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  {service.note && (
                    <p className="mt-6 border-l-2 border-clay/40 pl-4 text-sm italic leading-relaxed text-ink-soft">
                      {service.note}
                    </p>
                  )}
                </div>

                <div className="rounded-2xl border border-line bg-paper p-6">
                  <ul className="space-y-4">
                    {service.prices.map((price) => (
                      <li key={price.label}>
                        <p className="text-xs uppercase tracking-wide text-ink-soft">
                          {price.label}
                        </p>
                        <p className="mt-1 font-display text-xl text-clay">
                          {price.value}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <Button asChild variant="outline" size="sm" className="mt-6 w-full">
                    <a
                      href="https://vk.me/danilovaelal"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Обсудить проект
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
