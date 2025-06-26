"use client";

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

export default function CashAtBankChart({ dateArray, dataSet }: any) {
  const chartData = {
    labels: dateArray,
    datasets: dataSet.map((item: any) => ({
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
  const map: any = {
    Cash: "#698AC5",
    Checking: "#EAE62F",
    Savings: "#B09280",
    "Other Current Assets": "#FBFAFA",
    "Fixed Assets": "#262626",
  };
  return map[name] || "#ccc";
}
