import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

type Variant = "circle-cross" | "frame-circle" | "corner-tick";

interface SketchMotifProps {
  variant: Variant;
  className?: string;
  immediate?: boolean;
}

export function SketchMotif({
  variant,
  className,
  immediate = false,
}: SketchMotifProps) {
  const { ref, inView } = useInView<SVGSVGElement>({ threshold: 0.2 });
  const active = immediate || inView;
  const line = cn("sketch-path", active && "sketch-line");
  const style = (i: number) => ({ "--i": i }) as React.CSSProperties;

  if (variant === "frame-circle") {
    return (
      <svg
        ref={ref}
        aria-hidden
        viewBox="0 0 280 280"
        className={className}
      >
        <rect
          x="30"
          y="36"
          width="150"
          height="100"
          rx="6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          pathLength="100"
          className={line}
          style={style(1)}
        />
        <path
          d="M180 90 C 212 100, 222 140, 232 152"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          pathLength="100"
          className={line}
          style={style(2.4)}
        />
        <circle
          cx="232"
          cy="180"
          r="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          pathLength="100"
          className={line}
          style={style(3)}
        />
        <line
          x1="40"
          y1="200"
          x2="58"
          y2="200"
          stroke="currentColor"
          strokeWidth="1.4"
          pathLength="100"
          className={line}
          style={style(5)}
        />
        <line
          x1="49"
          y1="191"
          x2="49"
          y2="209"
          stroke="currentColor"
          strokeWidth="1.4"
          pathLength="100"
          className={line}
          style={style(5)}
        />
      </svg>
    );
  }

  if (variant === "corner-tick") {
    return (
      <svg
        ref={ref}
        aria-hidden
        viewBox="0 0 100 100"
        className={className}
      >
        <line
          x1="10"
          y1="10"
          x2="10"
          y2="34"
          stroke="currentColor"
          strokeWidth="1.6"
          pathLength="100"
          className={line}
          style={style(0)}
        />
        <line
          x1="10"
          y1="10"
          x2="34"
          y2="10"
          stroke="currentColor"
          strokeWidth="1.6"
          pathLength="100"
          className={line}
          style={style(0.4)}
        />
        <line
          x1="50"
          y1="62"
          x2="64"
          y2="76"
          stroke="currentColor"
          strokeWidth="1.6"
          pathLength="100"
          className={line}
          style={style(1.2)}
        />
      </svg>
    );
  }

  return (
    <svg ref={ref} aria-hidden viewBox="0 0 240 240" className={className}>
      <circle
        cx="60"
        cy="60"
        r="34"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        pathLength="100"
        className={line}
        style={style(0)}
      />
      <line
        x1="60"
        y1="28"
        x2="60"
        y2="92"
        stroke="currentColor"
        strokeWidth="1.4"
        pathLength="100"
        className={line}
        style={style(1)}
      />
      <line
        x1="28"
        y1="60"
        x2="92"
        y2="60"
        stroke="currentColor"
        strokeWidth="1.4"
        pathLength="100"
        className={line}
        style={style(1)}
      />
      <path
        d="M94 60 C 140 60, 150 118, 198 128"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        pathLength="100"
        className={line}
        style={style(2)}
      />
      <line
        x1="16"
        y1="188"
        x2="40"
        y2="188"
        stroke="currentColor"
        strokeWidth="1.4"
        pathLength="100"
        className={line}
        style={style(4)}
      />
      <line
        x1="16"
        y1="198"
        x2="52"
        y2="198"
        stroke="currentColor"
        strokeWidth="1.4"
        pathLength="100"
        className={line}
        style={style(4.4)}
      />
      <line
        x1="16"
        y1="208"
        x2="32"
        y2="208"
        stroke="currentColor"
        strokeWidth="1.4"
        pathLength="100"
        className={line}
        style={style(4.8)}
      />
    </svg>
  );
}

export function HeroSketchLines() {
  return (
    <>
      <SketchMotif
        variant="circle-cross"
        immediate
        className="pointer-events-none absolute left-2 top-2 h-20 w-20 text-ink/20 sm:h-28 sm:w-28 md:left-4 md:h-48 md:w-48 lg:h-56 lg:w-56"
      />
      <SketchMotif
        variant="frame-circle"
        immediate
        className="pointer-events-none absolute right-2 top-2 h-24 w-24 text-clay/25 sm:h-32 sm:w-32 md:right-6 md:h-52 md:w-52 lg:h-60 lg:w-60"
      />
    </>
  );
}
