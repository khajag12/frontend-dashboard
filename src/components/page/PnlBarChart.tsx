"use client";

import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
);

interface ProfitLossOverviewChartProps {
  dateArray: string[];
  dataSet: {
    chartType: string;
    name: string;
    values: number[];
  }[];
}

export default function PnlBarChart({
  dateArray,
  dataSet,
}: ProfitLossOverviewChartProps) {
  // Separate stacked bars and line datasets
  const stackedDatasets = dataSet.filter(
    (d) => d.chartType === "columnStacked"
  );
  const lineDatasets = dataSet.filter((d) => d.chartType === "line");

  // Prepare datasets for Chart.js
  const chartDatasets = [
    ...stackedDatasets.map((item, idx) => ({
      type: "bar" as const,
      label: item.name,
      data: item.values,
      backgroundColor: getColor(idx),
      stack: "stack1",
    })),
    ...lineDatasets.map((item) => ({
      type: "line" as const,
      label: item.name,
      data: item.values,
      borderColor: "#EAE62F",
      borderWidth: 2,
      fill: false,
      tension: 0.2,
      yAxisID: "y1",
    })),
  ];

  const options = {
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
        type: "category" as const,
        labels: dateArray,
        ticks: { maxRotation: 90, minRotation: 45 },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        position: "left" as const,
        title: {
          display: true,
          text: "Amount",
        },
      },
      y1: {
        beginAtZero: true,
        position: "right" as const,
        grid: {
          drawOnChartArea: false,
        },
        title: {
          display: true,
          text: "Net Income/(Loss)",
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        mode: "index" as const,
        intersect: false,
      },
    },
  };

  const chartData = {
    labels: dateArray,
    datasets: chartDatasets,
  };

  return <Chart type="bar" data={chartData} options={options} />;
}

const colors = ["#B09280", "#698AC5", "#EAE62F", "#262626"];
function getColor(idx: number) {
  return colors[idx % colors.length];
}
