# Claude Code Crash Course

A collection of projects built during the Claude Code crash course.

---

## Memory

The [memory/](memory/) folder holds reusable instructions that Claude Code can pick up as scoped guidance.

### [memory/frontend/CLAUDE.md](memory/frontend/CLAUDE.md)

A set of frontend coding rules (React, Next.js, TypeScript, Tailwind, Node.js) copied from [cursor.directory](https://cursor.directory). It defines how Claude should approach code review, planning, security, and tradeoff discussions when working on frontend code — the same rules many developers use with Cursor, repurposed as Claude Code instructions.

### [memory/specs/CLAUDE.md](memory/specs/CLAUDE.md)

The hookhub MVP spec (see below).

---

## Projects

### [hookhub/](hookhub/)

A Next.js application built with React 19, TypeScript, and Tailwind CSS — a directory site for discovering open-source Claude Code hooks.

**Run the dev server:**

```bash
cd hookhub
npm install
npm run dev
```

The app will be available at `http://localhost:3000`.

#### Spec

The MVP spec lives at [memory/specs/CLAUDE.md](memory/specs/CLAUDE.md). It was written in response to this prompt:

> I want you to help me write a spec file under the hookhub directory for a project I am building. It's called "hookhub". It's a place where cool open source claude hooks are displayed and browsed. Search on claude hooks and write an initial spec for this. Remember it's an MVP ATM and we need only the functionality of displaying the hooks. Hooks are found in github repository, they have name, category, description and link to repo. The main page should display the hooks in a grid like view.

> **Note:** the spec was written to `memory/specs/CLAUDE.md` rather than the originally suggested `hookhub/` location.

The spec covers:
- **Goals & non-goals** — MVP is browse-only; no auth, search, or submissions yet
- **Data model** — `Hook` type with `id`, `name`, `category`, `description`, `repoUrl`, plus 7 categories (safety, formatting, testing, notifications, logging, git, other)
- **Data source** — static `app/data/hooks.ts` array seeded from real hook collections (no DB)
- **UI** — single home page with a responsive card grid (1/2/3 columns), category badges, and outbound GitHub links
- **File structure** — new `app/data/hooks.ts`, `app/components/HookCard.tsx`, `app/components/CategoryBadge.tsx`
- **Acceptance criteria** for the MVP
