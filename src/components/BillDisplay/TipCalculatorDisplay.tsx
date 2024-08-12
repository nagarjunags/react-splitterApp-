import React from "react";
import styles from "./TipCalculatorDisplay.module.css";

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
  if (tipAmount === 0) {
    tipAmount = "--";
  }
  if (totalAmount === 0) {
    totalAmount = "--";
  }
  return (
    <div className={styles.container}>
      <div className={styles.amountGroup}>
        <div className={styles.amountText}>
          <span className={styles.label}>Tip Amount</span>
          <span className={styles.perPerson}>/ person</span>
        </div>
        <span className={styles.amount}>
          {typeof tipAmount === "number" ? `$${tipAmount.toFixed(2)}` : "----"}
        </span>
      </div>
      <div className={styles.amountGroup}>
        <div className={styles.amountText}>
          <span className={styles.label}>Total</span>
          <span className={styles.perPerson}>/ person</span>
        </div>
        <span className={styles.amount}>
          {typeof totalAmount === "number"
            ? `$${totalAmount.toFixed(2)}`
            : "----"}
        </span>
      </div>
      <button className={styles.resetButton} onClick={onReset}>
        RESET
      </button>
    </div>
  );
};
