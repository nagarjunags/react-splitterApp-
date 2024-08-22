import React, { ChangeEvent } from "react";
import dollar from "../../assets/dollar.svg";
import person from "../../assets/person.svg";

interface NumberInputProps {
  TypeOfIcon: "person" | "dollar";
  value: number;
  setValue: (value: number) => void;
  label: string;
  errorMessage?: string; // Optional error message prop
}

export function NumberInput(props: NumberInputProps) {
  const { TypeOfIcon, value, setValue, label, errorMessage = " " } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  const icon = TypeOfIcon === "dollar" ? dollar : person;

  return (
    <div className="w-full h-16 font-mono bg-white">
      <label
        htmlFor="number-input"
        className="block mb-2 text-lg font-bold tracking-wide text-gray-600"
      >
        {label}
      </label>

      <div className="relative flex items-center justify-between w-full h-16 bg-[#f3f8fb] rounded-md">
        <img
          src={icon}
          alt={`${TypeOfIcon} icon`}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 text-[#9fb3b2] text-2xl"
        />
        <input
          type="text"
          id="number-input"
          className="w-full h-full pl-12 pr-5 text-2xl font-bold text-right text-[#084643] bg-transparent border-none outline-none"
          value={value.toString()}
          onChange={handleChange}
        />
      </div>

      {/* Error message with minimum height */}
      <span
        className={`block mt-3 text-sm font-bold tracking-wide text-[#d6765d] min-h-[30px] transition-opacity duration-300 ${
          errorMessage ? "opacity-100" : "opacity-0"
        }`}
      >
        {errorMessage}
      </span>
    </div>
  );
}
