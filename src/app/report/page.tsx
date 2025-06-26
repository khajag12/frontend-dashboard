"use client";

import { useState } from "react";
import report from "@/data/report.json";
import ReportViewToggle from "@/components/report/ReportViewToggle";
import ReportSection from "@/components/report/ReportSection";

export default function Report() {
  const [view, setView] = useState<"monthly" | "quarterly" | "yearly">(
    "monthly"
  );
  const data = report.reportResult.profitnLoss;

  return (
    <div className="p-6">
      <ReportViewToggle view={view} setView={setView} />
      {data.map((section, i) => (
        <ReportSection key={i} section={section} view={view} />
      ))}
    </div>
  );
}
