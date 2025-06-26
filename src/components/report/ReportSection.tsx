import { useState } from "react";
import ReportField from "./ReportField";

interface Props {
  section: any;
  view: "monthly" | "quarterly" | "yearly";
}

export default function ReportSection({ section, view }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b py-3">
      <div
        className="cursor-pointer text-lg font-bold flex justify-between items-center"
        onClick={() => setExpanded(!expanded)}
      >
        <span>{section.name}</span>
        <span>{expanded ? "−" : "+"}</span>
      </div>

      {expanded && (
        <div className="mt-3 pl-4 space-y-2">
          {section.fields?.map((field: any, i: number) => (
            <ReportField key={i} field={field} view={view} />
          ))}
        </div>
      )}
    </div>
  );
}
