# HookHub — MVP Spec

## Overview

HookHub is a directory site for discovering open-source **Claude Code hooks**. Hooks intercept Claude Code lifecycle events (PreToolUse, PostToolUse, Stop, SessionStart, etc.) to run commands, scripts, or prompts — used for safety enforcement, auto-formatting, notifications, logging, and more.

This MVP focuses on **discovery and browsing**. Submission, voting, auth, and search come later.

---

## Goals (MVP)

- Display a curated list of community Claude Code hooks in a browsable grid.
- Each hook shows its name, category, short description, and a link out to its GitHub repo.
- That's it. No accounts, no submissions, no comments.

## Non-goals (MVP)

- User accounts or authentication
- User-submitted hooks (curated list only, hardcoded for now)
- Search, filtering, or pagination
- Hook detail pages
- Voting, favoriting, or comments
- Installation instructions or copy-to-clipboard
- API endpoints

---

## Data model

A single `Hook` type:

```ts
type Hook = {
  id: string;          // slug, e.g. "auto-format-prettier"
  name: string;        // display name
  category: Category;  // see below
  description: string; // 1–2 sentences
  repoUrl: string;     // GitHub URL
};
```

### Categories

Based on common patterns in the Claude Code hooks ecosystem:

- `safety` — block destructive commands, enforce policies
- `formatting` — auto-format code on Write/Edit
- `testing` — run tests after changes
- `notifications` — Slack, desktop, email alerts
- `logging` — audit trails, command logs
- `git` — commit/branch policies, pre-push checks
- `other` — anything that doesn't fit above

### Data source (MVP)

A static TypeScript file: `hookhub/app/data/hooks.ts` exporting `Hook[]`. Seed with ~10–20 real hooks from sources like:

- [karanb192/claude-code-hooks](https://github.com/karanb192/claude-code-hooks)
- [disler/claude-code-hooks-mastery](https://github.com/disler/claude-code-hooks-mastery)
- [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)

No database, no fetching, no CMS — just a TS array. Easy to update via PR.

---

## Pages & UI

### `/` — Home (only page in MVP)

- **Header:** "HookHub" title, one-line tagline ("Discover open-source Claude Code hooks").
- **Grid:** responsive card grid of all hooks.
  - 1 column on mobile, 2 on tablet, 3 on desktop.
- **Footer:** link to the HookHub repo, brief credit line.

### Hook card

Each card shows:

- Hook name (heading)
- Category badge (colored pill)
- Description (truncated to ~2 lines)
- "View on GitHub →" link (opens repo in new tab)

The whole card is clickable, linking to `repoUrl` (`target="_blank"`, `rel="noopener noreferrer"`).

---

## Tech stack

Already in place:
- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**

No new dependencies needed for MVP.

---

## File structure (additions)

```
hookhub/
  app/
    page.tsx              # update: render hook grid
    data/
      hooks.ts            # seed data
    components/
      HookCard.tsx
      CategoryBadge.tsx
```

Keep the layout (`app/layout.tsx`) as-is.

---

## Out of scope / next iterations

These belong in a follow-up spec, not MVP:

- Hook detail pages (`/hooks/[id]`)
- Search bar + category filter
- Submission flow (PR template or form → review queue)
- Live GitHub metadata (stars, last updated) via the GitHub API
- Hook event-type tagging (`PreToolUse`, `Stop`, etc.) as a secondary axis
- Dark mode toggle (the Tailwind classes already support `dark:` — just needs UI)
- SEO: per-hook metadata, sitemap

---

## Acceptance criteria (MVP)

- [ ] Visiting `/` shows all seeded hooks in a responsive grid.
- [ ] Each card displays name, category badge, description, and a working GitHub link.
- [ ] Adding a new hook = append one entry to `app/data/hooks.ts` and redeploy.
- [ ] Page renders without client-side JS (server components only).
- [ ] `npm run lint` and `npm run build` pass clean.

---

## References

- [karanb192/claude-code-hooks](https://github.com/karanb192/claude-code-hooks) — copy-paste hooks
- [disler/claude-code-hooks-mastery](https://github.com/disler/claude-code-hooks-mastery) — full lifecycle coverage
- [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) — curated awesome list
- [ChrisWiles/claude-code-showcase](https://github.com/ChrisWiles/claude-code-showcase) — config examples
- [Claude Code Hooks docs](https://code.claude.com/docs/en/hooks)
