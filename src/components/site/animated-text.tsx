import { Fragment } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const SCATTER = [
  { tx: "-18px", ty: "-14px", rot: "-8deg" },
  { tx: "14px", ty: "10px", rot: "6deg" },
  { tx: "-10px", ty: "16px", rot: "10deg" },
  { tx: "16px", ty: "-12px", rot: "-6deg" },
  { tx: "-14px", ty: "8px", rot: "5deg" },
  { tx: "10px", ty: "-16px", rot: "-9deg" },
  { tx: "-8px", ty: "-10px", rot: "7deg" },
];

interface AssemblingWordsProps {
  text: string;
  startIndex?: number;
}

export function AssemblingWords({ text, startIndex = 0 }: AssemblingWordsProps) {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, i) => {
        const seed = SCATTER[(startIndex + i) % SCATTER.length];
        return (
          <Fragment key={i}>
            <span
              className="word-settle inline-block"
              style={
                {
                  "--i": startIndex + i,
                  "--tx": seed.tx,
                  "--ty": seed.ty,
                  "--rot": seed.rot,
                } as React.CSSProperties
              }
            >
              {word}
            </span>
            {i < words.length - 1 ? " " : ""}
          </Fragment>
        );
      })}
    </>
  );
}

interface KineticRevealProps {
  text: string;
  className?: string;
}

export function KineticReveal({ text, className }: KineticRevealProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const words = text.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span
            className={cn("kinetic-word", inView && "kinetic-word-in")}
            style={{ "--i": i } as React.CSSProperties}
          >
            {word}
          </span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </span>
  );
}
