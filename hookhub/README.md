## About HookHub

HookHub is a directory site for discovering open-source **Claude Code hooks** — community-built scripts that intercept Claude Code lifecycle events for safety, formatting, testing, notifications, and more.

The MVP spec lives at [../memory/specs/CLAUDE.md](../memory/specs/CLAUDE.md).

---

## Running the project

**Install dependencies** (first time only):

```bash
npm install
```

**Start the dev server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The page auto-reloads as you edit files.

**Other commands:**

```bash
npm run build   # production build
npm run lint    # run ESLint
```

---

## Project structure

```
hookhub/
  app/
    layout.tsx              # root layout, fonts, metadata
    page.tsx                # home page — header, hook grid, footer
    globals.css             # Tailwind v4 base styles
    data/
      hooks.ts              # static hook seed data (add new hooks here)
    components/
      HookCard.tsx          # card component linking to a hook's GitHub repo
      CategoryBadge.tsx     # coloured pill badge per category
  public/                   # static assets
```

To add a new hook, append an entry to `app/data/hooks.ts` — no other changes needed.

---

## Tech stack

- **Next.js 16** (App Router, fully static output)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
