"use client";

import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { toggleTheme } from "@/hooks/use-theme";

const navLinks = [
  ["Work", "work"],
  ["About", "about"],
  ["Experience", "experience"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "site-header scrolled" : "site-header"}>
      <div className="header-inner">
        <a className="wordmark" href="#" aria-label="Anthony Rice home">
          <span className="wordmark-text">Anthony Rice</span>
          <span className="wordmark-dot" />
        </a>

        <nav
          className={menuOpen ? "nav open" : "nav"}
          aria-label="Main navigation"
        >
          {navLinks.map(([name, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              <span className="nav-link-text">{name}</span>
            </a>
          ))}
          <a
            className="nav-cta"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s connect
            <ArrowUpRight size={15} />
          </a>
        </nav>

        <div className="header-actions">
          <button
            className="icon-btn theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle light and dark mode"
          >
            <Sun className="sun-icon" size={18} />
            <Moon className="moon-icon" size={18} />
          </button>
          <button
            className="icon-btn menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
