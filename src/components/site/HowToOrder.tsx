import { Button } from "@/components/ui/button";
import { siteSettings } from "@/data/site-settings";

export function HowToOrder() {
  return (
    <section
      id="order"
      className="scroll-mt-20 border-t border-line/70 bg-paper-soft/55 px-6 py-16 md:py-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance font-display text-3xl text-ink md:text-4xl">
          Расскажите, какую книгу вы хотите написать
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-ink-soft">
          Можно так и начать: «Здравствуйте, Елена. Я давно думаю о книге. У меня пока есть…»
          Я задам несколько вопросов и предложу, с какого шага начать.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button asChild>
            <a href={siteSettings.telegramUrl} target="_blank" rel="noopener noreferrer">
              Написать мне в Telegram
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={siteSettings.contactUrl} target="_blank" rel="noopener noreferrer">
              Написать во ВКонтакте
            </a>
          </Button>
        </div>

        <p className="mx-auto mt-5 max-w-md text-pretty text-sm leading-relaxed text-ink-soft">
          Если у вас уже есть рукопись или вы хотите собрать курс, расскажите об этом в первом сообщении.
        </p>
      </div>
    </section>
  );
}
