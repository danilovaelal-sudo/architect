import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { directions } from "@/data/directions";
import { services } from "@/data/services";

function getService(number: string) {
  const service = services.find((s) => s.number === number);
  if (!service) {
    throw new Error(`Service ${number} not found`);
  }
  return service;
}

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
          aria-label="Быстрый переход к направлению"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          <ul className="flex flex-wrap justify-center gap-2">
            {directions.map((direction) => (
              <li key={direction.id}>
                <a
                  href={`#direction-${direction.id}`}
                  className="flex min-h-11 items-center rounded-full border border-line px-4 text-sm text-ink-soft transition-colors hover:border-clay hover:text-clay"
                >
                  {direction.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-16 space-y-16">
          {directions.map((direction) => (
            <div
              key={direction.id}
              id={`direction-${direction.id}`}
              className="scroll-mt-24"
            >
              <div className="max-w-2xl">
                <h3 className="font-display text-2xl text-ink md:text-3xl">
                  {direction.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-soft">
                  {direction.description}
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {direction.serviceNumbers.map((number) => {
                  const service = getService(number);
                  return (
                    <details
                      key={number}
                      id={`format-${number}`}
                      className="group scroll-mt-28 rounded-2xl border border-line bg-paper-soft/40 open:bg-paper-soft/60"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 marker:content-none">
                        <span className="font-display text-lg text-ink md:text-xl">
                          {service.title}
                        </span>
                        <ChevronDown
                          aria-hidden="true"
                          className="h-5 w-5 shrink-0 text-ink-soft transition-transform duration-300 group-open:rotate-180"
                        />
                      </summary>

                      <div className="px-5 pb-6">
                        <p className="leading-relaxed text-ink-soft">
                          {service.intro}
                        </p>

                        {service.points && (
                          <ul className="mt-5 flex flex-wrap gap-2">
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
                          <p className="mt-5 border-l-2 border-clay/40 pl-4 text-sm italic leading-relaxed text-ink-soft">
                            {service.note}
                          </p>
                        )}

                        <div className="mt-6 rounded-2xl border border-line bg-paper p-5">
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

                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="mt-6 w-full"
                          >
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
                    </details>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
