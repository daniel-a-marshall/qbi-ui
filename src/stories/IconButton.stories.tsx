import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import IconButton from "../components/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const meta = {
  title: "Buttons/IconButton",
  component: IconButton,
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const Icon = <FontAwesomeIcon icon={faPaperPlane} />;

export const Primary: Story = {
  //render: () => <Button>Primary</Button>,
  args: {
    children: Icon,
  },
};

export const Light: Story = {
  //render: () => <Button>Primary</Button>,
  args: {
    variant: "light",
    children: Icon,
  },
  render: () => (
    <div
      style={{ background: "#333", padding: "1rem ", borderRadius: "0.25rem" }}
    >
      <IconButton variant="light">
        <FontAwesomeIcon icon={faPaperPlane} />
      </IconButton>
    </div>
  ),
};
