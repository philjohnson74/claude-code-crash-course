import { hooks } from "./data/hooks";
import HookCard from "./components/HookCard";

export default function Home() {
  return (
    <div className="min-h-full bg-zinc-50">
      <header className="border-b border-zinc-200 bg-white px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900">
            HookHub
          </h1>
          <p className="mt-1 text-zinc-500">
            Discover open-source Claude Code hooks
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {hooks.map((hook) => (
            <HookCard key={hook.id} hook={hook} />
          ))}
        </div>
      </main>

      <footer className="border-t border-zinc-200 px-6 py-6 text-center text-sm text-zinc-400">
        <a
          href="https://github.com/philjohnson74/claude-code-crash-course"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-600 transition-colors"
        >
          View on GitHub
        </a>
        {" · "}
        Built with Claude Code
      </footer>
    </div>
  );
}
