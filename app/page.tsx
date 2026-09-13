"use client";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  Github,
  Sun,
  Moon,
  Menu,
  X,
  MapPin,
  Code2,
  Layers,
  Gamepad2,
} from "lucide-react";
import { github, projects } from "@/lib/projects";
import { ProjectArt } from "@/components/project-art";
const filters = ["All projects", "Web apps", "AI & data", "Game development"];
export default function Home() {
  const [filter, setFilter] = useState("All projects");
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const media = matchMedia("(prefers-color-scheme: dark)");
    const sync = () => {
      try {
        if (!localStorage.getItem("portfolio-theme"))
          document.documentElement.dataset.theme = media.matches
            ? "dark"
            : "light";
      } catch {}
    };
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);
  function toggleTheme() {
    const theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {}
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#" aria-label="Anthony Rice home">
            ar<span>.</span>
          </a>
          <nav
            className={menuOpen ? "nav open" : "nav"}
            aria-label="Main navigation"
          >
            {[
              ["Work", "work"],
              ["About", "about"],
              ["Experience", "experience"],
            ].map(([name, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {name}
              </a>
            ))}
            <a
              className="nav-contact"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Let’s connect <ArrowUpRight size={15} />
            </a>
          </nav>
          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle light and dark mode"
            >
              <Sun className="sun-icon" size={18} />
              <Moon className="moon-icon" size={18} />
            </button>
            <button
              className="menu-toggle"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>
      <main id="main">
        <section className="hero container">
          <div className="hero-top">
            <span className="eyebrow">
              <span className="status-dot" /> ANTHONY RICE / DEVELOPER
            </span>
            <span className="location">
              <MapPin size={13} /> California, USA
            </span>
          </div>
          <h1>
            Curiosity into code.
            <br />
            Ideas into{" "}
            <span className="serif-word">
              experiences<span className="orange-dot">.</span>
            </span>
          </h1>
          <div className="hero-bottom">
            <p>
              I’m Anthony, a full-stack TypeScript developer building
              <br className="desktop-break" /> thoughtful web applications, AI
              tools, and interactive worlds.
              <br className="desktop-break" /> Always learning. Always making
              something better.
            </p>
            <a className="round-link" href="#work">
              <span>Explore my work</span>
              <span className="circle-button">
                <ArrowDown size={21} />
              </span>
            </a>
          </div>
          <div className="hero-foot">
            <span>FULL-STACK DEVELOPMENT</span>
            <span className="hero-foot-dot">✳</span>
            <span>AI & DATA</span>
            <span className="hero-foot-dot">✳</span>
            <span>GAME DEVELOPMENT</span>
            <span className="hero-foot-end">
              BUILT WITH CURIOSITY, REFINED WITH CARE.
            </span>
          </div>
        </section>
        <section className="work-section container" id="work">
          <div className="section-heading">
            <div>
              <span className="eyebrow section-index">01 / SELECTED WORK</span>
              <h2>
                A few things I’ve <span className="serif-word">built.</span>
              </h2>
            </div>
            <a
              className="text-link"
              href={github + "?tab=repositories"}
              target="_blank"
              rel="noreferrer"
            >
              All repositories <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="filters" aria-label="Filter projects">
            {filters.map((item) => (
              <button
                key={item}
                className={filter === item ? "active" : ""}
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {item}
                {item === "All projects" && <span>06</span>}
              </button>
            ))}
          </div>
          <div className="project-grid" aria-live="polite">
            {projects
              .filter((p) => filter === "All projects" || p.category === filter)
              .map((project) => (
                <article className="project-card" key={project.id}>
                  <a
                    className="project-image-link"
                    href={`${github}/${project.repo}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <ProjectArt kind={project.art} />
                    <span className="project-open">
                      <ArrowUpRight size={20} />
                    </span>
                  </a>
                  <div className="project-info">
                    <span className="project-eyebrow">{project.eyebrow}</span>
                    <div className="project-title">
                      <h3>
                        <a
                          href={`${github}/${project.repo}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {project.name}
                        </a>
                      </h3>
                      <span>{project.category}</span>
                    </div>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </section>
        <section className="about-section" id="about">
          <div className="container about-layout">
            <div className="about-intro">
              <span className="eyebrow section-index">
                02 / A LITTLE ABOUT ME
              </span>
              <h2>
                A builder’s mindset.
                <br />A learner’s <span className="serif-word">curiosity.</span>
              </h2>
              <div className="kaizen-card">
                <span className="kaizen-symbol" lang="ja">
                  改善
                </span>
                <div>
                  <strong>Kaizen</strong>
                  <span>Small steps. Continuous improvement.</span>
                </div>
                <span className="kaizen-star">✳</span>
              </div>
            </div>
            <div className="about-copy">
              <p>
                I’m a full-stack TypeScript developer based in California, with
                a curiosity that takes me from web applications to AI
                experiments and game development.
              </p>
              <p>
                My projects explore different ways software can be useful:
                helping students think through a problem, organizing information
                for assisted living, or giving game creators a foundation to
                build on.
              </p>
              <p>
                I follow the idea of Kaizen: learning a little more, refining
                the details, and improving every day. That same mindset runs
                through the things I build.
              </p>
              <a
                className="text-link"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> More about me on GitHub{" "}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
        <section className="container experience-section" id="experience">
          <div className="section-heading">
            <div>
              <span className="eyebrow section-index">
                03 / EXPERIENCE & TOOLKIT
              </span>
              <h2>
                Different mediums.
                <br />
                The same <span className="serif-word">craft.</span>
              </h2>
            </div>
            <p className="section-note">
              Hands-on experience across my
              <br />
              open-source and personal projects.
            </p>
          </div>
          <div className="experience-list">
            {[
              {
                icon: Code2,
                title: "Full-stack web development",
                description:
                  "Connecting clear interfaces with the services behind them. Projects include Recall, a React portfolio template, and a Flask food tracker.",
                skills: "TypeScript · React · Python · Flask · Convex",
                link: "Dsa-App",
              },
              {
                icon: Layers,
                title: "AI & data-driven applications",
                description:
                  "Exploring conversational interfaces, contextual retrieval, and useful data visualization through Caregiver and School-safe AI.",
                skills: "OpenAI API · Redis · SQL · Oracle APEX",
                link: "Developer-Week-Hackathon-2025-Caregiver",
              },
              {
                icon: Gamepad2,
                title: "Interactive worlds & game systems",
                description:
                  "Building reusable gameplay systems, from Roblox quests and inventories to scoring and round management in Fortnite.",
                skills: "Lua · Roblox · Rojo · Verse · UEFN",
                link: "RPG-Template",
              },
            ].map((item, i) => (
              <div className="experience-row" key={item.title}>
                <span className="experience-number">0{i + 1}</span>
                <div className="experience-title">
                  <item.icon size={21} />
                  <h3>{item.title}</h3>
                </div>
                <div className="experience-detail">
                  <p>{item.description}</p>
                  <span>{item.skills}</span>
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
              </div>
            ))}
          </div>
        </section>
        <section className="contact-section container" id="contact">
          <div>
            <span className="eyebrow">04 / WHAT’S NEXT?</span>
            <h2>
              Good things start
              <br />
              with a <span className="serif-word">conversation.</span>
            </h2>
            <p>
              Have an idea, a question, or a shared curiosity?
              <br />
              I’d love to connect.
            </p>
            <a
              className="contact-button"
              href="https://www.linkedin.com/in/anthonyricemusic"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn <ArrowUpRight size={19} />
            </a>
          </div>
          <div className="contact-spark" aria-hidden="true">
            ✳
          </div>
        </section>
      </main>
      <footer className="container footer">
        <a className="wordmark" href="#" aria-label="Back to top">
          ar<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} Anthony Rice</span>
        <span className="footer-note">
          Always a work in progress. Just like me.
        </span>
        <a href={github} target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight size={14} />
        </a>
        <a href="#">
          Back to top <ArrowRight className="up-arrow" size={14} />
        </a>
      </footer>
    </>
  );
}
