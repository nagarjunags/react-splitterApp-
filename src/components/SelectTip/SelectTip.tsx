import React, { ChangeEvent, useState, useEffect } from "react";

interface SelectTipProps {
  selectedTip: string;
  onSelect: (value: string) => void;
}

export function SelectTip({ selectedTip, onSelect }: SelectTipProps) {
  const [customTip, setCustomTip] = useState<string>("");

  useEffect(() => {
    if (selectedTip === "Custom") {
      const inputElement = document.getElementById(
        "custom-tip-input"
      ) as HTMLInputElement;
      inputElement?.focus();
    }
  }, [selectedTip]);

  const handleSelect = (value: string) => {
    onSelect(value);
  };

  const handleCustomChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomTip(value);

    if (selectedTip !== "Custom") {
      onSelect("Custom");
    }

    if (value !== "") {
      onSelect(value);
    }
  };

  return (
    <div className="w-full p-4 bg-white box-border">
      <div className="mb-4 text-2xl font-bold tracking-wider text-gray-600 md:text-xl">
        Select Tip %
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3">
        {["5%", "10%", "15%", "25%", "50%"].map((tip) => (
          <div
            key={tip}
            className={`flex justify-center items-center w-full h-16 rounded-md font-bold text-2xl cursor-pointer transition-colors duration-300 md:h-12 md:text-xl sm:h-10 sm:text-lg ${
              selectedTip === tip
                ? "bg-teal-700 text-white"
                : "bg-teal-900 text-white"
            }`}
            onClick={() => handleSelect(tip)}
          >
            {tip}
          </div>
        ))}
        <div className="flex justify-center items-center w-full">
          {selectedTip === "Custom" ? (
            <input
              id="custom-tip-input"
              type="text"
              className="w-full h-16 p-2 text-right border-2 border-teal-900 rounded-md font-bold text-xl md:h-12 md:text-lg sm:h-10 sm:text-base"
              value={customTip}
              onChange={handleCustomChange}
              autoFocus
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <div
              className={`flex justify-center items-center w-full h-16 rounded-md font-bold text-xl cursor-pointer md:h-12 sm:h-10 sm:text-base ${
                selectedTip === "Custom"
                  ? "bg-teal-700 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => handleSelect("Custom")}
            >
              Custom
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
