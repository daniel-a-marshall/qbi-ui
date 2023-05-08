import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../components";

const meta = {
  title: "Misc/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  //render: () => <Button>Primary</Button>,
  args: { imageUrl: "https://i.pravatar.cc/300" },
};

export const NoImageUrl: Story = {
  //render: () => <Button>Primary</Button>,
  args: { alt: "User" },
};

export const FallbackText: Story = {
  //render: () => <Button>Primary</Button>,
  args: { imageUrl: "./fake-image", alt: "U" },
};
