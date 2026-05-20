"use client";

import { useEffect } from "react";
import { type Theme, useTheme } from "@/components/theme-store";

type ParticleThemeConfig = {
  particleColors: string[];
  linkColor: string;
  particleCount: number;
  opacity: number;
  linkOpacity: number;
  lineDistance: number;
  particleSize: number;
  pushCount: number;
  speed: number;
};

type ParticleDomInstance = {
  pJS?: {
    fn?: {
      vendors?: {
        destroy?: () => void;
      };
    };
  };
};

type ParticlesWindow = Window &
  typeof globalThis & {
    particlesJS?: (tagId: string, config: object) => void;
    pJSDom?: ParticleDomInstance[];
  };

const particleThemes: Record<Theme, ParticleThemeConfig> = {
  dark: {
    particleColors: ["#dbeafe", "#7dd3fc", "#60a5fa", "#c4b5fd"],
    linkColor: "#7dd3fc",
    particleCount: 170,
    opacity: 0.64,
    linkOpacity: 0.4,
    lineDistance: 176,
    particleSize: 3.9,
    pushCount: 7,
    speed: 2.15,
  },
  light: {
    particleColors: ["#8750f7", "#a855f7", "#c084fc"],
    linkColor: "#8750f7",
    particleCount: 170,
    opacity: 0.48,
    linkOpacity: 0.26,
    lineDistance: 172,
    particleSize: 3.9,
    pushCount: 7,
    speed: 2.1,
  },
};

function destroyParticles() {
  const particlesWindow = window as ParticlesWindow;
  const pJSDom = particlesWindow.pJSDom;

  if (!pJSDom?.length) {
    return;
  }

  pJSDom.forEach((particleInstance) =>
    particleInstance?.pJS?.fn?.vendors?.destroy?.(),
  );
  particlesWindow.pJSDom = [];
}

export default function ParticlesBackground() {
  const theme = useTheme();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let isActive = true;

    async function initializeParticles() {
      await import("particles.js");
      if (!isActive) {
        return;
      }

      const particlesWindow = window as ParticlesWindow;
      const particlesJS = particlesWindow.particlesJS;

      if (!particlesJS) {
        return;
      }

      const config = particleThemes[theme];

      destroyParticles();

      particlesJS("particles-js", {
        particles: {
          number: {
            value: config.particleCount,
            density: {
              enable: true,
              value_area: 900,
            },
          },
          color: {
            value: config.particleColors,
          },
          shape: {
            type: ["circle", "triangle"],
          },
          opacity: {
            value: config.opacity,
            random: false,
          },
          size: {
            value: config.particleSize,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: config.lineDistance,
            color: config.linkColor,
            opacity: config.linkOpacity,
            width: 1.15,
          },
          move: {
            enable: true,
            speed: config.speed,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 160,
              duration: 0.4,
            },
            push: {
              particles_nb: config.pushCount,
            },
          },
        },
        retina_detect: true,
      });
    }

    void initializeParticles();

    return () => {
      isActive = false;
      destroyParticles();
    };
  }, [theme]);

  return (
    <div
      id="particles-js"
      className={`pointer-events-none absolute inset-0 z-[1] ${
        theme === "dark" ? "mix-blend-screen opacity-100" : "opacity-95"
      }`}
      aria-hidden="true"
    />
  );
}
