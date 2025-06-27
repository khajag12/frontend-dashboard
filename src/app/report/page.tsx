"use client";

import { useState, useMemo } from "react";
import report from "@/data/report.json";
import ReportViewToggle from "@/components/report/ReportViewToggle";
import ReportSection from "@/components/report/ReportSection";

export default function Report() {
  const [view, setView] = useState<"monthly" | "quarterly" | "yearly">(
    "monthly"
  );
  const data = report.reportResult.profitnLoss;

  const labels = useMemo(() => {
    const createdAt = data[0]?.fields?.[0]?.actualData?.[0]?.createdAt;
    const values = data[0]?.fields?.[0]?.actualData?.[0]?.value ?? [];
    const date = createdAt ? new Date(createdAt) : new Date();

    const monthly: string[] = [];
    const quarterly: string[] = [];
    const yearly: string[] = [];

    for (let i = 0; i < values.length; i++) {
      const label = date.toLocaleString("default", {
        month: "long",
        year: "numeric",
      });
      monthly.push(label);

      if (i % 3 === 0) {
        const quarter = `Q${
          Math.floor(date.getMonth() / 3) + 1
        } ${date.getFullYear()}`;
        quarterly.push(quarter);
      }

      if (i % 12 === 0) {
        yearly.push(date.getFullYear().toString());
      }

      date.setMonth(date.getMonth() + 1);
    }

    return { monthly, quarterly, yearly };
  }, [data]);

  return (
    <div className="p-6">
      <ReportViewToggle view={view} setView={setView} />
      {data.map((section, i) => (
        <ReportSection
          key={i}
          section={section}
          view={view}
          labels={labels[view]}
        />
      ))}
    </div>
  );
}
