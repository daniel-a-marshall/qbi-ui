import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";

const meta = {
  title: "Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    variant: { control: "text" },
    className: { control: "text" },
  },
  args: {
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  //render: () => <Button>Primary</Button>,
  args: {
    children: "Primary",
  },
};

export const Outline: Story = {
  //render: () => <Button>Primary</Button>,
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Error: Story = {
  //render: () => <Button>Primary</Button>,
  args: {
    variant: "error",
    children: "Error",
  },
};

// export const Secondary: Story = {
//   args: {
//     label: "Secondary",
//   },
// };
