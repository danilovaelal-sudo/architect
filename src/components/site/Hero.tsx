import { Button } from "@/components/ui/button";
import { AssemblingLetters } from "@/components/site/animated-text";
import { HandNote } from "@/components/site/hand-note";
import { SquiggleUnderline } from "@/components/ui/squiggle-underline";

export function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-20 overflow-hidden px-6 pb-24 pt-20 md:pt-28"
    >
      <div
        aria-hidden
        className="ruled-grid pointer-events-none absolute inset-0 -z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-clay/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-sage/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <span className="font-display text-sm italic tracking-wide text-clay">
          Елена Данилова
        </span>

        <h1
          aria-label="Найти живую суть и дать ей форму"
          className="mt-6 text-balance font-display text-6xl leading-[1.02] tracking-tight text-ink sm:text-7xl md:text-8xl"
        >
          <span aria-hidden="true">
            <AssemblingLetters text="Найти живую суть" />{" "}
            <span className="italic text-clay">
              <AssemblingLetters text="и дать ей форму" startIndex={14} />
            </span>
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-balance text-lg leading-relaxed text-ink-soft">
          Помогаю экспертам и авторам превратить опыт, идеи и внутренние
          переходы в книгу, курс, сайт, текст или ясное предложение.
        </p>

        <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <HandNote
            text="начните здесь"
            arrow="down-right"
            className="-left-6 -top-14 hidden -rotate-6 sm:-left-10 sm:block"
          />
          <Button asChild size="default">
            <a href="#services">Подобрать формат работы</a>
          </Button>
          <a
            href="#about"
            className="group relative text-sm text-ink-soft transition-colors hover:text-clay"
          >
            О мастерской
            <SquiggleUnderline className="text-clay" />
          </a>
        </div>

        <p className="mx-auto mt-6 max-w-md text-balance text-sm text-ink-soft">
          Можно прийти без готового технического задания — достаточно
          описать, что сейчас не складывается.
        </p>
      </div>
    </section>
  );
}
