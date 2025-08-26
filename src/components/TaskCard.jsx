export default function TaskCard({ task }) {
  const { title, description, status } = task;
  const s = String(status || "").toLowerCase().replace(/\s+/g, "");

  const chip =
    {
      pending: "border border-gray-300 bg-gray-100 text-gray-700",
      inprogress: "border border-yellow-300 bg-yellow-50 text-yellow-800",
      done: "border border-emerald-300 bg-emerald-50 text-emerald-700",
    }[s] || "border border-gray-300 bg-gray-100 text-gray-700";

  return (
    <li className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h2 className="text-base font-semibold leading-tight text-slate-900">
          {title}
        </h2>
        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${chip}`}>
          <Dot status={s} />
          {status}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-slate-600">{description}</p>
    </li>
  );
}

function Dot({ status }) {
  const color =
    status === "done"
      ? "bg-emerald-500"
      : status === "inprogress"
      ? "bg-yellow-400"
      : "bg-slate-400";
  return <span className={`inline-block h-1.5 w-1.5 rounded-full ${color}`} />;
}
