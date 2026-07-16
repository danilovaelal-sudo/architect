import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { KineticReveal } from "@/components/site/animated-text";
import { HandNote } from "@/components/site/hand-note";

const topics = [
  "книга",
  "текст",
  "курс",
  "сайт",
  "личная история",
  "консультация",
  "запуск",
  "непонятно, но что-то точно пора собирать",
];

export function HowToOrder() {
  return (
    <section id="order" className="scroll-mt-20 border-t border-line/70 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-clay">
            Как заказать
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
            Напишите мне и коротко расскажите, с чем вы приходите
          </h2>
        </div>

        <Card className="mt-12 text-center">
          <p className="font-display text-xl italic text-ink">
            «Хочу в Смысловую мастерскую»
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Напишите эту фразу в сообщения — и коротко расскажите, с чем вы
            сейчас приходите:
          </p>

          <ul className="mx-auto mt-6 flex max-w-lg flex-wrap justify-center gap-2">
            {topics.map((topic) => (
              <li
                key={topic}
                className="rounded-full border border-line px-4 py-1.5 text-sm text-ink-soft"
              >
                {topic}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm leading-relaxed text-ink-soft">
            Я задам несколько вопросов и предложу подходящий формат.
          </p>

          <div className="relative mt-16 inline-block">
            <HandNote
              text="это просто :)"
              arrow="down-left"
              className="-right-8 -top-16 hidden rotate-6 sm:-right-14 sm:block"
            />
            <Button asChild size="default">
              <a
                href="https://vk.me/danilovaelal"
                target="_blank"
                rel="noopener noreferrer"
              >
                Написать мне
              </a>
            </Button>
          </div>
        </Card>

        <div className="mt-16 space-y-2 text-center font-display text-xl italic leading-relaxed text-ink-soft">
          <p>
            <KineticReveal text="Здесь можно приходить не только с готовым проектом." />
          </p>
          <p>
            <KineticReveal text="Можно приходить с непониманием. С черновиками." />
          </p>
          <p>
            <KineticReveal text="С «я не знаю, что я хочу сказать»." />
          </p>
          <p className="pt-4 text-ink">
            <KineticReveal text="Не придумать красивую упаковку поверх пустоты —" />
            <br />
            <KineticReveal text="а найти живую суть и дать ей форму." />
          </p>
        </div>
      </div>
    </section>
  );
}
