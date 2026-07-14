import { Button } from "@/components/ui/button";
import { SquiggleUnderline } from "@/components/ui/squiggle-underline";

const links = [
  { href: "#about", label: "О мастерской" },
  { href: "#services", label: "Форматы" },
  { href: "#order", label: "Как заказать" },
];

export function Header() {
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
        <Button asChild size="sm">
          <a href="#order">Написать мне</a>
        </Button>
      </div>
    </header>
  );
}
