import { StoryObj } from "@storybook/react";
import { CircleSpinner } from "../components";
declare const meta: {
    title: string;
    component: typeof CircleSpinner;
    tags: string[];
    argTypes: {
        color: {
            control: string;
        };
        background: {
            control: string;
        };
        className: {
            control: string;
        };
    };
    args: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
