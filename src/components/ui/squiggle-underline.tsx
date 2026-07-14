import { cn } from "@/lib/utils";

export function SquiggleUnderline({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 8"
      preserveAspectRatio="none"
      className={cn(
        "pointer-events-none absolute -bottom-1 left-0 h-2 w-full overflow-visible",
        className,
      )}
    >
      <path
        d="M0 4 Q 6 0, 12.5 4 T 25 4 T 37.5 4 T 50 4 T 62.5 4 T 75 4 T 87.5 4 T 100 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        pathLength="100"
        className="squiggle-path"
      />
    </svg>
  );
}
