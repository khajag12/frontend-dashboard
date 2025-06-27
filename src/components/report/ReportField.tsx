interface ActualDataItem {
  value: number[];
}

interface Field {
  name: string;
  actualData?: ActualDataItem[];
}
interface Props {
  field: Field;
  view: "monthly" | "quarterly" | "yearly";
  labels: string[];
}

export default function ReportField({ field, view, labels }: Props) {
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
  const groupLabels: string[] = [];

  for (let i = 0; i < values.length; i += chunkSize) {
    const groupSum = values.slice(i, i + chunkSize).reduce((a, b) => a + b, 0);
    grouped.push(groupSum);
    groupLabels.push(
      labels[Math.floor(i / chunkSize)] || `Period ${i / chunkSize + 1}`
    );
  }

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
            <span>{groupLabels[i]}</span>
            <span className="font-mono">{val.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
