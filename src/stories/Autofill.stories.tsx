import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { AutoFill } from "../components";

const meta = {
  title: "Selects/AutoFill",
  component: AutoFill,
  tags: ["autodocs"],
} satisfies Meta<typeof AutoFill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  //render: () => <Button>Primary</Button>,
  args: {
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  },
};
