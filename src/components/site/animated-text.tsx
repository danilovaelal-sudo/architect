import { Fragment } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const SCATTER_LETTERS = [
  { tx: "-70px", ty: "-46px", rot: "-22deg" },
  { tx: "84px", ty: "-34px", rot: "16deg" },
  { tx: "-58px", ty: "52px", rot: "24deg" },
  { tx: "66px", ty: "48px", rot: "-19deg" },
  { tx: "-96px", ty: "8px", rot: "11deg" },
  { tx: "96px", ty: "-6px", rot: "-14deg" },
  { tx: "6px", ty: "-78px", rot: "9deg" },
  { tx: "-4px", ty: "76px", rot: "-10deg" },
  { tx: "-44px", ty: "-64px", rot: "17deg" },
  { tx: "54px", ty: "64px", rot: "-23deg" },
  { tx: "78px", ty: "-58px", rot: "20deg" },
  { tx: "-82px", ty: "44px", rot: "-15deg" },
];

interface AssemblingLettersProps {
  text: string;
  startIndex?: number;
}

export function AssemblingLetters({ text, startIndex = 0 }: AssemblingLettersProps) {
  const words = text.split(" ");
  let runningIndex = startIndex;

  return (
    <>
      {words.map((word, wi) => {
        const wordStart = runningIndex;
        runningIndex += word.length;

        return (
          <Fragment key={wi}>
            <span className="inline-block whitespace-nowrap">
              {word.split("").map((letter, li) => {
                const i = wordStart + li;
                const seed = SCATTER_LETTERS[i % SCATTER_LETTERS.length];
                return (
                  <span
                    key={li}
                    className="letter-settle inline-block"
                    style={
                      {
                        "--i": i,
                        "--tx": seed.tx,
                        "--ty": seed.ty,
                        "--rot": seed.rot,
                      } as React.CSSProperties
                    }
                  >
                    {letter}
                  </span>
                );
              })}
            </span>
            {wi < words.length - 1 ? " " : ""}
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
