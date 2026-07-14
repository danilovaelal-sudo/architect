import { SketchMotif } from "@/components/site/sketch-lines";

const recognitions = [
  "Есть история, но нет структуры.",
  "Есть опыт, но непонятно, как сделать из него курс.",
  "Есть услуга, но трудно объяснить её словами.",
  "Есть желание написать книгу, но в голове каша.",
  "Есть переход в жизни, но непонятно, на что теперь опереться.",
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-line/70 px-6 py-24"
    >
      <SketchMotif
        variant="corner-tick"
        className="pointer-events-none absolute right-4 top-4 h-16 w-16 text-clay/30 md:right-10 md:top-10 md:h-20 md:w-20"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-clay">
          О мастерской
        </span>
        <h2 className="mt-4 text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
          «У меня много всего внутри, но я не понимаю, как это собрать»
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-ink-soft">
          Очень часто человек приходит не с готовой идеей, а с этим
          ощущением. С этим я и работаю — узнаёте себя в чём-то из списка?
        </p>
      </div>

      <ul className="mx-auto mt-14 max-w-2xl space-y-5">
        {recognitions.map((line) => (
          <li
            key={line}
            className="flex gap-4 border-b border-line/70 pb-5 font-display text-xl leading-snug text-ink last:border-none"
          >
            <span className="text-clay">—</span>
            {line}
          </li>
        ))}
      </ul>
    </section>
  );
}
