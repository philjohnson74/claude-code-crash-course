import type { Category } from "../data/hooks";

const styles: Record<Category, string> = {
  safety: "bg-red-100 text-red-700",
  formatting: "bg-blue-100 text-blue-700",
  testing: "bg-green-100 text-green-700",
  notifications: "bg-yellow-100 text-yellow-700",
  logging: "bg-purple-100 text-purple-700",
  git: "bg-orange-100 text-orange-700",
  other: "bg-zinc-100 text-zinc-600",
};

export default function CategoryBadge({ category }: { category: Category }) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${styles[category]}`}
    >
      {category}
    </span>
  );
}
