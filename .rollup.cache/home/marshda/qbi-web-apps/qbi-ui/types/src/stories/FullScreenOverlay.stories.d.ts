import { StoryObj } from "@storybook/react";
import { FullScreenOverlay } from "../components";
declare const meta: {
    title: string;
    component: typeof FullScreenOverlay;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
