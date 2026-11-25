import { Button } from "@/components/ui/button";
import { formatPrice, workFormats } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-t border-line/70 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-3xl text-ink md:text-4xl">
          Форматы работы
        </h2>

        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {workFormats.map((format) => (
            <li
              key={format.id}
              id={format.id}
              className="shadow-soft flex scroll-mt-24 flex-col rounded-2xl border border-line bg-paper-soft/40 p-6 sm:p-7"
            >
              <h3 className="font-display text-2xl leading-tight text-ink">{format.title}</h3>
              <p className="mt-3 font-display text-xl text-clay">{formatPrice(format)}</p>
              <p className="mt-4 leading-relaxed text-ink-soft">{format.description}</p>
              <dl className="mt-5 space-y-3 border-t border-line pt-4 text-sm leading-relaxed text-ink-soft">
                <div>
                  <dt className="font-semibold text-ink">Кто пишет</dt>
                  <dd>{format.writer}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">Что получите</dt>
                  <dd>{format.result}</dd>
                </div>
              </dl>
              <div className="mt-auto pt-6">
                <Button asChild variant={format.startsAt ? "primary" : "outline"} className="h-auto min-h-11 max-w-full whitespace-normal px-4 py-2 text-center">
                  <a href="#order">{format.ctaLabel}</a>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
