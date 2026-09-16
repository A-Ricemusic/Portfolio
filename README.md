# Anthony Rice · Portfolio

A minimal, responsive portfolio built with Next.js App Router, React, and TypeScript. Includes seven project showcases, category filters, embedded project videos, light/dark mode with a saved preference and system default, accessible navigation, and reduced-motion support.

## Development

Requires Bun 1.3.14 and Node.js 20.9 or later. Bun manages dependencies and runs the package scripts.

```sh
bun install
bun run dev
```

Open http://localhost:3000.

## Production

```sh
bun run lint
bun run typecheck
bun run build
bun run start
```

The build exports a completely static website to `out/`. `bun run start` serves that directory locally. Deploy `out/` to any static host, or import this repository into Vercel using the Next.js preset. No database, environment variables, API keys, or runtime backend are required.

## Customize

- `lib/projects.ts`: project descriptions, categories, technologies, and GitHub links.
- `app/page.tsx`: biography, project-based experience, social links, and page sections.
- `app/globals.css`: themes, responsive layouts, project videos, and animation.
- `app/layout.tsx`: metadata and initial theme handling.

Fonts load from Google Fonts with local system fallbacks. No analytics or contact-form service is included. Contact links lead to Anthony’s public LinkedIn and GitHub profiles.

## Content sources

Content reviewed September 16, 2026. Experience describes repository-backed project work; no employment dates, job titles, project impact metrics, or certifications are assumed.

- [GitHub profile](https://github.com/A-Ricemusic): name, location, full-stack TypeScript focus, Kaizen philosophy, LinkedIn link.
- [Recall](https://github.com/A-Ricemusic/Dsa-App): practice journal, React, Convex, WorkOS; TypeScript source.
- [Caregiver](https://github.com/A-Ricemusic/Developer-Week-Hackathon-2025-Caregiver): hackathon context, assisted living concept, AI retrieval, dashboards, reminders.
- [RPG Template](https://github.com/A-Ricemusic/RPG-Template): Roblox systems, Lua, Rojo, Aero, tutorial series.
- [Rethinking Git](https://github.com/A-Ricemusic/rethinking-git): experimental Rust source control, snapshots, workspaces, operation logs, and Git interoperability.
- [MD E2E](https://github.com/A-Ricemusic/md-e2e): Markdown browser journeys, TypeScript, Bun, Playwright, and evidence-backed results.
- [Let's Learn Math](https://github.com/A-Ricemusic/Let-s-Learn-Math): Expo React Native learning app, Convex, authentication, lessons, progress, and games.
- [ApplyPilot](https://github.com/A-Ricemusic/applypilot): evidence-first job discovery, resume tailoring, Next.js, Convex, and OpenRouter.
