import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ChipInput } from "../components";

const meta = {
  title: "FormControls/ChipInput",
  component: ChipInput,
  tags: ["autodocs"],
} satisfies Meta<typeof ChipInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  //render: () => <Button>Primary</Button>,
  //@ts-ignore
  args: {},
  render: args => {
    const [value, setValue] = React.useState<string[]>([]);

    return <ChipInput onChange={setValue} value={value} />;
  },
};
