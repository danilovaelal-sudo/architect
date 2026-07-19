import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HandNote } from "@/components/site/hand-note";
import { ScrollReveal } from "@/components/site/scroll-reveal";
import { directions } from "@/data/directions";
import { services } from "@/data/services";
import { selfGuidedMaterials } from "@/data/selfGuidedMaterials";
import { siteSettings } from "@/data/site-settings";

function getService(number: string) {
  const service = services.find((s) => s.number === number);
  if (!service) {
    throw new Error(`Service ${number} not found`);
  }
  return service;
}

const pickerOptions = [
  { label: "У меня пока только идея", target: "direction-structure" },
  { label: "Хочу написать книгу", target: "direction-book" },
  { label: "Нужно собрать курс, методичку или сайт", target: "direction-product" },
  { label: "Хочу учиться самостоятельно, в своём темпе", target: "self-guided" },
  { label: "Пока не знаю, что выбрать", target: "direction-structure" },
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

        <div className="relative mx-auto mt-10 max-w-2xl">
          <HandNote
            text="выберите любой"
            arrow="down-right"
            className="-left-4 -top-14 hidden -rotate-6 sm:-left-10 sm:block"
          />
          <div className="shadow-soft rounded-2xl border border-line bg-gradient-to-b from-paper-soft/70 to-paper-soft/30 p-6 text-center sm:p-8">
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
        </div>

        <div className="mt-16 space-y-16">
          {directions.map((direction) => (
            <div key={direction.id} id={`direction-${direction.id}`} className="scroll-mt-24">
              <ScrollReveal>
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
                    const hasDetails = Boolean(
                      service.included || service.format || service.note,
                    );

                    return (
                      <div
                        key={number}
                        id={`format-${number}`}
                        className="shadow-soft scroll-mt-28 rounded-2xl border border-line bg-paper-soft/40 p-5 sm:p-6"
                      >
                        <h4 className="font-display text-lg text-ink md:text-xl">
                          {service.title}
                        </h4>
                        <p className="mt-2 leading-relaxed text-ink-soft">
                          {service.forWhom}
                        </p>

                        {service.result && (
                          <div className="mt-4">
                            <p className="text-xs font-medium uppercase tracking-[0.15em] text-clay">
                              Результат
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                              {service.result}
                            </p>
                          </div>
                        )}

                        <div className="shadow-soft mt-5 rounded-2xl border border-line bg-paper p-5">
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
                              href={siteSettings.contactUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {service.ctaLabel}
                            </a>
                          </Button>
                        </div>

                        {hasDetails && (
                          <details className="group mt-4">
                            <summary className="flex cursor-pointer list-none items-center gap-1.5 text-sm text-clay transition-colors hover:text-ink marker:content-none">
                              Подробнее
                              <ChevronDown
                                aria-hidden="true"
                                className="h-4 w-4 shrink-0 transition-transform duration-300 group-open:rotate-180"
                              />
                            </summary>

                            <div className="mt-4">
                              {service.included && (
                                <ul className="space-y-2">
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

                              {service.format && (
                                <div className="mt-4">
                                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-clay">
                                    Формат
                                  </p>
                                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                                    {service.format}
                                  </p>
                                </div>
                              )}

                              {service.note && (
                                <p className="mt-4 border-l-2 border-clay/40 pl-4 text-sm italic leading-relaxed text-ink-soft">
                                  {service.note}
                                </p>
                              )}
                            </div>
                          </details>
                        )}
                      </div>
                    );
                  })}
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>

        <div id="self-guided" className="mt-16 scroll-mt-24 border-t border-line/70 pt-16">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl text-ink md:text-3xl">
              Материалы для самостоятельной работы
            </h3>
            <p className="mt-2 leading-relaxed text-ink-soft">
              Для тех, кто хочет учиться в своём темпе, без сопровождения.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {selfGuidedMaterials.map((material) => (
              <div
                key={material.id}
                className="shadow-soft flex flex-col rounded-2xl border border-line bg-paper-soft/40 p-5 sm:p-6"
              >
                <h4 className="font-display text-lg text-ink">{material.title}</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {material.description}
                </p>
                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="font-display text-lg text-clay">
                    {material.price}
                  </span>
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={siteSettings.contactUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {material.ctaLabel}
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
