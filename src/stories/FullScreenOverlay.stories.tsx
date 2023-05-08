import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, FullScreenOverlay } from "../components";

const meta = {
  title: "Misc/FullScreenOverlay",
  component: FullScreenOverlay,
  tags: ["autodocs"],
} satisfies Meta<typeof FullScreenOverlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  //@ts-ignore
  args: {},
  render: args => {
    const [show, setShow] = React.useState(false);

    return (
      <>
        <Button onClick={() => setShow(true)}>Click to show overlay</Button>
        {show && (
          <FullScreenOverlay onClose={() => setShow(false)}>
            <div className="rounded p-8 bg-black text-white max-w-[40ch]">
              <p>
                This is an overlay it will put a gray tint over the screen. If
                you click on the backgroud it will close the overlay.
              </p>
            </div>
          </FullScreenOverlay>
        )}
      </>
    );
  },
};
