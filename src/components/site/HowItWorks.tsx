const steps = [
  "Вы коротко описываете ситуацию.",
  "Елена задаёт уточняющие вопросы.",
  "Вы выбираете подходящий формат.",
  "Проходит консультация или работа над материалом.",
  "Вы получаете собранный результат и понимаете следующий шаг.",
];

export function HowItWorks() {
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

        <ol className="mx-auto mt-12 space-y-8">
          {steps.map((step, index) => (
            <li key={step} className="flex items-start gap-5">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line font-display text-lg text-clay"
              >
                {index + 1}
              </span>
              <p className="mt-1.5 leading-relaxed text-ink">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
