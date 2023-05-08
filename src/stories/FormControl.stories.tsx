import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Input, FormControl } from "../components";

const meta = {
  title: "FormControls/FormControl",
  component: FormControl,
  tags: ["autodocs"],
} satisfies Meta<typeof FormControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  //render: () => <Button>Primary</Button>,
  args: { id: "name", children: <Input /> },
};

export const Label: Story = {
  //render: () => <Button>Primary</Button>,
  args: { id: "name", label: "Full Name", children: <Input /> },
};

export const HelperText: Story = {
  //render: () => <Button>Primary</Button>,
  args: {
    id: "name",
    label: "Full Name",
    children: <Input />,
    helperText: "helper text goes here",
  },
};

export const Error: Story = {
  //render: () => <Button>Primary</Button>,
  args: {
    id: "name",
    children: <Input />,
    label: "Full Name",
    errorText: "Full Name is a required field",
  },
};
