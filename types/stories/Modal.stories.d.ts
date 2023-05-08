import { StoryObj } from "@storybook/react";
import { Modal } from "../components";
declare const meta: {
    title: string;
    component: typeof Modal;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
