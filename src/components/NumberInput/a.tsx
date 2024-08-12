import React, { useState } from "react";
import styles from "./NumberInput.module.css";
import dollar from "../../assets/dollar.svg";
import person from "../../assets/person.svg";
import "../../App.css";

interface NumberInputProps {
  value?: string;
  label: string;
  typeOfIcon: "dollar" | "person";
}

export function NumberInput(props: NumberInputProps) {
  const icon = props.typeOfIcon === "dollar" ? dollar : person;
  const [errorMsg, setErrorMsg] = useState("");
  function isNumber(value: string | undefined): boolean {
    return !isNaN(Number(value));
  }
  return (
    <div className={styles.container}>
      <label htmlFor="number-input" className={styles.label}>
        {props.label}
      </label>
      <div className={styles.parent}>
        <img
          src={icon}
          alt={`${props.typeOfIcon} icon`}
          className={styles.icon}
        />
        <input
          type="text"
          id="number-input"
          value={props.value}
          className={styles.numberInput}
          placeholder="0"
          onChange={(e) => {
            if (!isNumber(e.target.value) && e.target.value !== "") {
              setErrorMsg("The value is not a number");
            } else if (parseInt(e.target.value) < 0) {
              setErrorMsg("The value is negative");
            } else {
              setErrorMsg("");
            }
          }}
        />
      </div>
      <div className={styles.error}>{errorMsg}</div>
    </div>
  );
}
