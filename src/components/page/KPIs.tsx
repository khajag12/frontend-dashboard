"use client";

interface KPI {
  name: string;
  value: number;
  date?: string;
  mOm?: number; // or mom (handle both)
  mom?: number;
  prefix?: string;
  type?: string;
}

interface KPIsProps {
  topKPIs: KPI[];
  KPIs: KPI[];
}

export default function KPIs({ topKPIs, KPIs }: KPIsProps) {
  // Helper to format numbers as currency or simple number
  function formatValue(value: number) {
    if (Math.abs(value) >= 1000) {
      return value.toLocaleString(undefined, { maximumFractionDigits: 2 });
    }
    return value.toFixed(2);
  }

  // Helper to format % change with color
  function formatChange(change?: number) {
    if (change === undefined) return null;
    const isPositive = change >= 0;
    return (
      <span
        className={`ml-2 font-semibold ${
          isPositive ? "text-green-600" : "text-red-600"
        }`}
      >
        {isPositive ? "▲" : "▼"} {Math.abs(change).toFixed(2)}%
      </span>
    );
  }

  return (
    <section className="space-y-8 p-6 bg-[#FBFAFA] rounded-md shadow-md">
      {/* Top KPIs */}
      <div>
        <h2 className="text-xl font-bold mb-4 text-[#262626]">Top KPIs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {topKPIs.map(({ name, value, date, mOm, mom, prefix }, idx) => (
            <div
              key={idx}
              className="p-4 bg-[#262626] text-[#FBFAFA] rounded-lg flex flex-col"
            >
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-2xl font-bold">
                {formatValue(value)} {prefix || ""}
              </p>
              {date && <p className="text-sm text-gray-400">{date}</p>}
              {formatChange(mOm ?? mom)}
            </div>
          ))}
        </div>
      </div>

      {/* Other KPIs */}
      <div>
        <h2 className="text-xl font-bold mb-4 text-[#262626]">Other KPIs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {KPIs.map(({ name, value, mom, prefix }, idx) => (
            <div
              key={idx}
              className="p-4 bg-[#B09280] text-[#262626] rounded-lg flex flex-col"
            >
              <h3 className="text-lg font-semibold">{name}</h3>
              <p className="text-2xl font-bold">
                {formatValue(value)} {prefix || ""}
              </p>
              {formatChange(mom)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
