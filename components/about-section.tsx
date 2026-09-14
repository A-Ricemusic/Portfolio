"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { github } from "@/lib/projects";

const principles = [
  {
    title: "Builder's mindset",
    text: "Ship real projects, iterate in the open, and treat every repo as a chance to learn.",
  },
  {
    title: "Continuous improvement",
    text: "Kaizen — small steps, refined details, and steady progress across every stack.",
  },
  {
    title: "Cross-domain craft",
    text: "From React dashboards to Roblox systems, the same care goes into every layer.",
  },
];

export function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="container about-layout">
        <Reveal>
          <div className="about-intro">
            <span className="section-index">02 — About</span>
            <h2>
              A developer who learns
              <br />
              <span className="headline-accent">by building</span>
            </h2>
            <div className="kaizen-card">
              <span className="kaizen-symbol" lang="ja">改善</span>
              <div>
                <strong>Kaizen</strong>
                <span>Small steps. Continuous improvement.</span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="about-copy">
            <p className="about-lead">
              I&apos;m a full-stack TypeScript developer based in California,
              with a curiosity that takes me from web applications to AI
              experiments and game development.
            </p>
            <p>
              Caregiver and RPG Template are the centerpieces of my work.
              Caregiver explores how AI, retrieval, and dashboards can support
              assisted living management. RPG Template brings reusable gameplay
              systems and tutorials together to help Roblox creators build their
              own adventures.
            </p>
            <p>
              I follow the idea of Kaizen: learning a little more, refining the
              details, and improving every day. That same mindset runs through
              the things I build.
            </p>
            <a
              className="text-link"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} />
              More on GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>
        </Reveal>

        <Stagger className="principles-grid">
          {principles.map((item) => (
            <StaggerItem key={item.title}>
              <div className="principle-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
