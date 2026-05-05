import { useEffect, useRef, useState } from "react";
import dogBefore from "@/assets/hero-dog.jpg";
import dogAfter from "@/assets/hero-dog-trimmed.jpg";

/**
 * Scroll-driven hero: cuando el usuario hace scroll, el perrito "se pela"
 * (cambia de la versión peluda a la recién cortada) con una animación suave.
 */
export function HeroDog() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const total = rect.height + window.innerHeight;
      const seen = window.innerHeight - rect.top;
      const p = Math.max(0, Math.min(1, seen / total));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tilt = (progress - 0.3) * 12;
  const scale = 1 + progress * 0.05;
  const afterOpacity = Math.max(0, Math.min(1, (progress - 0.15) * 2));

  return (
    <div ref={ref} className="relative aspect-square w-full max-w-[520px] mx-auto">
      {/* Glow blob */}
      <div className="absolute inset-0 rounded-full bg-gradient-primary blur-3xl opacity-30 animate-float" />
      <div
        className="relative aspect-square w-full rounded-[2.5rem] overflow-hidden shadow-glow animate-float"
        style={{ transform: `rotate(${tilt}deg) scale(${scale})`, transition: "transform 0.4s ease-out" }}
      >
        <img
          src={dogBefore}
          alt="Perrito antes del corte"
          width={1024}
          height={1024}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src={dogAfter}
          alt="Perrito recién cortado por nuestro estilista"
          width={1024}
          height={1024}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: afterOpacity, transition: "opacity 0.5s ease-out" }}
        />
        {/* Floating chips */}
        <div className="absolute top-5 left-5 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-semibold shadow-soft">
          ✨ Antes
        </div>
        <div
          className="absolute bottom-5 right-5 rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold shadow-soft"
          style={{ opacity: afterOpacity }}
        >
          💇 Después
        </div>
      </div>
      {/* Scissors floating */}
      <div className="absolute -top-4 -right-2 text-4xl animate-wag select-none">✂️</div>
      <div className="absolute -bottom-2 -left-4 text-3xl animate-float select-none">🦴</div>
    </div>
  );
}
