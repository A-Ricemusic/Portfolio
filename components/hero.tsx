"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { ease } from "@/components/motion";
import { stats } from "@/lib/experience";

const heroStagger = {
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const heroItem = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease },
  },
};

export function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content container"
        initial="hidden"
        animate="visible"
        variants={heroStagger}
      >
        <motion.div className="hero-meta" variants={heroItem}>
          <span className="eyebrow">
            <span className="status-pulse" />
            Full-stack TypeScript Developer
          </span>
          <span className="location">
            <MapPin size={13} />
            California, USA
          </span>
        </motion.div>

        <motion.h1 variants={heroItem}>
          Turning curiosity into
          <br />
          <span className="headline-accent">crafted software</span>
          <span className="headline-period">.</span>
        </motion.h1>

        <motion.p className="hero-lead" variants={heroItem}>
          I build thoughtful web applications, AI-powered tools, and game
          systems — from Caregiver&apos;s assisted-living intelligence to RPG
          Template&apos;s reusable Roblox foundation.
        </motion.p>

        <motion.div className="hero-actions" variants={heroItem}>
          <a className="btn-primary" href="#work">
            View selected work
            <span className="btn-icon">
              <ArrowDown size={18} />
            </span>
          </a>
          <a className="btn-ghost" href="#experience">
            See my experience
          </a>
        </motion.div>

        <motion.div className="hero-stats" variants={heroItem}>
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <span className="stat-value">
                {stat.value}
                <span className="stat-suffix">{stat.suffix}</span>
              </span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-hidden="true"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll to explore
        </motion.span>
      </motion.div>
    </section>
  );
}
