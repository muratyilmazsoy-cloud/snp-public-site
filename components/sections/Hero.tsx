import type { ReactNode } from "react";

type HeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  actions?: ReactNode;
  visual?: ReactNode;
};

export function Hero({ eyebrow, title, subtitle, actions, visual }: HeroProps) {
  return (
    <section className="relative overflow-hidden border border-gray-2/30 bg-navy-2 px-6 py-12 md:px-12 md:py-20">
      <div className="relative z-10 grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.12em] text-gray-1">{eyebrow}</p>
          <h1 className="font-display text-5xl leading-[1.05] tracking-[-0.03em] md:text-7xl">{title}</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-1">{subtitle}</p>
          {actions ? <div className="flex flex-wrap items-center gap-4">{actions}</div> : null}
        </div>
        {visual ? <div className="justify-self-end">{visual}</div> : null}
      </div>
    </section>
  );
}
