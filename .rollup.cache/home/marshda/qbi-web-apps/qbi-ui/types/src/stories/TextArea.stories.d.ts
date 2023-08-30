import { StoryObj } from "@storybook/react";
import { TextArea } from "../components";
declare const meta: {
    title: string;
    component: typeof TextArea;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
