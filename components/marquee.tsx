"use client";

import { marqueeSkills } from "@/lib/experience";

export function Marquee() {
  const items = [...marqueeSkills, ...marqueeSkills];

  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {items.map((skill, i) => (
          <span key={`${skill}-${i}`} className="marquee-item">
            {skill}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
