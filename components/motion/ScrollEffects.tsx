"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const revealTargets = Array.from(document.querySelectorAll("main section, main article"));
    revealTargets.forEach((item) => item.classList.add("reveal-on-scroll"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 },
    );

    revealTargets.forEach((item) => observer.observe(item));

    const parallaxTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax-speed]"));

    const onScroll = () => {
      const y = window.scrollY;
      parallaxTargets.forEach((item) => {
        const speed = Number(item.dataset.parallaxSpeed ?? "1");
        item.style.transform = `translate3d(0, ${-(y * (1 - speed))}px, 0)`;
      });

      const indicators = document.querySelectorAll<HTMLElement>(".scroll-indicator");
      indicators.forEach((indicator) => {
        indicator.style.opacity = y > 100 ? "0" : "1";
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
