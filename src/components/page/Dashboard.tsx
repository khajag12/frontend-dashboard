"use client";
import ExpensesSplit from "@/components/page/ExpensesSplit";
import CashAtBank from "./CashAtBank";
import dashboardDataMonthly from "../../data/monthly.json";
import dashboardDataQuarterly from "../../data/quarterly.json";
import dashboardDataYearly from "../../data/yearly.json";
import Revenue from "@/components/page/Revenue";
import PNL from "@/components/page/PNL";
import KPIs from "@/components/page/KPIs";
import { useState } from "react";

const Dashboard = () => {
  const [period, setPeriod] = useState<"monthly" | "quarterly" | "yearly">(
    "monthly"
  );
  const dashboardData =
    period === "monthly"
      ? dashboardDataMonthly
      : period === "quarterly"
      ? dashboardDataQuarterly
      : dashboardDataYearly;
  return (
    <main>
      <div className="my-6 flex space-x-4 justify-center">
        {["monthly", "quarterly", "yearly"].map((p) => (
          <button
            key={p}
            onClick={() => setPeriod(p as "monthly" | "quarterly" | "yearly")}
            className={`px-4 py-2 rounded ${
              period === p
                ? "bg-[var(--color-bright)] text-[var(--color-darkgray)] font-bold"
                : "bg-[var(--color-darkgray)] text-[var(--color-lightbg)]"
            }`}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </div>
      <div className="px-4 py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <CashAtBank
          dataSet={dashboardData.mainDashboard.charts.cashAtBank}
          dateArray={dashboardData.mainDashboard.dateArray}
        />
        <ExpensesSplit data={dashboardData.mainDashboard.charts.expenseSplit} />
        <Revenue data={dashboardData.mainDashboard.charts.totalRevenuesSplit} />
        <PNL
          dateArray={dashboardData.mainDashboard.dateArray}
          dataSet={dashboardData.mainDashboard.charts.profitLossOverview}
        />
        <div className="md:col-span-2">
          <KPIs
            topKPIs={dashboardData.mainDashboardKPIs.topKPIs}
            KPIs={dashboardData.mainDashboardKPIs.KPIs}
          />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
