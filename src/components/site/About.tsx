import { HandNote } from "@/components/site/hand-note";
import { KineticReveal } from "@/components/site/animated-text";
import { ScrollReveal } from "@/components/site/scroll-reveal";

const recognitions = [
  "Есть история, но нет структуры.",
  "Есть опыт, но непонятно, как сделать из него курс.",
  "Есть услуга, но трудно объяснить её словами.",
  "Есть желание написать книгу, но в голове каша.",
  "Есть новый замысел, но пока непонятно, во что его превратить.",
];

const outcomes = [
  "ясную формулировку идеи",
  "структуру проекта",
  "понимание следующего шага",
  "текст, план или концепцию",
  "материалы, к которым можно вернуться после работы",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-line/70 px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-clay">
          О мастерской
        </span>
        <h2 className="mt-4 text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
          <KineticReveal text="«У меня много всего внутри, но я не понимаю, как это собрать»" />
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-ink-soft">
          Очень часто человек приходит не с готовой идеей, а с этим
          ощущением. Возможно, что-то из этого похоже на вашу ситуацию.
        </p>
      </div>

      <ul className="mx-auto mt-10 grid max-w-2xl gap-x-8 gap-y-3 sm:grid-cols-2">
        {recognitions.map((line) => (
          <li
            key={line}
            className="flex gap-3 text-base leading-snug text-ink"
          >
            <span aria-hidden="true" className="text-clay">
              —
            </span>
            {line}
          </li>
        ))}
      </ul>

      <div className="mx-auto mt-16 max-w-xl border-t border-line/70 pt-12 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-clay">
          Как я работаю
        </span>
        <p className="mt-4 leading-relaxed text-ink-soft">
          Сначала — разговор: я задаю вопросы, чтобы понять, чего не
          хватает материалу — ясной идеи, структуры, отбора или
          формулировок. Дальше мы вместе собираем это в понятную форму —
          план, текст, структуру или концепцию, с которой можно двигаться
          дальше.
        </p>
      </div>

      <div className="relative mx-auto mt-12 max-w-xl">
        <HandNote
          text="это уже кое-что :)"
          arrow="down-left"
          className="-right-4 -top-14 hidden rotate-6 sm:-right-10 sm:block"
        />
        <div className="shadow-soft rounded-2xl border border-line bg-gradient-to-b from-paper-soft/70 to-paper-soft/30 p-8">
          <h3 className="text-center font-display text-xl text-ink">
            Что вы получите
          </h3>
          <ul className="mx-auto mt-6 grid max-w-md gap-3 sm:grid-cols-2">
            {outcomes.map((item, i) => (
              <li key={item}>
                <ScrollReveal
                  delay={i * 60}
                  className="flex gap-3 text-sm text-ink-soft"
                >
                  <span aria-hidden="true" className="text-clay">
                    —
                  </span>
                  {item}
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
