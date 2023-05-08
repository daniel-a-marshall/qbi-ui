import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Select } from "../components";

const meta = {
  title: "Selects/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  //render: () => <Button>Primary</Button>,
  args: {
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  },
};
