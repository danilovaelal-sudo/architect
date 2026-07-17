import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SquiggleUnderline } from "@/components/ui/squiggle-underline";
import { navLinks } from "@/data/navigation";

const MOBILE_MENU_ID = "mobile-nav";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
        );
        setActiveHref(`#${topMost.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur-sm"
    >
      <div
        className={`mx-auto flex max-w-5xl items-center justify-between px-6 transition-[padding] duration-300 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <a
          href="#top"
          className="font-display text-xl font-medium tracking-tight text-ink transition-colors hover:text-clay sm:text-2xl"
        >
          Смысловая мастерская
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-active={activeHref === link.href}
              aria-current={activeHref === link.href ? "true" : undefined}
              className={`group relative text-sm transition-colors hover:text-clay ${
                activeHref === link.href ? "text-clay" : "text-ink-soft"
              }`}
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
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={activeHref === link.href ? "true" : undefined}
                  className={`block py-3 text-base transition-colors hover:text-clay ${
                    activeHref === link.href ? "text-clay" : "text-ink-soft"
                  }`}
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
