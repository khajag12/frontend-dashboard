import PnlBarChart from "./PnlBarChart";

interface ProfitLossOverviewChartProps {
  dateArray: string[];
  dataSet: {
    chartType: string;
    name: string;
    values: number[];
  }[];
}
const PNL = ({ dateArray, dataSet }: ProfitLossOverviewChartProps) => {
  return (
    <div className="space-y-8 max-w-[300px] mx-auto">
      <h2 className="text-2xl font-bold text-[var(--color-darkgray)]">
        Expenses
      </h2>
      <PnlBarChart dateArray={dateArray} dataSet={dataSet} />
    </div>
  );
};

export default PNL;
