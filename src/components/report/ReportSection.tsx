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

interface ReportSectionProps {
  section: Section;
  view: "monthly" | "quarterly" | "yearly";
  labels: string[];
}

export default function ReportSection({
  section,
  view,
  labels,
}: ReportSectionProps) {
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

      <div
        className={`mt-3 pl-4 space-y-2 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          expanded ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        {section.fields?.map((field, i) => (
          <ReportField key={i} field={field} view={view} labels={labels} />
        ))}
      </div>
    </div>
  );
}
