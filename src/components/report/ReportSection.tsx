"use client";
import { useState } from "react";
import ReportField from "./ReportField";

interface ActualDataItem {
  value: number[];
}

interface Field {
  name: string;
  actualData?: ActualDataItem[];
}

interface Section {
  name: string;
  fields?: Field[];
}

interface Props {
  section: Section;
  view: "monthly" | "quarterly" | "yearly";
  labels: string[];
}

export default function ReportSection({ section, view, labels }: Props) {
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
          {section.fields?.map((field, i) => (
            <ReportField key={i} field={field} view={view} labels={labels} />
          ))}
        </div>
      )}
    </div>
  );
}
