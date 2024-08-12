import React, { ChangeEvent } from "react";
import styles from "./NumberInput.module.css";
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
    <div className={styles.inputContainer}>
      <label htmlFor="number-input" className={styles.label}>
        {label}
      </label>

      <div className={styles.inputWrapper}>
        <img src={icon} alt={`${TypeOfIcon} icon`} className={styles.icon} />
        <input
          type="text"
          id="number-input"
          className={styles.numberInput}
          value={value.toString()}
          onChange={handleChange}
        />
      </div>

      {/* Error message with minimum height */}
      <span
        className={`${styles.warning} ${errorMessage ? styles.visible : styles.hidden}`}
      >
        {errorMessage}
      </span>
    </div>
  );
}
