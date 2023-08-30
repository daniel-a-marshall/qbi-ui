import React from "react";
import { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: React.ForwardRefExoticComponent<{
        children: React.ReactNode;
        as?: React.ElementType<any> | undefined;
        variant?: "outline" | "error" | undefined;
    } & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLElement>>;
    tags: string[];
    argTypes: {
        children: {
            control: string;
        };
        variant: {
            control: string;
        };
        className: {
            control: string;
        };
    };
    args: {
        children: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Outline: Story;
export declare const Error: Story;
