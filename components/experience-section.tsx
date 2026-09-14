"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, Stagger, StaggerItem, ease } from "@/components/motion";
import { experienceItems } from "@/lib/experience";
import { github } from "@/lib/projects";

export function ExperienceSection() {
  return (
    <section className="experience-section container" id="experience">
      <Reveal>
        <div className="section-heading">
          <div>
            <span className="section-index">03 — Experience</span>
            <h2>
              Hands-on across
              <br />
              <span className="headline-accent">every layer</span>
            </h2>
          </div>
          <p className="section-note">
            Real projects, open source, and personal builds that shaped my
            toolkit.
          </p>
        </div>
      </Reveal>

      <Stagger className="experience-list">
        {experienceItems.map((item, i) => (
          <StaggerItem key={item.title}>
            <motion.div
              className="experience-row"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3, ease }}
            >
              <span className="experience-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="experience-main">
                <div className="experience-title">
                  <span className="experience-icon">
                    <item.icon size={20} />
                  </span>
                  <h3>{item.title}</h3>
                </div>
                <p>{item.description}</p>
                <div className="skill-pills">
                  {item.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
              <a
                className="experience-link"
                href={`${github}/${item.link}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`Explore ${item.title} project`}
              >
                <ArrowUpRight size={22} />
              </a>
            </motion.div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
