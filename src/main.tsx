import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TipInput } from "./components/TipInput/TipInput";
import { TipCalculatorDisplay } from "./components/BillDisplay/TipCalculatorDisplay";
import styles from "./components/Calculator/Calculator.module.css";

// Action types
const UPDATE_TOTAL_MONEY = "UPDATE_TOTAL_MONEY";
const UPDATE_NUM_OF_PEOPLE = "UPDATE_NUM_OF_PEOPLE";
const UPDATE_TIP = "UPDATE_TIP";
const RESET_VALUES = "RESET_VALUES";

// Initial state
const initialState = {
  totalMoney: 0,
  numOfPeople: 1,
  tip: "0%",
};

// Reducer function
function reducer(state: typeof initialState, action: any) {
  switch (action.type) {
    case UPDATE_TOTAL_MONEY:
      return { ...state, totalMoney: action.payload };
    case UPDATE_NUM_OF_PEOPLE:
      return { ...state, numOfPeople: action.payload };
    case UPDATE_TIP:
      return { ...state, tip: action.payload };
    case RESET_VALUES:
      return initialState;
    default:
      return state;
  }
}

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleValuesChange = (
    newTotalMoney: number,
    newTip: string,
    newNumOfPeople: number
  ) => {
    dispatch({ type: UPDATE_TOTAL_MONEY, payload: newTotalMoney });
    dispatch({ type: UPDATE_TIP, payload: newTip });
    dispatch({ type: UPDATE_NUM_OF_PEOPLE, payload: newNumOfPeople });
  };

  const resetValues = () => {
    dispatch({ type: RESET_VALUES });
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.half} ${styles.input}`}>
        <TipInput
          totalMoney={state.totalMoney}
          setTotalMoney={(value: number) =>
            dispatch({ type: UPDATE_TOTAL_MONEY, payload: value })
          }
          numOfPeople={state.numOfPeople}
          setNumOfPeople={(value: number) =>
            dispatch({ type: UPDATE_NUM_OF_PEOPLE, payload: value })
          }
          tip={state.tip}
          setTip={(value: string) =>
            dispatch({ type: UPDATE_TIP, payload: value })
          }
          onValuesChange={handleValuesChange}
        />
      </div>
      <div className={`${styles.half} ${styles.tipCalculatorDisplay}`}>
        <TipCalculatorDisplay
          tipAmount={calculateTipAmount(
            state.totalMoney,
            state.tip,
            state.numOfPeople
          )}
          totalAmount={calculateTotalAmount(
            state.totalMoney,
            state.tip,
            state.numOfPeople
          )}
          onReset={resetValues}
        />
      </div>
    </div>
  );
}

const calculateTipAmount = (
  totalMoney: number,
  tip: string,
  numOfPeople: number
) => {
  const tipPercentage = parseFloat(tip.replace("%", "")) / 100;
  return (totalMoney * tipPercentage) / numOfPeople;
};

const calculateTotalAmount = (
  totalMoney: number,
  tip: string,
  numOfPeople: number
) => {
  return totalMoney + calculateTipAmount(totalMoney, tip, numOfPeople);
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
