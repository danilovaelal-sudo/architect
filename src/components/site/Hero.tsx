import { AssemblingLetters } from "@/components/site/animated-text";
import { Button } from "@/components/ui/button";
import { siteSettings } from "@/data/site-settings";

const headingLead = "Хотите написать книгу,";
const headingEnd = "но не знаете, с чего начать?";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate scroll-mt-20 overflow-hidden px-6 pb-20 pt-16 md:pb-24 md:pt-24"
    >
      <div aria-hidden="true" className="ruled-grid pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-24 -z-10 h-96 w-96 rounded-full bg-clay/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-40 -z-10 h-72 w-72 rounded-full bg-sage/10 blur-3xl" />

      <div className="mx-auto max-w-4xl text-center">
        <p className="font-display text-base italic text-clay">
          {siteSettings.authorName} · книжный редактор и наставник
        </p>
        <h1
          aria-label={`${headingLead} ${headingEnd}`}
          className="mt-5 text-balance font-display text-4xl leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-7xl"
        >
          <span aria-hidden="true">
            <AssemblingLetters text={headingLead} />{" "}
            <em className="text-clay">
              <AssemblingLetters
                text={headingEnd}
                startIndex={headingLead.replaceAll(" ", "").length}
              />
            </em>
          </span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
          Можно прийти с идеей, голосовыми, папкой заметок или готовыми главами.
          Я помогу понять, о чём будет ваша книга, и собрать её по главам.
          Вы можете писать сами с моей редактурой или рассказать мне свою историю,
          а я напишу по вашим материалам.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild>
            <a href="#order">Обсудить книгу</a>
          </Button>
          <Button asChild variant="outline">
            <a href="#services">Посмотреть форматы</a>
          </Button>
        </div>
        <p className="mx-auto mt-5 max-w-md text-pretty text-sm leading-relaxed text-ink-soft">
          Необязательно готовить заявку. Расскажите, что у вас уже есть и где вы остановились.
        </p>
      </div>
    </section>
  );
}
