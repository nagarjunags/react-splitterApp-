import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { TipCalculatorDisplay } from "./TipCalculatorDisplay";

const meta: Meta<typeof TipCalculatorDisplay> = {
  title: "App/BillDisplay",
  component: TipCalculatorDisplay,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
