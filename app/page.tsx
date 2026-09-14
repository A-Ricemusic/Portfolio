"use client";

import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { GradientMesh } from "@/components/gradient-mesh";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkSection } from "@/components/work-section";
import { useThemeSync } from "@/hooks/use-theme";

export default function Home() {
  useThemeSync();

  return (
    <>
      <GradientMesh />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Marquee />
        <WorkSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
