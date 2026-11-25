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
          <p className="mt-1">{siteSettings.authorName}</p>
          <p className="mt-4 max-w-xs leading-relaxed">
            Написание и редактура книг
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
            <li>
              <a
                href={siteSettings.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative transition-colors hover:text-clay"
              >
                Телеграм
                <SquiggleUnderline className="text-clay" />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteSettings.email}`}
                className="group relative transition-colors hover:text-clay"
              >
                {siteSettings.email}
                <SquiggleUnderline className="text-clay" />
              </a>
            </li>
          </ul>

        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center justify-between gap-4 border-t border-line/70 pt-6 sm:flex-row">
        <p>© {year} Смысловая мастерская</p>
        <a href="#top" className="group relative transition-colors hover:text-clay">
          Наверх
          <SquiggleUnderline className="text-clay" />
        </a>
      </div>
    </footer>
  );
}
