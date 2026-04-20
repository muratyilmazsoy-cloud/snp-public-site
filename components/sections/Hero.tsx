import type { ReactNode } from "react";
import { AnimatedHeadline } from "@/components/motion/AnimatedHeadline";

type HeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  actions?: ReactNode;
  visual?: ReactNode;
  animatedTitle?: boolean;
  showScrollIndicator?: boolean;
};

export function Hero({ eyebrow, title, subtitle, actions, visual, animatedTitle = false, showScrollIndicator = false }: HeroProps) {
  return (
    <section className="relative overflow-hidden border border-gray-2/30 bg-navy-2 px-6 py-12 md:px-12 md:py-20">
      <div className="relative z-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
        <div className="space-y-6">
          <p className="eyebrow text-gray-1">{eyebrow}</p>
          <h1>{animatedTitle ? <AnimatedHeadline text={title} /> : title}</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-1">{subtitle}</p>
          {actions ? <div className="flex flex-wrap items-center gap-4">{actions}</div> : null}
        </div>
        {visual ? <div className="justify-self-end">{visual}</div> : null}
      </div>
      {showScrollIndicator ? (
        <div className="scroll-indicator pointer-events-none absolute bottom-4 left-1/2 z-20 -translate-x-1/2 text-center transition-opacity duration-300">
          <span className="mx-auto block h-2 w-2 animate-pulse rounded-full bg-cyan" />
          <span className="mt-2 block text-xs uppercase tracking-[0.12em] text-gray-1">Scroll</span>
        </div>
      ) : null}
    </section>
  );
}
