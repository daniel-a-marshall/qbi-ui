import { StoryObj } from "@storybook/react";
import { Input } from "../components";
declare const meta: {
    title: string;
    component: typeof Input;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
