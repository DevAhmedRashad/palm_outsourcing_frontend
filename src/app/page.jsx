import TaskCard from "@/components/TaskCard";
import { getTasks } from "@/lib/api";

export default async function HomePage() {
  let tasks = [];
  try {
    tasks = await getTasks(); // returns an array (handles {data: []} too if you used my api.js)
  } catch (err) {
    return (
      <main className="mx-auto max-w-7xl p-6">
        <h1 className="mb-6 text-3xl font-bold tracking-tight">Tasks</h1>
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {err.message || "Failed to load tasks."}
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl p-6">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">Tasks</h1>

      {/* 3 columns on large screens, responsive down to 1 */}
      <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {tasks.map((t) => (
          <TaskCard key={t.id} task={t} />
        ))}
      </ul>
    </main>
  );
}
