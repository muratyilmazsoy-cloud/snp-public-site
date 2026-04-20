"use client";

import { useEffect, useState } from "react";

export function AnimatedHeadline({ text }: { text: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <span aria-label={text} className="headline-reveal" role="text">
      {text.split("").map((char, index) => (
        <span
          key={`${char}-${index}`}
          className={`headline-letter${mounted ? " is-visible" : ""}`}
          style={{ transitionDelay: `${index * 20}ms` }}
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
