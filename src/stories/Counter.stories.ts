import { Meta, StoryObj } from "@storybook/react";
import { Counter } from "../components/Counter";
import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof Counter>;
const meta: Meta<StoryProps> = {
  component: Counter,
};
export default meta;

type Story = StoryObj<StoryProps>;

export const DefaultCounter: Story = {
  args: { initialNum: 5, onNumChange: () => {} },
};
