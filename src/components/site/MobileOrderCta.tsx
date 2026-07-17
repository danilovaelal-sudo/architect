import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { siteSettings } from "@/data/site-settings";

export function MobileOrderCta() {
  const [orderInView, setOrderInView] = useState(false);

  useEffect(() => {
    const target = document.getElementById("order");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setOrderInView(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-line/70 bg-paper/95 p-4 backdrop-blur-sm transition-transform duration-300 md:hidden ${
        orderInView ? "translate-y-full" : "translate-y-0"
      }`}
      style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <Button asChild size="default" className="w-full">
        <a href={`${siteSettings.contactUrl}?text=${encodeURIComponent("Хочу в Смысловую мастерскую.")}`} target="_blank" rel="noopener noreferrer">
          Обсудить задачу
        </a>
      </Button>
    </div>
  );
}
