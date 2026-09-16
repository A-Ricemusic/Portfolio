export const github = "https://github.com/A-Ricemusic";
export const projects = [
  {
    id: "caregiver",
    name: "Caregiver",
    category: "AI & data",
    eyebrow: "FEATURED · DEVELOPERWEEK HACKATHON · 2025",
    description:
      "Built for DeveloperWeek Hackathon 2025, Caregiver brings conversational AI and Redis vector search to assisted living management. Oracle APEX dashboards turn SQL data into insights, while Twilio delivers event reminders.",
    tags: ["Python", "Redis", "Oracle APEX", "Twilio"],
    repo: "Developer-Week-Hackathon-2025-Caregiver",
    video: "https://youtu.be/zkZkpWxOpyU?si=fhfwQrdaqypjY9Ge",
    art: "care",
  },
  {
    id: "rpg",
    name: "RPG Template",
    category: "Game development",
    eyebrow: "FEATURED · A FOUNDATION FOR NEW WORLDS",
    description:
      "A reusable foundation for Roblox RPGs, combining quest, inventory, spawning, weapon, and ability systems. Built with Lua, Aero, and Rojo, the template includes video tutorials to help other creators understand and customize their own worlds.",
    tags: ["Lua", "Roblox", "Rojo", "Aero"],
    repo: "RPG-Template",
    video: "https://youtu.be/0eEE3v6-ouU?si=4ZR3fOFTz3YY0dFZ",
    art: "rpg",
  },
  {
    id: "recall",
    name: "Recall",
    category: "Web apps",
    eyebrow: "A SPACE TO KEEP LEARNING",
    description:
      "A personal data structures and algorithms journal. A focused place to document practice, revisit problems, and build understanding over time.",
    tags: ["React", "TypeScript", "Convex", "WorkOS"],
    repo: "Dsa-App",
    art: "recall",
  },
  {
    id: "tutor",
    name: "School-safe AI",
    category: "AI & data",
    eyebrow: "DESIGNED FOR UNDERSTANDING",
    description:
      "An AI tutoring assistant that guides students with explanations and thoughtful hints, encouraging them to work toward their own answers.",
    tags: ["Python", "Flask", "OpenAI API"],
    repo: "School-safe-AI",
    art: "tutor",
  },
  {
    id: "verse",
    name: "Verse Box Fighting",
    category: "Game development",
    eyebrow: "BEHIND THE GAMEPLAY",
    description:
      "Custom Fortnite gameplay logic for team teleportation, weapon grants, scoring, and round flow, connected through UEFN devices.",
    tags: ["Verse", "UEFN", "Game systems"],
    repo: "VerseBoxFightingMap",
    art: "verse",
  },
  {
    id: "food",
    name: "Food Tracker",
    category: "Web apps",
    eyebrow: "EVERYDAY TOOLS, BUILT FROM SCRATCH",
    description:
      "A food intake tracking application built with Python and Flask, bringing frontend interactions and backend functionality together.",
    tags: ["Python", "Flask", "API development"],
    repo: "Food-Tracker-App-Flask-API",
    art: "food",
  },
] as const;
