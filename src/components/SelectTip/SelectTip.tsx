import React, { ChangeEvent, useState, useEffect } from "react";
import styles from "./SelectTip.module.css";

interface SelectTipProps {
  selectedTip: string;
  onSelect: (value: string) => void;
}

export function SelectTip({ selectedTip, onSelect }: SelectTipProps) {
  const [customTip, setCustomTip] = useState<string>("");

  // Focus the input field when "Custom" is selected
  useEffect(() => {
    if (selectedTip === "Custom") {
      const inputElement = document.getElementById(
        "custom-tip-input"
      ) as HTMLInputElement;
      inputElement?.focus();
    }
  }, [selectedTip]);

  const handleSelect = (value: string) => {
    if (value !== "Custom") {
      // setCustomTip(""); // Clear custom tip if another tip is selected
    }
    onSelect(value); // Update selected tip
  };

  const handleCustomChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomTip(value);

    if (selectedTip !== "Custom") {
      onSelect("Custom"); // Ensure that "Custom" is selected
    }

    // If the input is not empty, reflect the custom value in the selected tip
    if (value !== "") {
      onSelect(value);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Select Tip %</div>
      <div className={styles.buttonsContainer}>
        {["5%", "10%", "15%", "25%", "50%"].map((tip) => (
          <div
            key={tip}
            className={`${styles.button} ${
              selectedTip === tip ? styles.selected : ""
            }`}
            onClick={() => handleSelect(tip)}
          >
            {tip}
          </div>
        ))}
        <div className={styles.customButtonContainer}>
          {selectedTip === "Custom" ? (
            <input
              id="custom-tip-input"
              type="text"
              className={styles.customInput}
              value={customTip}
              onChange={handleCustomChange}
              // placeholder="Enter custom tip"
              autoFocus
              onClick={(e) => e.stopPropagation()} // Prevent input click from triggering handleSelect
            />
          ) : (
            <div
              className={`${styles.button} ${styles.custom}`}
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
