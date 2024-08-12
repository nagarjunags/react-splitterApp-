import React, { useState } from "react";
import styles from "./Calculator.module.css";

import { TipInput } from "../TipInput/TipInput";
import { TipCalculatorDisplay } from "../BillDisplay/TipCalculatorDisplay";

// interface State { // only using three states since others are the derived states
//   billAmount: number;
//   tipSelected: string;
//   numberOfPeople: number;
// }

// interface Action {

// }

interface CalculatorProps {
  // Define your props here
}

export function Calculator(Props: CalculatorProps) {
  const [totalMoney, setTotalMoney] = useState(0);
  const handleReset = () => {
    // Handle the reset logic here
  };

  return (
    <div className={`${styles.container} `}>
      <div className={`${styles.half} ${styles.input}`}>
        <TipInput onValuesChange={() => {}} />
      </div>
      <div className={styles.half}>
        <TipCalculatorDisplay
          tipAmount={0}
          totalAmount={0}
          onReset={handleReset}
        />
      </div>
    </div>
  );
}
