import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { KineticReveal } from "@/components/site/animated-text";
import { HandNote } from "@/components/site/hand-note";
import { siteSettings } from "@/data/site-settings";

const topics = [
  "книга",
  "курс",
  "сайт",
  "тексты",
  "личная история",
  "консультация",
  "пока не знаю",
];

const BASE_MESSAGE = "Хочу в Смысловую мастерскую.";

export function HowToOrder() {
  const [topic, setTopic] = useState<string | null>(null);
  const groupName = useId();

  const message = topic ? `${BASE_MESSAGE} Тема: ${topic}.` : BASE_MESSAGE;
  const encodedMessage = encodeURIComponent(message);
  const vkHref = `${siteSettings.contactUrl}?text=${encodedMessage}`;
  const telegramHref = `${siteSettings.telegramUrl}?text=${encodedMessage}`;

  return (
    <section
      id="order"
      className="relative scroll-mt-20 overflow-hidden border-t border-line/70 px-6 py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full bg-clay/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-10 h-64 w-64 rounded-full bg-sage/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-clay">
            Как заказать
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
            Расскажите, что пока не складывается
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-ink-soft">
            Необязательно заранее понимать, какая услуга вам нужна. Опишите
            ситуацию — я задам несколько вопросов и предложу подходящий
            формат.
          </p>
        </div>

        <Card className="mt-12 text-center">
          <p className="font-display text-xl italic text-ink">
            «Хочу в Смысловую мастерскую»
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            Напишите эту фразу в сообщения — и, если хотите, отметьте тему,
            с которой сейчас приходите:
          </p>

          <fieldset className="mx-auto mt-6 max-w-lg">
            <legend className="sr-only">Тема обращения</legend>
            <ul className="flex flex-wrap justify-center gap-2">
              {topics.map((item) => (
                <li key={item}>
                  <label
                    className="flex min-h-11 cursor-pointer items-center rounded-full border border-line px-4 text-sm text-ink-soft transition-colors has-checked:border-clay has-checked:text-clay"
                  >
                    <input
                      type="radio"
                      name={groupName}
                      value={item}
                      checked={topic === item}
                      onChange={() => setTopic(item)}
                      className="sr-only"
                    />
                    {item}
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>

          <p className="mt-8 text-sm leading-relaxed text-ink-soft">
            Я задам несколько вопросов и предложу подходящий формат.
            Отвечаю {siteSettings.responseTime}.
          </p>

          <div className="relative mt-16 inline-flex flex-col items-center gap-3 sm:flex-row">
            <HandNote
              text="это просто :)"
              arrow="down-left"
              className="-right-8 -top-16 hidden rotate-6 sm:-right-14 sm:block"
            />
            <Button asChild size="default">
              <a href={vkHref} target="_blank" rel="noopener noreferrer">
                Написать во ВКонтакте
              </a>
            </Button>
            <Button asChild variant="outline" size="default">
              <a href={telegramHref} target="_blank" rel="noopener noreferrer">
                Написать в Telegram
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
