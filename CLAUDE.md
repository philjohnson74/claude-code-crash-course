# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository structure

This is a monorepo of projects built during the Claude Code crash course. Each top-level folder is a self-contained project with its own `package.json` and dependencies.

| Folder | Stack |
|--------|-------|
| `hookhub/` | Next.js 16, React 19, TypeScript, Tailwind CSS v4 |

---

## hookhub

### Commands

```bash
cd hookhub
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run lint     # run ESLint
```

### Architecture

Uses the Next.js App Router — all routes, layouts, and pages live under `app/`. The `@/*` path alias resolves to the `hookhub/` root.

### Next.js version warning

This project runs **Next.js 16** with **React 19**. Before writing any Next.js-specific code, read the relevant guide in `node_modules/next/dist/docs/` — APIs, conventions, and file structure may differ significantly from earlier versions. Heed deprecation notices.
