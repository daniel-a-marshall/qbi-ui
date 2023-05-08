import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Menu, MenuButton, MenuItem, MenuList } from "../components";

const meta = {
  title: "Misc/Menu",
  component: Menu,
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  //@ts-ignore
  args: {},
  render: () => (
    <Menu>
      <MenuButton>Open</MenuButton>
      <MenuList>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </MenuList>
    </Menu>
  ),
};
