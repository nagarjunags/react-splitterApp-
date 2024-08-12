import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { NumberInput } from "./NumberInput";

const meta: Meta<typeof NumberInput> = {
  title: "App/NumberInput",
  component: NumberInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    TypeOfIcon: "person",
    value: 0,
    label: "Bill",
    checkInput: function (num) {
      console.log(num);
      if (num <= 0) return { isWarning: true, warningMessage: "Error" };
      return { isWarning: false, warningMessage: "" };
    },
  },
};
