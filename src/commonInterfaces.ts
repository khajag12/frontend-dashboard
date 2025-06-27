// For chart datasets
export interface ChartDataItem {
  chartType: string;
  name: string;
  values: number[]; // For line, bar, columnStacked charts
}

export interface DonutPieChartItem {
  chartType: "donut" | "pie";
  name: string;
  values: number; // Single value
}

export interface ProfitLossChartItem extends ChartDataItem {
  chartType: "columnStacked" | "line";
}

// For main dashboard charts
export interface MainDashboardCharts {
  cashAtBank: ChartDataItem[];
  expenseSplit: DonutPieChartItem[];
  indirectCashflow: (ChartDataItem | null)[];
  totalRevenuesSplit: DonutPieChartItem[];
  profitLossOverview: ProfitLossChartItem[];
  salariesSplit: unknown[]; // You can specify this if data is available
  ManpowerOperatingExpenses: unknown[]; // Same as above
}

// For top KPIs
export interface TopKPI {
  name: string;
  value: number;
  date?: string;
  mOm?: number;
  type?: string;
}

// For other KPIs
export interface KPI {
  name: string;
  value: number;
  mom: number;
  prefix: string;
}

// Main dashboard section
export interface MainDashboard {
  period: "monthly" | "quarterly" | "yearly";
  startDate: string;
  endDate: string;
  metricDate: string;
  dateArray: string[];
  charts: MainDashboardCharts;
}

// Full dashboard data structure
export interface DashboardData {
  mainDashboard: MainDashboard;
  mainDashboardKPIs: {
    topKPIs: TopKPI[];
    KPIs: KPI[];
  };
}
