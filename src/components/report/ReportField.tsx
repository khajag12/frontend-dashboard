interface Props {
  field: any;
  view: "monthly" | "quarterly" | "yearly";
}

export default function ReportField({ field, view }: Props) {
  const values = field?.actualData?.[0]?.value;

  if (!Array.isArray(values) || values.length === 0) {
    return (
      <div className="flex justify-between py-1 border-b border-dashed border-gray-300">
        <span>{field.name}</span>
        <span className="font-mono text-sm">N/A</span>
      </div>
    );
  }

  // Chunk values based on view
  const chunkSize = view === "monthly" ? 1 : view === "quarterly" ? 3 : 12;
  const grouped: number[] = [];

  for (let i = 0; i < values.length; i += chunkSize) {
    const groupSum = values.slice(i, i + chunkSize).reduce((a, b) => a + b, 0);
    grouped.push(groupSum);
  }

  // Label helpers
  const getLabel = (i: number) => {
    if (view === "monthly") return `Month ${i + 1}`;
    if (view === "quarterly") return `Q${i + 1}`;
    if (view === "yearly") return `Year ${i + 1}`;
    return `Period ${i + 1}`;
  };

  return (
    <div className="py-2 border-b">
      <div className="font-semibold mb-1">{field.name}</div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
        {grouped.map((val, i) => (
          <div
            key={i}
            className={`flex justify-between px-2 py-1 rounded ${
              val < 0 ? "text-red-600" : ""
            }`}
          >
            <span>{getLabel(i)}</span>
            <span className="font-mono">{val.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
