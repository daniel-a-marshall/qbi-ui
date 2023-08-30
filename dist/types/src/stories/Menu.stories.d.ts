import { StoryObj } from "@storybook/react";
import { Menu } from "../components";
declare const meta: {
    title: string;
    component: typeof Menu;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
