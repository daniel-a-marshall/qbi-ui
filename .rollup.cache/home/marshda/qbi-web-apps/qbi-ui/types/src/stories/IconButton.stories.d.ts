import React from "react";
import { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<{
        children: React.ReactNode;
        as?: React.ElementType<any> | undefined;
        variant?: "light" | undefined;
    } & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLElement>>;
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Light: Story;
