import { navLinks } from "@/data/navigation";
import { siteSettings } from "@/data/site-settings";
import { SquiggleUnderline } from "@/components/ui/squiggle-underline";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/70 px-6 py-12 text-sm text-ink-soft">
      <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg italic text-ink">
            Смысловая мастерская
          </p>
          <p className="mt-1">Елена Данилова</p>
          <p className="mt-4 max-w-xs leading-relaxed">
            Помогаю превращать опыт, идеи и внутренние переходы в книгу,
            курс, сайт, текст или ясное предложение.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-clay">
            Навигация
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative transition-colors hover:text-clay"
                >
                  {link.label}
                  <SquiggleUnderline className="text-clay" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-clay">
            Контакты
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href={siteSettings.contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative transition-colors hover:text-clay"
              >
                ВКонтакте
                <SquiggleUnderline className="text-clay" />
              </a>
            </li>
          </ul>

          {/*
            TODO (данные от Елены): политика обработки данных и
            пользовательское соглашение пока не подготовлены — как
            только появятся документы, заменить текст на ссылки.
          */}
          <p className="mt-6 text-xs text-ink-soft">
            Политика обработки данных · Пользовательское соглашение
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center justify-between gap-4 border-t border-line/70 pt-6 sm:flex-row">
        <p>© {year} Смысловая мастерская</p>
        <a href="#top" className="group relative transition-colors hover:text-clay">
          Наверх ↑
          <SquiggleUnderline className="text-clay" />
        </a>
      </div>
    </footer>
  );
}
