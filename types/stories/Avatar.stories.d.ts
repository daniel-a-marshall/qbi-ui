import { StoryObj } from "@storybook/react";
import { Avatar } from "../components";
declare const meta: {
    title: string;
    component: typeof Avatar;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const NoImageUrl: Story;
export declare const FallbackText: Story;
