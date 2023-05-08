import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "../components";

const meta = {
  title: "FormControls/TextArea",
  component: TextArea,
  tags: ["autodocs"],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  //render: () => <Button>Primary</Button>,
  args: {},
};
