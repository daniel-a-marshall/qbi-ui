import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Multiselect } from "../components";

const meta = {
  title: "Selects/Multiselect",
  component: Multiselect,
  tags: ["autodocs"],
} satisfies Meta<typeof Multiselect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    value: [],
  },
  render: args => {
    const [value, setValue] = React.useState<string[]>([]);

    return <Multiselect {...args} onChange={setValue} value={value} />;
  },
};
