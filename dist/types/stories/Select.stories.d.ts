import { StoryObj } from "@storybook/react";
import { Select } from "../components";
declare const meta: {
    title: string;
    component: typeof Select;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
