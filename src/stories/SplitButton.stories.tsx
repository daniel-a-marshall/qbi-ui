import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SplitButton from "../components/SplitButton";
import { MenuItem, MenuList } from "../components/Menu";

const meta = {
  title: "Buttons/SplitButton",
  component: SplitButton,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    variant: { control: "text" },
    children: { control: "text" },
  },
  args: {
    label: "Button",
  },
} satisfies Meta<typeof SplitButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  //render: () => <Button>Primary</Button>,
  args: {
    label: "Click Me",
    children: (
      <MenuList>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </MenuList>
    ),
  },
};

// export const Secondary: Story = {
//   args: {
//     label: "Secondary",
//   },
// };
