const steps = [
  "Вы пишете, что хотите сделать, и показываете пример материала, если он уже есть.",
  "Мы обсуждаем, с чего лучше начать: с замысла, плана, пробного фрагмента или уже написанной главы.",
  "До старта договариваемся, кто пишет, какие материалы будут готовы на первом этапе, сколько это займёт и сколько стоит.",
  "Дальше работаем по главам или по этапам. Уже сделанное не переделываем без причины.",
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 border-t border-line/70 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-center font-display text-3xl text-ink md:text-4xl">
          Как начинается работа
        </h2>
        <ol className="relative mt-8 space-y-5 before:absolute before:bottom-6 before:left-5 before:top-5 before:w-px before:bg-line">
          {steps.map((step, index) => (
            <li key={step} className="relative flex items-start gap-4">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-paper font-display text-lg text-clay"
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
