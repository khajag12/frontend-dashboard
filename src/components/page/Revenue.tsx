import RevenuePieChart from "./RevenuePieChart";

interface RevenuePieChartProps {
  data: {
    name: string;
    values: number;
  }[];
}
const Revenue = ({ data }: RevenuePieChartProps) => {
  return (
    <div className="max-w-[300px] mx-auto">
      <h2 className="text-2xl font-bold text-[var(--color-darkgray)]">
        Revenue
      </h2>
      <RevenuePieChart data={data} />
    </div>
  );
};

export default Revenue;
