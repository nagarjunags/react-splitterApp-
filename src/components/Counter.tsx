import { useState, useEffect } from "react";
import { Fragment } from "react/jsx-runtime";
import "./Counter.css";

export const Counter = ({
  initialNum,
  onNumChange,
}: {
  initialNum: number;
  onNumChange: (newNum: number) => void;
}) => {
  const [num, setNum] = useState(initialNum);

  useEffect(() => {
    onNumChange(num);
  }, [num]);

  const increment = () => {
    setNum((prevNum) => prevNum + 1);
  };

  const decrement = () => {
    setNum((prevNum) => prevNum - 1);
  };

  return (
    <Fragment>
      <div
        className={`widget`}
        style={{
          backgroundColor: "blue",
          borderLeft: `4px solid black`,
          borderRadius: 10,
        }}
      >
        <p>{num}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <br></br>
    </Fragment>
  );
};
