import { authorPhoto } from "@/data/site-settings";
import { HandNote } from "@/components/site/hand-note";

export function Author() {
  return (
    <section
      id="author"
      className="relative scroll-mt-20 overflow-hidden border-t border-line/70 px-6 py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-sage/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-32 h-64 w-64 rounded-full bg-clay/10 blur-3xl"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="relative w-full max-w-[240px]">
          <HandNote
            text="это я"
            arrow="down-left"
            className="-right-2 -top-12 hidden -rotate-6 sm:-right-16 sm:block"
          />
          <div className="shadow-lift overflow-hidden rounded-2xl border border-line bg-paper-soft/60 aspect-[3/4]">
            {authorPhoto.available ? (
              <picture>
                <source srcSet={authorPhoto.avifSrc} type="image/avif" />
                <source srcSet={authorPhoto.webpSrc} type="image/webp" />
                <img
                  src={authorPhoto.jpgSrc}
                  alt={authorPhoto.alt}
                  width={authorPhoto.width}
                  height={authorPhoto.height}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </picture>
            ) : (
              <div
                aria-hidden="true"
                className="flex h-full w-full items-center justify-center"
              >
                <span className="font-display text-5xl italic text-clay/50">
                  ЕД
                </span>
              </div>
            )}
          </div>
        </div>

        <span className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-clay">
          Обо мне
        </span>
        <h2 className="mt-4 text-balance font-display text-3xl leading-tight text-ink md:text-4xl">
          Елена Данилова
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed text-ink-soft">
          Я — автор и ведущая «Смысловой мастерской». Работаю с теми, у кого
          есть опыт, идея или история, но пока не хватает формы, чтобы её
          показать: помогаю собрать это в книгу, курс, сайт, текст или ясное
          предложение.
        </p>
      </div>
    </section>
  );
}
