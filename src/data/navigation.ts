export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "#about", label: "О мастерской" },
  { href: "#services", label: "Форматы" },
  { href: "#how-it-works", label: "Как проходит работа" },
  { href: "#author", label: "Обо мне" },
  { href: "#order", label: "Связаться" },
];
