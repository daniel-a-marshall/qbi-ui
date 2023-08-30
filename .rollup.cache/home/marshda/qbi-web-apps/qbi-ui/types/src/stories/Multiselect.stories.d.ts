import { StoryObj } from "@storybook/react";
import { Multiselect } from "../components";
declare const meta: {
    title: string;
    component: typeof Multiselect;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
