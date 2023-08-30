import { Button } from "../components";
const meta = {
    title: "Buttons/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        children: { control: "text" },
        variant: { control: "text" },
        className: { control: "text" },
    },
    args: {
        children: "Button",
    },
};
export default meta;
export const Primary = {
    //render: () => <Button>Primary</Button>,
    args: {
        children: "Primary",
    },
};
export const Outline = {
    //render: () => <Button>Primary</Button>,
    args: {
        variant: "outline",
        children: "Outline",
    },
};
export const Error = {
    //render: () => <Button>Primary</Button>,
    args: {
        variant: "error",
        children: "Error",
    },
};
// export const Secondary: Story = {
//   args: {
//     label: "Secondary",
//   },
// };
//# sourceMappingURL=Button.stories.js.map