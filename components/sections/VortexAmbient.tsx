"use client";

import { useEffect, useMemo, useState } from "react";

type VortexMode = "home" | "operasyon" | "manifesto" | "karma";

function makeSpiralPath(points: number, turns: number, scale: number) {
  const maxT = turns * Math.PI * 2;
  const coords: string[] = [];
  for (let i = 0; i < points; i += 1) {
    const t = (i / (points - 1)) * maxT;
    const r = scale * t;
    const x = 600 + r * Math.cos(t);
    const y = 600 + r * Math.sin(t);
    coords.push(`${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  return coords.join(" ");
}

function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

export function VortexAmbient({ mode = "home" }: { mode?: VortexMode }) {
  const [parallaxY, setParallaxY] = useState({ deep: 0, mid: 0, fore: 0 });
  const [burstTick, setBurstTick] = useState(0);

  const stars = useMemo(() => {
    const rand = seededRandom(417);
    return Array.from({ length: mode === "manifesto" ? 95 : 115 }).map((_, i) => {
      const t = rand() * Math.PI * 2 * 10;
      const radius = Math.pow(rand(), 0.52) * 520;
      const x = 600 + radius * Math.cos(t);
      const y = 600 + radius * Math.sin(t);
      return { id: i, x, y, r: 0.4 + rand() * 1.3, o: 0.1 + rand() * 0.2 };
    });
  }, [mode]);

  const particles = useMemo(() => {
    if (mode === "manifesto") return [];
    const rand = seededRandom(921);
    return Array.from({ length: 40 }).map((_, i) => {
      const t = 1.8 + rand() * Math.PI * 2 * 5;
      const radius = 10.5 * t;
      const x = 600 + radius * Math.cos(t);
      const y = 600 + radius * Math.sin(t);
      return { id: i, x, y, r: 0.8 + rand() * 1.6, o: 0.45 + rand() * 0.35, delay: rand() * 4 };
    });
  }, [mode]);

  const spiral = useMemo(() => makeSpiralPath(560, mode === "manifesto" ? 5.5 : 7, 10.5), [mode]);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        setParallaxY({ deep: -(y * 0.4), mid: -(y * 0.55), fore: -(y * 0.7) });
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    let active = true;
    let timeout: ReturnType<typeof setTimeout>;
    const schedule = () => {
      const next = 20000 + Math.random() * 10000;
      timeout = setTimeout(() => {
        if (!active) return;
        setBurstTick((v) => v + 1);
        schedule();
      }, next);
    };
    schedule();
    return () => {
      active = false;
      clearTimeout(timeout);
    };
  }, []);

  const modeClass = `living-vortex-${mode}`;

  return (
    <div className={`living-vortex-shell ${modeClass}`} aria-hidden="true">
      <div className={`living-vortex-burst ${burstTick % 2 === 1 ? "is-bursting" : ""}`} />

      <svg className="living-vortex-deep" style={{ transform: `translate3d(0, ${parallaxY.deep}px, 0)` }} viewBox="0 0 1200 1200" fill="none">
        {stars.map((star) => (
          <circle key={star.id} cx={star.x} cy={star.y} r={star.r} fill="#f0f4ff" opacity={star.o} />
        ))}
      </svg>

      <svg className="living-vortex-mid" style={{ transform: `translate3d(0, ${parallaxY.mid}px, 0)` }} viewBox="0 0 1200 1200" fill="none">
        <defs>
          <linearGradient id={`vortex-stroke-${mode}`} x1="330" y1="260" x2="980" y2="960" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#f0f4ff" stopOpacity="0.95" />
            <stop offset="0.43" stopColor="#4ab8ff" stopOpacity="0.72" />
            <stop offset="1" stopColor="#030b18" stopOpacity="0.14" />
          </linearGradient>
          <radialGradient id={`vortex-core-${mode}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(600 600) rotate(90) scale(380)">
            <stop offset="0" stopColor="#4ab8ff" stopOpacity="0.33" />
            <stop offset="1" stopColor="#030b18" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="600" cy="600" r="420" fill={`url(#vortex-core-${mode})`} className="living-vortex-core" />
        <path d={spiral} stroke={`url(#vortex-stroke-${mode})`} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d={spiral} stroke={`url(#vortex-stroke-${mode})`} strokeWidth="0.45" opacity="0.5" transform="translate(8 6)" />
      </svg>

      {particles.length ? (
        <svg className="living-vortex-fore" style={{ transform: `translate3d(0, ${parallaxY.fore}px, 0)` }} viewBox="0 0 1200 1200" fill="none">
          {particles.map((particle) => (
            <circle
              key={particle.id}
              cx={particle.x}
              cy={particle.y}
              r={particle.r}
              fill="#7dd0ff"
              opacity={particle.o}
              style={{ animationDelay: `${particle.delay}s` }}
              className="living-vortex-particle"
            />
          ))}
        </svg>
      ) : null}
      <div className="living-vortex-right-dim" />
    </div>
  );
}
