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

## Finished Processing Hook

This repo includes a project-scoped Claude Code hook that plays an audio chime whenever Claude finishes processing a request.

### Files

| File | Purpose |
|------|---------|
| `FinishedProcessing.wav` | Audio chime played at the end of each Claude response |
| `play_sound.py` | Python script that plays `FinishedProcessing.wav` using macOS's built-in `afplay` command |
| `pyproject.toml` | `uv` project config (Python package manager) |
| `.claude/settings.json` | Project-scoped Claude Code hook config |

### How it works

`.claude/settings.json` registers a `Stop` hook — a command Claude Code runs automatically each time it finishes a response:

```json
{
  "hooks": {
    "Stop": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "uv run /Users/phillipjohnson/Code/claude-code-crash-course/play_sound.py"
          }
        ]
      }
    ]
  }
}
```

Because the settings file lives in `.claude/settings.json` (project-level), the hook only fires when Claude Code is working inside this directory — not in other projects.

`play_sound.py` uses macOS's built-in `afplay` binary, so no audio libraries are required:

```python
import subprocess
from pathlib import Path

SOUND = Path(__file__).parent / "FinishedProcessing.wav"

def main():
    subprocess.run(["afplay", str(SOUND)], check=True)
```

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

#### Implementation

The MVP was implemented in response to this prompt:

> Can you please help me implement the main page as in @memory/specs/CLAUDE.md file. Can you create the implementation in the hookhub directory.

Files created:

| File | Purpose |
|------|---------|
| `app/data/hooks.ts` | Static seed data — 12 hooks with type definitions |
| `app/components/CategoryBadge.tsx` | Coloured pill badge per category |
| `app/components/HookCard.tsx` | Card component linking out to each hook's GitHub repo |
| `app/page.tsx` | Home page — header, responsive 1/2/3-column grid, footer |
| `app/layout.tsx` | Updated title and description metadata |
