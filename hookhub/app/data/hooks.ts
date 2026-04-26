export type Category =
  | "safety"
  | "formatting"
  | "testing"
  | "notifications"
  | "logging"
  | "git"
  | "other";

export type Hook = {
  id: string;
  name: string;
  category: Category;
  description: string;
  repoUrl: string;
};

export const hooks: Hook[] = [
  {
    id: "claude-code-hooks-collection",
    name: "Claude Code Hooks Collection",
    category: "other",
    description:
      "A growing collection of useful Claude Code hooks covering safety, automation, and notifications. Copy, paste, and customize.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
  },
  {
    id: "hooks-mastery",
    name: "Claude Code Hooks Mastery",
    category: "logging",
    description:
      "Comprehensive coverage of all 13 Claude Code hook lifecycle events with logging, including PreToolUse, SubagentStop, PreCompact, and SessionStart.",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
  },
  {
    id: "auto-format-prettier",
    name: "Auto-format with Prettier",
    category: "formatting",
    description:
      "PostToolUse hook that automatically runs Prettier on any file Claude writes or edits, keeping code style consistent without manual intervention.",
    repoUrl: "https://github.com/ChrisWiles/claude-code-showcase",
  },
  {
    id: "block-main-branch-edits",
    name: "Block Main Branch Edits",
    category: "git",
    description:
      "PreToolUse hook that prevents Claude from directly editing files on the main branch, enforcing a branch-based workflow.",
    repoUrl: "https://github.com/ChrisWiles/claude-code-showcase",
  },
  {
    id: "run-tests-on-change",
    name: "Run Tests on Change",
    category: "testing",
    description:
      "PostToolUse hook that triggers the test suite whenever Claude modifies a TypeScript or JavaScript source file.",
    repoUrl: "https://github.com/ChrisWiles/claude-code-showcase",
  },
  {
    id: "typecheck-on-edit",
    name: "TypeScript Type-check on Edit",
    category: "testing",
    description:
      "Runs tsc --noEmit after every file write so TypeScript errors surface immediately rather than at build time.",
    repoUrl: "https://github.com/ChrisWiles/claude-code-showcase",
  },
  {
    id: "bash-command-logger",
    name: "Bash Command Logger",
    category: "logging",
    description:
      "PreToolUse hook that appends every Bash command Claude runs to a local audit log file for review and debugging.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
  },
  {
    id: "dangerous-command-blocker",
    name: "Dangerous Command Blocker",
    category: "safety",
    description:
      "Intercepts Bash tool calls and blocks commands like rm -rf, git reset --hard, and other destructive operations before they execute.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
  },
  {
    id: "desktop-notification",
    name: "Desktop Notification on Stop",
    category: "notifications",
    description:
      "Stop hook that sends a macOS or Linux desktop notification when Claude finishes a task, so you can step away while it works.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
  },
  {
    id: "pre-push-lint",
    name: "Pre-push Lint Check",
    category: "git",
    description:
      "Runs ESLint before any git push Claude attempts, blocking the push if linting errors are found.",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
  },
  {
    id: "session-start-context",
    name: "Session Start Context Injector",
    category: "other",
    description:
      "SessionStart hook that injects project-specific context and reminders into Claude's system prompt at the start of every session.",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
  },
  {
    id: "env-file-guard",
    name: "Env File Guard",
    category: "safety",
    description:
      "Prevents Claude from reading or writing .env files containing secrets, blocking accidental exposure of API keys and credentials.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
  },
];
