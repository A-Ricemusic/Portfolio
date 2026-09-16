"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Youtube } from "lucide-react";
import { useState } from "react";
import { ease } from "@/components/motion";
import { Reveal } from "@/components/motion";
import { github, projects } from "@/lib/projects";

const filters = [
  "All projects",
  "Developer tools",
  "Web apps",
  "Mobile apps",
  "AI & data",
  "Game development",
];

export function WorkSection() {
  const [filter, setFilter] = useState("All projects");
  const filtered = projects.filter(
    (p) => filter === "All projects" || p.category === filter,
  );

  return (
    <section className="work-section container" id="work">
      <Reveal>
        <div className="section-heading">
          <div>
            <span className="section-index">01 — Selected Work</span>
            <h2>
              Projects that show
              <br />
              <span className="headline-accent">range and depth</span>
            </h2>
          </div>
          <a
            className="text-link"
            href={`${github}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
          >
            All repositories
            <ArrowUpRight size={16} />
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="filters" role="tablist" aria-label="Filter projects">
          {filters.map((item) => (
            <button
              key={item}
              role="tab"
              className={filter === item ? "filter-btn active" : "filter-btn"}
              aria-selected={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
              {item === "All projects" && (
                <span className="filter-count">{projects.length}</span>
              )}
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div className="project-grid" layout aria-live="polite">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.article
              key={project.id}
              className="project-card"
              layout
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.45, ease, delay: i * 0.05 }}
            >
              {"videoEmbed" in project && project.videoEmbed && (
                <div className="project-video">
                  <iframe
                    src={project.videoEmbed}
                    title={`${project.name} video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              )}
              <div className="project-info">
                <span className="project-eyebrow">{project.eyebrow}</span>
                <div className="project-title-row">
                  <h3>
                    <a
                      href={`${github}/${project.repo}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.name}
                    </a>
                  </h3>
                  <span className="project-category">{project.category}</span>
                </div>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <a
                    className="project-action"
                    href={`${github}/${project.repo}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                  {"videoUrl" in project && project.videoUrl && (
                    <a
                      className="project-action"
                      href={project.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Youtube size={14} />
                      YouTube
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
