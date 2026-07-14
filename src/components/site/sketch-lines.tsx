export function SketchLines() {
  return (
    <>
      <svg
        aria-hidden
        viewBox="0 0 240 240"
        className="pointer-events-none absolute -left-6 bottom-4 hidden h-56 w-56 text-ink/25 md:block lg:h-64 lg:w-64"
      >
        <circle
          cx="60"
          cy="60"
          r="34"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          pathLength="100"
          className="sketch-line"
          style={{ "--i": 0 } as React.CSSProperties}
        />
        <line
          x1="60"
          y1="28"
          x2="60"
          y2="92"
          stroke="currentColor"
          strokeWidth="1.4"
          pathLength="100"
          className="sketch-line"
          style={{ "--i": 1 } as React.CSSProperties}
        />
        <line
          x1="28"
          y1="60"
          x2="92"
          y2="60"
          stroke="currentColor"
          strokeWidth="1.4"
          pathLength="100"
          className="sketch-line"
          style={{ "--i": 1 } as React.CSSProperties}
        />
        <path
          d="M94 60 C 140 60, 150 118, 198 128"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          pathLength="100"
          className="sketch-line"
          style={{ "--i": 2 } as React.CSSProperties}
        />
        <line
          x1="16"
          y1="188"
          x2="40"
          y2="188"
          stroke="currentColor"
          strokeWidth="1.4"
          pathLength="100"
          className="sketch-line"
          style={{ "--i": 4 } as React.CSSProperties}
        />
        <line
          x1="16"
          y1="198"
          x2="52"
          y2="198"
          stroke="currentColor"
          strokeWidth="1.4"
          pathLength="100"
          className="sketch-line"
          style={{ "--i": 4.4 } as React.CSSProperties}
        />
        <line
          x1="16"
          y1="208"
          x2="32"
          y2="208"
          stroke="currentColor"
          strokeWidth="1.4"
          pathLength="100"
          className="sketch-line"
          style={{ "--i": 4.8 } as React.CSSProperties}
        />
      </svg>

      <svg
        aria-hidden
        viewBox="0 0 280 280"
        className="pointer-events-none absolute -right-10 top-8 hidden h-64 w-64 text-clay/30 md:block lg:h-72 lg:w-72"
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
          className="sketch-line"
          style={{ "--i": 1 } as React.CSSProperties}
        />
        <path
          d="M180 90 C 212 100, 222 140, 232 152"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          pathLength="100"
          className="sketch-line"
          style={{ "--i": 2.4 } as React.CSSProperties}
        />
        <circle
          cx="232"
          cy="180"
          r="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          pathLength="100"
          className="sketch-line"
          style={{ "--i": 3 } as React.CSSProperties}
        />
        <line
          x1="40"
          y1="200"
          x2="58"
          y2="200"
          stroke="currentColor"
          strokeWidth="1.4"
          pathLength="100"
          className="sketch-line"
          style={{ "--i": 5 } as React.CSSProperties}
        />
        <line
          x1="49"
          y1="191"
          x2="49"
          y2="209"
          stroke="currentColor"
          strokeWidth="1.4"
          pathLength="100"
          className="sketch-line"
          style={{ "--i": 5 } as React.CSSProperties}
        />
      </svg>
    </>
  );
}
