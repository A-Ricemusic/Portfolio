"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion";

export function ContactSection() {
  return (
    <section className="contact-section container" id="contact">
      <Reveal>
        <div className="contact-inner">
          <span className="section-index accent">04 — What&apos;s Next</span>
          <h2>
            Good things start with
            <br />
            <span className="headline-accent">a conversation</span>
          </h2>
          <p>
            Have an idea, a question, or a shared curiosity? I&apos;d love to
            connect.
          </p>
          <motion.a
            className="contact-button"
            href="https://www.linkedin.com/in/anthonyricemusic"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, boxShadow: "0 20px 40px -12px var(--accent-glow)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25 }}
          >
            Connect on LinkedIn
            <ArrowUpRight size={19} />
          </motion.a>
        </div>
      </Reveal>
      <div className="contact-decoration" aria-hidden="true">
        <motion.div
          className="contact-ring"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="contact-ring contact-ring-inner"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </section>
  );
}
