import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { CircleSpinner } from "../components";

const meta = {
  title: "Misc/CircleSpinner",
  component: CircleSpinner,
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    background: { control: "color" },
    className: { control: "text" },
  },
  args: {},
} satisfies Meta<typeof CircleSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  //render: () => <Button>Primary</Button>,
  args: {},
};
