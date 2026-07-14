import { cn } from "@/lib/utils";

interface HandNoteProps {
  text: string;
  className?: string;
  arrow?: "down-left" | "down-right";
}

export function HandNote({ text, className, arrow }: HandNoteProps) {
  return (
    <span className={cn("pointer-events-none absolute select-none text-clay", className)}>
      <span className="hand-note block text-2xl">{text}</span>
      {arrow === "down-left" && (
        <svg
          viewBox="0 0 60 50"
          className="h-10 w-12 -scale-x-100 text-clay"
          aria-hidden
        >
          <path
            d="M4 4 C 4 30, 20 40, 50 42"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M38 34 L 51 43 L 40 47"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {arrow === "down-right" && (
        <svg viewBox="0 0 60 50" className="h-10 w-12 text-clay" aria-hidden>
          <path
            d="M4 4 C 4 30, 20 40, 50 42"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M38 34 L 51 43 L 40 47"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </span>
  );
}
