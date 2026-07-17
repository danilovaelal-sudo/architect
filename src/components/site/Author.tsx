import { authorPhoto } from "@/data/site-settings";

export function Author() {
  return (
    <section id="author" className="scroll-mt-20 border-t border-line/70 px-6 py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="w-full max-w-[240px] overflow-hidden rounded-3xl border border-line bg-paper-soft/60 aspect-[3/4]">
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
