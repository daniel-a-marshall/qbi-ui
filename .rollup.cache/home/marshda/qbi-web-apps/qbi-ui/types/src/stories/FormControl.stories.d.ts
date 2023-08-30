import { StoryObj } from "@storybook/react";
import { FormControl } from "../components";
declare const meta: {
    title: string;
    component: typeof FormControl;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Label: Story;
export declare const HelperText: Story;
export declare const Error: Story;
