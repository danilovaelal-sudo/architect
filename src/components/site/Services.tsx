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

const pickerOptions = [
  { label: "У меня пока только идея", target: "direction-orientation" },
  { label: "Хочу написать книгу", target: "direction-book" },
  { label: "Нужно собрать курс", target: "direction-product" },
  { label: "Нужны тексты или сайт", target: "direction-product" },
  { label: "Пока не знаю, что выбрать", target: "direction-orientation" },
];

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

        <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-line bg-paper-soft/50 p-6 text-center sm:p-8">
          <h3 className="font-display text-xl text-ink">
            Не знаете, что выбрать?
          </h3>
          <ul className="mx-auto mt-5 flex flex-wrap justify-center gap-2">
            {pickerOptions.map((option) => (
              <li key={option.label}>
                <a
                  href={`#${option.target}`}
                  className="flex min-h-11 items-center rounded-full border border-line px-4 text-sm text-ink-soft transition-colors hover:border-clay hover:text-clay"
                >
                  {option.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

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

                      <div className="px-5 pb-6 sm:px-6">
                        <p className="leading-relaxed text-ink-soft">
                          {service.forWhom}
                        </p>

                        {service.included && (
                          <ul className="mt-5 space-y-2">
                            {service.included.map((item) => (
                              <li
                                key={item}
                                className="flex gap-2 text-sm leading-snug text-ink-soft"
                              >
                                <span aria-hidden="true" className="text-clay">
                                  —
                                </span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}

                        {service.result && (
                          <div className="mt-5">
                            <p className="text-xs font-medium uppercase tracking-[0.15em] text-clay">
                              Результат
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                              {service.result}
                            </p>
                          </div>
                        )}

                        {service.format && (
                          <div className="mt-5">
                            <p className="text-xs font-medium uppercase tracking-[0.15em] text-clay">
                              Формат
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                              {service.format}
                            </p>
                          </div>
                        )}

                        {service.note && (
                          <p className="mt-5 border-l-2 border-clay/40 pl-4 text-sm italic leading-relaxed text-ink-soft">
                            {service.note}
                          </p>
                        )}

                        <div className="mt-6 rounded-2xl border border-line bg-paper p-5">
                          <ul className="space-y-3">
                            {service.prices.map((price) => (
                              <li
                                key={price.label}
                                className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5"
                              >
                                <span className="text-sm text-ink-soft">
                                  {price.label}
                                </span>
                                <span className="font-display text-lg text-clay">
                                  {price.value}
                                </span>
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
                              {service.ctaLabel}
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
