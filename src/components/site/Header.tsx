import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SquiggleUnderline } from "@/components/ui/squiggle-underline";

const links = [
  { href: "#about", label: "О мастерской" },
  { href: "#services", label: "Форматы" },
  { href: "#order", label: "Как заказать" },
];

const MOBILE_MENU_ID = "mobile-nav";

export function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur-sm"
    >
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
            aria-controls={MOBILE_MENU_ID}
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:text-clay md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id={MOBILE_MENU_ID}
          className="border-t border-line/70 bg-paper px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-ink-soft transition-colors hover:text-clay"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
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
