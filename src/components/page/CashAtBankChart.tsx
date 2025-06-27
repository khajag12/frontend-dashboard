"use client";

import { ChartDataItem } from "@/commonInterfaces";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

interface CashAtBankProps {
  dateArray: string[];
  dataSet: ChartDataItem[];
}

export default function CashAtBankChart({
  dateArray,
  dataSet,
}: CashAtBankProps) {
  const chartData = {
    labels: dateArray,
    datasets: dataSet.map((item: ChartDataItem) => ({
      label: item.name,
      data: item.values,
      fill: false,
      borderColor: getColor(item.name),
      tension: 0.2,
    })),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      x: {
        type: "category" as const,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

function getColor(name: string) {
  const map: Record<string, string> = {
    Cash: "#698AC5",
    Checking: "#EAE62F",
    Savings: "#B09280",
    "Other Current Assets": "#FBFAFA",
    "Fixed Assets": "#262626",
  };
  return map[name] || "#ccc";
}
