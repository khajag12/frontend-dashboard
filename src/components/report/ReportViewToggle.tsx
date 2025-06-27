interface Props {
  view: "monthly" | "quarterly" | "yearly";
  setView: (v: "monthly" | "quarterly" | "yearly") => void;
}

export default function ReportViewToggle({ view, setView }: Props) {
  const views = ["monthly", "quarterly", "yearly"] as const;

  return (
    <div className="my-6 flex space-x-3 sm:space-x-4 justify-center">
      {views.map((v) => (
        <button
          key={v}
          onClick={() => setView(v)}
          className={`px-3 sm:px-4 py-2 rounded text-xs sm:text-sm md:text-base ${
            view === v
              ? "bg-[var(--color-bright)] text-[var(--color-darkgray)] font-bold"
              : "bg-[var(--color-darkgray)] text-[var(--color-lightbg)]"
          }`}
        >
          {v.charAt(0).toUpperCase() + v.slice(1)}
        </button>
      ))}
    </div>
  );
}
