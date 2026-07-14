import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SquiggleUnderline } from "@/components/ui/squiggle-underline";

const links = [
  { href: "#about", label: "О мастерской" },
  { href: "#services", label: "Форматы" },
  { href: "#order", label: "Как заказать" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-xl font-medium tracking-tight text-ink transition-colors hover:text-clay sm:text-2xl"
        >
          Смысловая мастерская
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm text-ink-soft transition-colors hover:text-clay"
            >
              {link.label}
              <SquiggleUnderline className="text-clay" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="#order">Написать мне</a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:text-clay md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line/70 bg-paper px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base text-ink-soft transition-colors hover:text-clay"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button
                asChild
                size="sm"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                <a href="#order">Написать мне</a>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
