"use client";

import { motion } from "framer-motion";

export function GradientMesh() {
  return (
    <div className="gradient-mesh" aria-hidden="true">
      <motion.div
        className="mesh-orb mesh-orb-1"
        animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="mesh-orb mesh-orb-2"
        animate={{ x: [0, -40, 25, 0], y: [0, 30, -25, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="mesh-orb mesh-orb-3"
        animate={{ x: [0, 20, -30, 0], y: [0, -20, 35, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="mesh-grid" />
      <div className="mesh-noise" />
    </div>
  );
}
