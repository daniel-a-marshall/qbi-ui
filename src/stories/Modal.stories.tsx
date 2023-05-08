import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, Modal } from "../components";

const meta = {
  title: "Misc/Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  //@ts-ignore
  args: {},
  render: args => {
    const [show, setShow] = React.useState(false);

    return (
      <>
        <Button onClick={() => setShow(true)}>Open Modal</Button>
        {show && (
          <Modal onClose={() => setShow(false)}>
            <h1 className="font-heading text-2xl font-bold">Modal Title</h1>
            <p className="mt-4">Modal body goes here</p>
          </Modal>
        )}
      </>
    );
  },
};
