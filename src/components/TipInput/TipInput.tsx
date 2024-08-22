import React, { useEffect, useState } from "react";
import { NumberInput } from "../NumberInput/NumberInput";
import { SelectTip } from "../SelectTip/SelectTip";

interface TipInputProps {
  totalMoney: number;
  setTotalMoney: (value: number) => void;
  numOfPeople: number;
  setNumOfPeople: (value: number) => void;
  tip: number;
  setTip: (value: number) => void;
  onValuesChange: (
    totalMoney: number,
    tip: number,
    numOfPeople: number
  ) => void;
}

export function TipInput({
  totalMoney,
  setTotalMoney,
  numOfPeople,
  setNumOfPeople,
  tip,
  setTip,
  onValuesChange,
}: TipInputProps) {
  const [totalMoneyError, setTotalMoneyError] = useState("");
  const [numOfPeopleError, setNumOfPeopleError] = useState("");

  useEffect(() => {
    console.log("Values changed:");
    console.log("Total Money:", totalMoney);
    console.log("Tip:", tip);
    console.log("Number of People:", numOfPeople);

    onValuesChange(totalMoney, tip, numOfPeople);
  }, [totalMoney, tip, numOfPeople]);

  const handleTotalMoneyChange = (value: number) => {
    setTotalMoney(value);
    setTotalMoneyError(value < 0 ? "Total money cannot be negative." : "");
  };

  const handleNumOfPeopleChange = (value: number) => {
    setNumOfPeople(value);
    setNumOfPeopleError(
      value <= 0 ? "Number of people must be greater than zero." : ""
    );
  };

  return (
    <div className="bg-white w-full p-2.5 sm:p-0">
      {" "}
      {/* Added Tailwind classes */}
      <NumberInput
        TypeOfIcon="dollar"
        value={totalMoney}
        setValue={handleTotalMoneyChange}
        label="Bill"
        errorMessage={totalMoneyError}
      />
      <div className="h-[5.43rem]"></div> {/* Spacer 1 */}
      <SelectTip selectedTip={tip} onSelect={setTip} />
      <div className="h-[3.5rem]"></div> {/* Spacer 2 */}
      <NumberInput
        TypeOfIcon="person"
        value={numOfPeople}
        setValue={handleNumOfPeopleChange}
        label="Number of People"
        errorMessage={numOfPeopleError}
      />
    </div>
  );
}
