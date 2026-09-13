# Anthony Rice · Portfolio

A minimal, responsive portfolio built with Next.js App Router, React, and TypeScript. Includes six project showcases, category filters, light/dark mode with a saved preference and system default, accessible navigation, reduced-motion support, and custom CSS project illustrations.

## Development

Requires Node.js 20.9 or later.

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

The build exports a completely static website to `out/`. `npm start` serves that directory locally. Deploy `out/` to any static host, or import this repository into Vercel using the Next.js preset. No database, environment variables, API keys, or runtime backend are required.

## Customize

- `lib/projects.ts`: project descriptions, categories, technologies, and GitHub links.
- `app/page.tsx`: biography, project-based experience, social links, and page sections.
- `app/globals.css`: themes, responsive layouts, illustrations, and animation.
- `app/layout.tsx`: metadata and initial theme handling.
- `components/project-art.tsx`: decorative project illustrations (not screenshots of the original apps).

Fonts load from Google Fonts with local system fallbacks. No analytics or contact-form service is included. Contact links lead to Anthony’s public LinkedIn and GitHub profiles.

## Content sources

Content reviewed September 13, 2026. Experience describes repository-backed project work; no employment dates, job titles, project impact metrics, or certifications are assumed.

- [GitHub profile](https://github.com/A-Ricemusic): name, location, full-stack TypeScript focus, Kaizen philosophy, LinkedIn link.
- [Recall](https://github.com/A-Ricemusic/Dsa-App): practice journal, React, Convex, WorkOS; TypeScript source.
- [Caregiver](https://github.com/A-Ricemusic/Developer-Week-Hackathon-2025-Caregiver): hackathon context, assisted living concept, AI retrieval, dashboards, reminders.
- [School-safe AI](https://github.com/A-Ricemusic/School-safe-AI): tutoring approach, Flask, Python, OpenAI integration.
- [RPG Template](https://github.com/A-Ricemusic/RPG-Template): Roblox systems, Lua, Rojo, Aero, tutorial series.
- [Verse Box Fighting](https://github.com/A-Ricemusic/VerseBoxFightingMap): UEFN mechanics and Verse.
- [Food Tracker](https://github.com/A-Ricemusic/Food-Tracker-App-Flask-API): food tracking and Flask backend/frontend.
- [React portfolio template](https://github.com/A-Ricemusic/react-portfolio-site-template): additional web development experience.
