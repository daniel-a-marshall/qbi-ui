import { StoryObj } from "@storybook/react";
import { SplitButton } from "../components";
declare const meta: {
    title: string;
    component: typeof SplitButton;
    tags: string[];
    argTypes: {
        label: {
            control: string;
        };
        variant: {
            control: string;
        };
        children: {
            control: string;
        };
    };
    args: {
        label: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
