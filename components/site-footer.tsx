import { ArrowRight } from "lucide-react";
import { github } from "@/lib/projects";

export function SiteFooter() {
  return (
    <footer className="site-footer container">
      <a className="wordmark wordmark-sm" href="#" aria-label="Back to top">
        <span className="wordmark-text">Anthony Rice</span>
        <span className="wordmark-dot" />
      </a>
      <span className="footer-copy">
        &copy; {new Date().getFullYear()} Anthony Rice
      </span>
      <span className="footer-note">Always a work in progress.</span>
      <a href={github} target="_blank" rel="noreferrer" className="footer-link">
        GitHub
        <ArrowRight size={14} />
      </a>
      <a href="#" className="footer-link">
        Back to top
        <ArrowRight size={14} className="up-arrow" />
      </a>
    </footer>
  );
}
