"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Youtube } from "lucide-react";
import { useState } from "react";
import { ease } from "@/components/motion";
import { Reveal } from "@/components/motion";
import { ProjectArt } from "@/components/project-art";
import { github, projects } from "@/lib/projects";

const filters = ["All projects", "Web apps", "AI & data", "Game development"];

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
              className={`project-card${i < 2 ? " featured" : ""}`}
              layout
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.45, ease, delay: i * 0.05 }}
            >
              <a
                className="project-image-link"
                href={`${github}/${project.repo}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.name} on GitHub`}
              >
                <ProjectArt kind={project.art} />
                <div className="project-overlay">
                  <span className="project-open">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </a>
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
                  {"video" in project && project.video && (
                    <a
                      className="project-action"
                      href={project.video}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Youtube size={14} />
                      Watch video
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
