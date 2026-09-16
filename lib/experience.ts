import { Code2, Gamepad2, Layers } from "lucide-react";

export const experienceItems = [
  {
    icon: Layers,
    title: "Caregiver · AI & data",
    description:
      "Connecting conversational AI, Redis retrieval, SQL dashboards, and Twilio reminders in Caregiver, an assisted living project for DeveloperWeek Hackathon 2025.",
    skills: ["Python", "Redis", "SQL", "Oracle APEX", "Twilio"],
    link: "Developer-Week-Hackathon-2025-Caregiver",
  },
  {
    icon: Gamepad2,
    title: "RPG Template · Game systems",
    description:
      "Creating a customizable Roblox RPG foundation with quests, inventory, spawning, weapons, and abilities, supported by video tutorials for other developers.",
    skills: ["Lua", "Roblox", "Rojo", "Aero"],
    link: "RPG-Template",
  },
  {
    icon: Code2,
    title: "Full-stack web development",
    description:
      "Connecting clear interfaces with the services behind them. Projects include Recall, a React portfolio template, and a Flask food tracker.",
    skills: ["TypeScript", "React", "Python", "Flask", "Convex"],
    link: "Dsa-App",
  },
] as const;

export const marqueeSkills = [
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Lua",
  "Redis",
  "Convex",
  "Flask",
  "Roblox",
  "Oracle APEX",
  "Twilio",
  "Verse",
  "OpenAI API",
  "Rojo",
  "Aero",
];
