import type { Meta, StoryObj } from "@storybook/react";
import { TipInput } from "./TipInput";
import { useState } from "react";

const meta: Meta<typeof TipInput> = {
  title: "App/TipInput",
  component: TipInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  render: (args) => {
    const [totalMoney, setTotalMoney] = useState<number>(args.totalMoney);
    const [numOfPeople, setNumOfPeople] = useState<number>(args.numOfPeople);
    const [tip, setTip] = useState<string>(args.tip);

    const handleValuesChange = (
      totalMoney: number,
      tip: string,
      numOfPeople: number
    ) => {
      setTotalMoney(totalMoney);
      setTip(tip);
      setNumOfPeople(numOfPeople);
    };

    return (
      <TipInput
        totalMoney={totalMoney}
        setTotalMoney={setTotalMoney}
        numOfPeople={numOfPeople}
        setNumOfPeople={setNumOfPeople}
        tip={tip}
        setTip={setTip}
        onValuesChange={handleValuesChange}
      />
    );
  },
  args: {
    totalMoney: 100,
    numOfPeople: 1,
    tip: "15%",
  },
  // Define controls for Storybook's UI
  argTypes: {
    totalMoney: {
      control: { type: "number" },
      description: "Total money for the bill",
    },
    numOfPeople: {
      control: { type: "number" },
      description: "Number of people to split the bill",
    },
    tip: {
      control: {
        type: "select",
        options: ["5%", "10%", "15%", "25%", "50%", "Custom"],
      },
      description: "Selected tip percentage",
    },
  },
};
