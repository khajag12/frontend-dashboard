interface Props {
  view: "monthly" | "quarterly" | "yearly";
  setView: (v: "monthly" | "quarterly" | "yearly") => void;
}

export default function ReportViewToggle({ view, setView }: Props) {
  const views = ["monthly", "quarterly", "yearly"] as const;

  return (
    <div className="mb-6 flex gap-3">
      {views.map((v) => (
        <button
          key={v}
          onClick={() => setView(v)}
          className={`px-4 py-2 rounded font-semibold ${
            view === v
              ? "bg-[var(--color-bright)] text-[var(--color-darkgray)]"
              : "bg-[var(--color-darkgray)] text-[var(--color-lightbg)]"
          }`}
        >
          {v.charAt(0).toUpperCase() + v.slice(1)}
        </button>
      ))}
    </div>
  );
}
