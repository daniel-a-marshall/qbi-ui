import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components";

const meta = {
  title: "FormControls/Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  //render: () => <Button>Primary</Button>,
  args: {},
};
