import type { Hook } from "../data/hooks";
import CategoryBadge from "./CategoryBadge";

export default function HookCard({ hook }: { hook: Hook }) {
  return (
    <a
      href={hook.repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-zinc-300 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-base font-semibold text-zinc-900 group-hover:text-zinc-600 transition-colors">
          {hook.name}
        </h2>
        <CategoryBadge category={hook.category} />
      </div>
      <p className="line-clamp-2 text-sm leading-relaxed text-zinc-500">
        {hook.description}
      </p>
      <span className="mt-auto text-sm font-medium text-zinc-400 group-hover:text-zinc-600 transition-colors">
        View on GitHub →
      </span>
    </a>
  );
}
