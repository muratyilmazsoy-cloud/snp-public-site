"use client";

import { useEffect, useMemo, useState } from "react";

type Pin = { id: number; x: number; y: number };
type LinkLine = { id: number; from: Pin; to: Pin };

const pins: Pin[] = Array.from({ length: 60 }).map((_, i) => ({
  id: i + 1,
  x: 8 + ((i * 13) % 84),
  y: 12 + ((i * 17) % 70),
}));

export function MSESyncMap() {
  const [activePins, setActivePins] = useState<number[]>([]);
  const [links, setLinks] = useState<LinkLine[]>([]);

  useEffect(() => {
    let linkId = 0;
    const interval = setInterval(() => {
      const from = pins[Math.floor(Math.random() * pins.length)];
      const to = pins[Math.floor(Math.random() * pins.length)];
      setActivePins((prev) => [...prev, from.id].slice(-8));
      const currentLink = { id: ++linkId, from, to };
      setLinks((prev) => [...prev, currentLink].slice(-6));
      setTimeout(() => {
        setLinks((prev) => prev.filter((line) => line.id !== currentLink.id));
      }, 1000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const liveCounter = useMemo(() => `~${(4.2 + activePins.length * 0.03).toFixed(2)}M policies calibrated this month`, [activePins.length]);

  return (
    <section className="space-y-5 card-surface p-8">
      <p className="eyebrow text-cyan">MSE live synchronization</p>
      <div className="relative h-[420px] overflow-hidden rounded-2xl border border-navy-edge bg-navy-2">
        <svg viewBox="0 0 100 60" className="h-full w-full">
          <path d="M4 28C12 22 18 19 27 20C35 21 38 27 46 28C54 29 57 24 65 23C73 22 79 26 86 25C93 24 96 20 98 19" stroke="rgba(74,184,255,0.24)" strokeWidth="0.8" fill="none" />
          <path d="M8 40C16 35 22 34 31 35C39 36 43 41 50 42C57 43 61 39 68 38C75 37 83 40 90 40" stroke="rgba(74,184,255,0.18)" strokeWidth="0.8" fill="none" />

          {links.map((line) => (
            <line
              key={line.id}
              x1={line.from.x}
              y1={line.from.y}
              x2={line.to.x}
              y2={line.to.y}
              stroke="rgba(74,184,255,0.8)"
              strokeWidth="0.45"
              className="mse-link"
            />
          ))}

          {pins.map((pin) => (
            <circle
              key={pin.id}
              cx={pin.x}
              cy={pin.y}
              r={activePins.includes(pin.id) ? 0.95 : 0.55}
              fill={activePins.includes(pin.id) ? "#f5a524" : "#4ab8ff"}
              className={activePins.includes(pin.id) ? "mse-pin-active" : ""}
            />
          ))}
        </svg>
      </div>
      <p className="text-gray-1">{liveCounter}</p>
    </section>
  );
}
