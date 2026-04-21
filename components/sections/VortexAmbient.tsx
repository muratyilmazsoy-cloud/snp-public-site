"use client";

import { useEffect, useMemo, useState } from "react";

type VortexMode = "home" | "operasyon" | "manifesto" | "karma";
type Point = { x: number; y: number };

function generateSpiralPoints(points: number, turns: number, scale: number, phase = 0) {
  const maxT = turns * Math.PI * 2;
  const list: Point[] = [];

  for (let i = 0; i < points; i += 1) {
    const t = (i / (points - 1)) * maxT;
    const radial = scale * Math.pow(t, 1.1);
    const theta = t + phase;
    const x = 600 + radial * Math.cos(theta);
    const y = 600 + radial * Math.sin(theta);
    list.push({ x, y });
  }

  return list;
}

function pointsToPath(points: Point[]) {
  return points
    .map((point, index) => `${index === 0 ? "M" : "L"}${point.x.toFixed(2)} ${point.y.toFixed(2)}`)
    .join(" ");
}

function toSegmentPath(points: Point[], startRatio: number, endRatio: number) {
  const startIndex = Math.floor(points.length * startRatio);
  const endIndex = Math.max(startIndex + 2, Math.floor(points.length * endRatio));
  const chunk = points.slice(startIndex, endIndex);
  return pointsToPath(chunk);
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
      const t = 2.2 + rand() * Math.PI * 2 * 8;
      const radius = 9.2 * Math.pow(t, 1.1);
      const x = 600 + radius * Math.cos(t);
      const y = 600 + radius * Math.sin(t);
      return { id: i, x, y, r: 0.8 + rand() * 1.6, o: 0.45 + rand() * 0.35, delay: rand() * 4 };
    });
  }, [mode]);

  const { armA, armB, armPathDebugLength } = useMemo(() => {
    const turns = mode === "manifesto" ? 8 : 10;
    const points = 1000;
    const scale = mode === "manifesto" ? 3.6 : 3.8;

    const armAPoints = generateSpiralPoints(points, turns, scale, 0);
    const armBPoints = generateSpiralPoints(points, turns, scale, Math.PI);

    return {
      armA: armAPoints,
      armB: armBPoints,
      armPathDebugLength: pointsToPath(armAPoints).length,
    };
  }, [mode]);

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;
    const lCount = armA.length - 1;
    console.debug("[VortexAmbient] armA path verification", {
      pathLength: armPathDebugLength,
      moveCommands: 1,
      lineCommands: lCount,
      points: armA.length,
      turns: mode === "manifesto" ? 8 : 10,
    });
  }, [armA.length, armPathDebugLength, mode]);

  const armSegments = useMemo(() => {
    const widths = [2, 1.7, 1.35, 1.05, 0.75, 0.45, 0.2];
    const segmentCount = widths.length;
    const ranges = widths.map((width, index) => {
      const start = index / segmentCount;
      const end = (index + 1) / segmentCount;
      const opacity = 1 - index * 0.12;
      return { width, start, end, opacity };
    });
    return ranges;
  }, []);

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
          <linearGradient id={`vortex-stroke-${mode}`} x1="230" y1="180" x2="980" y2="980" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#f0f4ff" stopOpacity="0.95" />
            <stop offset="0.43" stopColor="#4ab8ff" stopOpacity="0.78" />
            <stop offset="1" stopColor="#030b18" stopOpacity="0.14" />
          </linearGradient>
          <radialGradient id={`vortex-core-${mode}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(600 600) rotate(90) scale(360)">
            <stop offset="0" stopColor="#4ab8ff" stopOpacity="0.34" />
            <stop offset="1" stopColor="#030b18" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="600" cy="600" r="420" fill={`url(#vortex-core-${mode})`} className="living-vortex-core" />

        {armSegments.map((segment) => (
          <path
            key={`arm-a-${segment.start}`}
            d={toSegmentPath(armA, segment.start, segment.end)}
            stroke={`url(#vortex-stroke-${mode})`}
            strokeWidth={segment.width}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={segment.opacity}
          />
        ))}

        {armSegments.map((segment) => (
          <path
            key={`arm-b-${segment.start}`}
            d={toSegmentPath(armB, segment.start, segment.end)}
            stroke={`url(#vortex-stroke-${mode})`}
            strokeWidth={segment.width}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={segment.opacity * 0.92}
          />
        ))}
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
