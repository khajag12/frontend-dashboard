import { ChartDataItem } from "@/commonInterfaces";
import CashAtBankChart from "./CashAtBankChart";

interface CashAtBankProps {
  dateArray: string[];
  dataSet: ChartDataItem[];
}

export default function CashAtBank({ dateArray, dataSet }: CashAtBankProps) {
  return (
    <div className="space-y-8 max-w-[400px] mx-auto">
      <h2 className="text-2xl font-bold text-[var(--color-darkgray)]">
        Cash At Bank
      </h2>
      <CashAtBankChart dateArray={dateArray} dataSet={dataSet} />
    </div>
  );
}
