"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ExpenseDonutChartProps {
  data: {
    name: string;
    values: number;
  }[];
}

export default function ExpenseDonutChart({ data }: ExpenseDonutChartProps) {
  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: data.map((item) => item.values),
        backgroundColor: generateColors(data.length),
        borderWidth: 1,
        borderColor: "#262626",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          color: "#262626",
          font: { size: 14 },
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `${context.label}: ${context.parsed}k`;
          },
        },
      },
    },
  };

  return <Doughnut data={chartData} options={options} />;
}

function generateColors(count: number) {
  const baseColors = ["#B09280", "#EAE62F", "#698AC5", "#262626", "#FBFAFA"];

  const colors = [];
  for (let i = 0; i < count; i++) {
    colors.push(baseColors[i % baseColors.length]);
  }
  return colors;
}
