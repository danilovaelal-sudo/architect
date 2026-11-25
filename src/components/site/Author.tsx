import { Button } from "@/components/ui/button";
import { authorPhoto, siteSettings } from "@/data/site-settings";

export function Author() {
  const { authorName, book } = siteSettings;

  return (
    <section id="author" className="scroll-mt-20 border-t border-line/70 px-6 py-16 md:py-20">
      <div className="mx-auto grid max-w-4xl items-start gap-8 md:grid-cols-[240px_1fr] md:gap-12">
        <picture className="shadow-lift block w-full max-w-56 overflow-hidden rounded-2xl border border-line bg-paper-soft md:max-w-none">
          <source srcSet={authorPhoto.avifSrc} type="image/avif" />
          <source srcSet={authorPhoto.webpSrc} type="image/webp" />
          <img
            src={authorPhoto.jpgSrc}
            alt={authorPhoto.alt}
            width={authorPhoto.width}
            height={authorPhoto.height}
            loading="lazy"
            className="h-auto w-full"
          />
        </picture>
        <div>
          <h2 className="font-display text-3xl text-ink md:text-4xl">Обо мне</h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Я {authorName}, книжный редактор и наставник. Свою первую книгу я
            написала о том, что хорошо знаю: о шестнадцати годах в монастыре и
            о жизни после него. Она вышла под моей прежней фамилией. Сейчас я
            помогаю другим людям писать о своём опыте. Иногда у человека уже есть
            десятки глав. Иногда он впервые рассказывает вслух то, о чём давно
            хотел написать. С обоих вариантов можно начать.
          </p>

          <div id="book" className="shadow-soft mt-6 scroll-mt-24 rounded-2xl border border-line bg-paper-soft/55 p-5 sm:p-6">
            <p className="text-sm text-clay">{book.author} · {book.year}</p>
            <h3 className="mt-2 font-display text-xl leading-tight text-ink">{book.title}</h3>
            <Button asChild variant="outline" className="mt-4 h-auto min-h-11 max-w-full whitespace-normal px-4 py-2 text-center">
              <a href={book.url} target="_blank" rel="noopener noreferrer">
                Посмотреть мою книгу на Литрес
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
