"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo } from "react";

const PARTICLE_COUNT = 28;

function useMouseParallax() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set((e.clientX / window.innerWidth - 0.5) * 2);
      y.set((e.clientY / window.innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  const springX = useSpring(x, { stiffness: 40, damping: 22, mass: 0.8 });
  const springY = useSpring(y, { stiffness: 40, damping: 22, mass: 0.8 });
  const springX2 = useSpring(x, { stiffness: 30, damping: 20 });
  const springY2 = useSpring(y, { stiffness: 30, damping: 20 });
  const springX3 = useSpring(x, { stiffness: 25, damping: 18 });
  const springY3 = useSpring(y, { stiffness: 25, damping: 18 });

  return {
    orb1: {
      x: useTransform(springX, (v) => v * 28),
      y: useTransform(springY, (v) => v * 22),
    },
    orb2: {
      x: useTransform(springX2, (v) => v * 18),
      y: useTransform(springY2, (v) => v * 14),
    },
    orb3: {
      x: useTransform(springX3, (v) => v * 12),
      y: useTransform(springY3, (v) => v * 10),
    },
  };
}

export function GradientMesh() {
  const parallax = useMouseParallax();

  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        left: `${8 + ((i * 37) % 84)}%`,
        top: `${5 + ((i * 53) % 90)}%`,
        size: 2 + (i % 3),
        duration: 14 + (i % 7) * 3,
        delay: -(i * 1.7),
      })),
    [],
  );

  return (
    <div className="gradient-mesh" aria-hidden="true">
      <div className="mesh-aurora" />
      <div className="mesh-aurora mesh-aurora-2" />

      <motion.div style={parallax.orb1}>
        <motion.div
          className="mesh-orb mesh-orb-1"
          animate={{
            scale: [1, 1.12, 0.96, 1.08, 1],
            opacity: [0.7, 1, 0.8, 0.95, 0.7],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div style={parallax.orb2}>
        <motion.div
          className="mesh-orb mesh-orb-2"
          animate={{
            x: [0, -50, 30, -20, 0],
            y: [0, 40, -30, 20, 0],
            scale: [1, 1.08, 1.15, 1.02, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div style={parallax.orb3}>
        <motion.div
          className="mesh-orb mesh-orb-3"
          animate={{
            x: [0, 35, -45, 15, 0],
            y: [0, -25, 40, -15, 0],
            scale: [1, 0.92, 1.1, 0.98, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <motion.div
        className="mesh-orb mesh-orb-4"
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 35, 0],
          opacity: [0.4, 0.7, 0.5, 0.4],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mesh-beam" />
      <div className="mesh-beam mesh-beam-2" />

      <div className="mesh-grid" />
      <div className="mesh-grid mesh-grid-fine" />

      <div className="mesh-particles">
        {particles.map((p) => (
          <span
            key={p.id}
            className="mesh-particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="mesh-spotlight" />
      <div className="mesh-vignette" />
      <div className="mesh-noise" />
    </div>
  );
}
