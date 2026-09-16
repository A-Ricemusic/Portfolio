export const github = "https://github.com/A-Ricemusic";

export const projects = [
  {
    id: "caregiver",
    name: "Caregiver",
    category: "AI & data",
    eyebrow: "DEVELOPERWEEK HACKATHON · 2025",
    description:
      "An assisted-living management project combining conversational AI, Redis vector search, Oracle APEX dashboards, and Twilio event reminders.",
    tags: ["Python", "Redis", "Oracle APEX", "Twilio"],
    repo: "Developer-Week-Hackathon-2025-Caregiver",
    videoUrl: "https://youtu.be/zkZkpWxOpyU?si=fhfwQrdaqypjY9Ge",
    videoEmbed: "https://www.youtube-nocookie.com/embed/zkZkpWxOpyU",
  },
  {
    id: "rpg",
    name: "RPG Template",
    category: "Game development",
    eyebrow: "ROBLOX GAME SYSTEMS",
    description:
      "A reusable Roblox RPG foundation with quest, inventory, spawning, weapon, and ability systems, plus tutorials that help developers understand and customize the template.",
    tags: ["Lua", "Roblox", "Rojo", "Aero"],
    repo: "RPG-Template",
    videoUrl: "https://youtu.be/0eEE3v6-ouU?si=4ZR3fOFTz3YY0dFZ",
    videoEmbed: "https://www.youtube-nocookie.com/embed/0eEE3v6-ouU",
  },
  {
    id: "rethinking-git",
    name: "Rethinking Git",
    category: "Developer tools",
    eyebrow: "EXPERIMENTAL SOURCE CONTROL",
    description:
      "A Rust source-control CLI built around stable changes, explicit snapshots, shared lines, workspaces, operation logs, verified backups, and Git interoperability.",
    tags: ["Rust", "CLI", "SQLite", "Git"],
    repo: "rethinking-git",
  },
  {
    id: "md-e2e",
    name: "MD E2E",
    category: "Developer tools",
    eyebrow: "EVIDENCE-BACKED BROWSER TESTING",
    description:
      "A TypeScript CLI that runs browser journeys written in Markdown with isolated test users and evidence-backed results, including real browser verification.",
    tags: ["TypeScript", "Bun", "Playwright", "Vitest"],
    repo: "md-e2e",
  },
  {
    id: "lets-learn-math",
    name: "Let's Learn Math",
    category: "Mobile apps",
    eyebrow: "GUIDED MATH PRACTICE",
    description:
      "An Expo React Native learning app with passwordless authentication, guided lessons, quizzes, mastery tracking, parent progress reports, and a saved-score math game.",
    tags: ["React Native", "Expo", "TypeScript", "Convex"],
    repo: "Let-s-Learn-Math",
  },
  {
    id: "recall",
    name: "Recall",
    category: "Web apps",
    eyebrow: "A PRIVATE PRACTICE JOURNAL",
    description:
      "A data structures and algorithms journal for recording practice, revisiting problems, organizing collections, and tracking progress over time.",
    tags: ["React", "TypeScript", "Convex", "WorkOS"],
    repo: "Dsa-App",
  },
  {
    id: "applypilot",
    name: "Apply Pilot",
    category: "AI & data",
    eyebrow: "EVIDENCE-FIRST JOB SEARCH",
    description:
      "A job discovery and application copilot with verified match rankings, transparent gaps, truthful resume tailoring, editable cover letters, and approval-gated automation.",
    tags: ["Next.js", "TypeScript", "Convex", "OpenRouter"],
    repo: "applypilot",
  },
] as const;
