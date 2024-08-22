import React, { useEffect, useState } from "react";

interface TipCalculatorDisplayProps {
  tipAmount: number | string;
  totalAmount: number | string;
  onReset: () => void;
}

export const TipCalculatorDisplay: React.FC<TipCalculatorDisplayProps> = ({
  tipAmount = 0,
  totalAmount = 0,
  onReset,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleReset = () => {
    onReset();
    setIsDisabled(true);
  };

  useEffect(() => {
    if (tipAmount !== 0 || totalAmount !== 0) {
      setIsDisabled(false);
    }
  }, [tipAmount, totalAmount]);

  return (
    <div className="relative w-full h-full max-h-[490px] min-h-[350px] bg-teal-900 rounded-lg p-[5%] box-border">
      <div className="flex justify-between items-center mb-[10%]">
        <div className="flex flex-col">
          <span className="font-mono font-normal text-lg leading-[1.875rem] tracking-[0.1em] text-white min-w-[8.43rem]">
            Tip Amount
          </span>
          <span className="font-mono font-normal text-lg leading-[1.875rem] tracking-[0.1em] text-gray-400">
            / person
          </span>
        </div>
        <span className="font-mono font-bold text-3xl leading-[4.4375rem] text-right text-teal-500">
          {tipAmount !== 0 && typeof tipAmount === "number"
            ? `$${tipAmount.toFixed(2)}`
            : "----"}
        </span>
      </div>
      <div className="flex justify-between items-center mb-[10%]">
        <div className="flex flex-col">
          <span className="font-mono font-normal text-lg leading-[1.875rem] tracking-[0.1em] text-white min-w-[8.43rem]">
            Total
          </span>
          <span className="font-mono font-normal text-lg leading-[1.875rem] tracking-[0.1em] text-gray-400">
            / person
          </span>
        </div>
        <span className="font-mono font-bold text-3xl leading-[4.4375rem] text-right text-teal-500">
          {totalAmount !== 0 && typeof totalAmount === "number"
            ? `$${totalAmount.toFixed(2)}`
            : "----"}
        </span>
      </div>
      <button
        className={`absolute w-[90%] py-4 rounded-md border-none font-mono font-bold text-xl leading-[2.25rem] tracking-[0.1em] cursor-pointer bottom-[5%] left-1/2 transform -translate-x-1/2 box-border ${
          isDisabled
            ? "bg-[#0D686D] text-[#00474B] cursor-not-allowed"
            : "bg-[#2CC0AE] text-teal-900"
        }`}
        onClick={handleReset}
        disabled={isDisabled}
      >
        RESET
      </button>
    </div>
  );
};
