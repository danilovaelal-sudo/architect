import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const steps = [
  "Вы коротко описываете ситуацию.",
  "Елена задаёт уточняющие вопросы.",
  "Вы выбираете подходящий формат.",
  "Проходит консультация или работа над материалом.",
  "Вы получаете собранный результат и понимаете следующий шаг.",
];

export function HowItWorks() {
  const { ref, inView } = useInView<HTMLOListElement>({ threshold: 0.2 });

  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-t border-line/70 px-6 py-24"
    >
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-clay">
            Как проходит работа
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
            Пять простых шагов
          </h2>
        </div>

        <div className="relative mx-auto mt-12">
          <div
            aria-hidden="true"
            className="absolute left-5 top-5 bottom-5 w-px bg-line"
          />
          <div
            aria-hidden="true"
            className={cn(
              "absolute left-5 top-5 bottom-5 w-px origin-top scale-y-0 bg-clay transition-transform duration-[1200ms] ease-out",
              inView && "scale-y-100",
            )}
          />

          <ol ref={ref} className="space-y-8">
            {steps.map((step, index) => (
              <li key={step} className="flex items-start gap-5">
                <span
                  aria-hidden="true"
                  className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-paper font-display text-lg text-clay"
                >
                  {index + 1}
                </span>
                <p className="mt-1.5 leading-relaxed text-ink">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
