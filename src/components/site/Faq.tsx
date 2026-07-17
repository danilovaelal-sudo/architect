import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-line/70 px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-clay">
            Вопросы
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
            Частые вопросы
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group shadow-soft rounded-2xl border border-line bg-paper-soft/40 transition-shadow duration-300 open:bg-paper-soft/60 open:shadow-lift"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 transition-transform duration-200 marker:content-none hover:-translate-y-0.5">
                <span className="font-display text-lg text-ink">
                  {item.question}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-ink-soft transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <p className="px-5 pb-6 leading-relaxed text-ink-soft">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
