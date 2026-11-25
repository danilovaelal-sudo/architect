import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function MobileOrderCta() {
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    const visibleSections = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.intersectionRatio >= 0.1) {
            visibleSections.add(entry.target);
          } else {
            visibleSections.delete(entry.target);
          }
        }
        setShowCta(visibleSections.size === 0);
      },
      { threshold: 0.1 },
    );

    for (const sectionId of ["top", "order"]) {
      const section = document.getElementById(sectionId);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  if (!showCta) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 border-t border-line/70 bg-paper/95 p-3 backdrop-blur-sm lg:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <Button asChild className="w-full">
        <a href="#order">Обсудить книгу</a>
      </Button>
    </div>
  );
}
