import React, { useReducer } from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Make sure to import Tailwind styles here
import { TipInput } from "./components/TipInput/TipInput";
import { TipCalculatorDisplay } from "./components/BillDisplay/TipCalculatorDisplay";

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
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col  lg:flex-row gap-4 lg:gap-16 lg:w-full h-full max-h-[60rem] lg:max-h-[36rem] max-w-1100 bg-white p-8 rounded-20 box-border min-w-80">
      <div className="w-full l g:w-1/2 pb-[60px]">
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
      <div className="w-full lg:w-1/2 flex flex-col justify-between">
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
