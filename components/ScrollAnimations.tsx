"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";

/* ──────────────────────────────────────────────
   useParallax — scroll-linked parallax offset
   ────────────────────────────────────────────── */
function useParallax(scrollYProgress: MotionValue<number>, distance: number) {
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  return useSpring(y, { stiffness: 100, damping: 30, mass: 0.5 });
}

/* ──────────────────────────────────────────────
   ScrollReveal
   Wraps children and reveals them with a
   depth-based scale + fade on scroll.
   ────────────────────────────────────────────── */
interface ScrollRevealProps {
  children: ReactNode;
  /** Direction: 'up' | 'left' | 'right' (default 'up') */
  direction?: "up" | "left" | "right";
  /** Delay in seconds (default 0) */
  delay?: number;
  /** Duration in seconds (default 0.7) */
  duration?: number;
  /** Distance in px (default 50) */
  distance?: number;
  /** Additional CSS classes */
  className?: string;
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  distance = 50,
  className = "",
}: ScrollRevealProps) {
  const initial: Record<string, number> = { opacity: 0, scale: 0.96 };
  const animate: Record<string, number> = { opacity: 1, scale: 1 };

  if (direction === "up") {
    initial.y = distance;
    animate.y = 0;
  } else if (direction === "left") {
    initial.x = distance;
    animate.x = 0;
  } else if (direction === "right") {
    initial.x = -distance;
    animate.x = 0;
  }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   ParallaxLayer
   Moves children at a different scroll speed,
   creating a depth/3D layering effect.
   ────────────────────────────────────────────── */
interface ParallaxLayerProps {
  children: ReactNode;
  /** Parallax distance in px (positive = moves opposite to scroll) */
  speed?: number;
  /** Additional CSS classes */
  className?: string;
}

export function ParallaxLayer({
  children,
  speed = 40,
  className = "",
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useParallax(scrollYProgress, speed);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   ScrollScale
   Scales content from small to full size as
   it scrolls into view — creates a "zoom in
   from depth" 3D feel.
   ────────────────────────────────────────────── */
interface ScrollScaleProps {
  children: ReactNode;
  /** Start scale (default 0.88) */
  fromScale?: number;
  /** Additional CSS classes */
  className?: string;
}

export function ScrollScale({
  children,
  fromScale = 0.88,
  className = "",
}: ScrollScaleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "0.4 end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [fromScale, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const springScale = useSpring(scale, { stiffness: 120, damping: 24 });

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ scale: springScale, opacity }}>
        {children}
      </motion.div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   FloatingElement
   A purely decorative element that floats
   gently with a continuous animation.
   ────────────────────────────────────────────── */
interface FloatingElementProps {
  children: ReactNode;
  /** Float distance in px (default 12) */
  distance?: number;
  /** Animation duration in seconds (default 4) */
  duration?: number;
  /** Delay (default 0) */
  delay?: number;
  /** Additional CSS classes */
  className?: string;
}

export function FloatingElement({
  children,
  distance = 12,
  duration = 4,
  delay = 0,
  className = "",
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{ y: [-distance, distance, -distance] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   StaggerContainer + StaggerItem
   Stagger children reveal on scroll for
   grid/list layouts.
   ────────────────────────────────────────────── */
interface StaggerContainerProps {
  children: ReactNode;
  /** Stagger delay between items in seconds (default 0.1) */
  stagger?: number;
  /** Additional CSS classes */
  className?: string;
}

export function StaggerContainer({
  children,
  stagger = 0.1,
  className = "",
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
