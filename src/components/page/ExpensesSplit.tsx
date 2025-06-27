import ExpenseDonutChart from "./ExpensesDonutChart";

interface ExpenseDonutChartProps {
  data: {
    name: string;
    values: number;
  }[];
}

const ExpensesSplit = ({ data }: ExpenseDonutChartProps) => {
  return (
    <div className="max-w-[300px] mx-auto">
      <h2 className="text-2xl font-bold text-[var(--color-darkgray)]">
        Expenses
      </h2>
      <ExpenseDonutChart data={data} />
    </div>
  );
};

export default ExpensesSplit;
