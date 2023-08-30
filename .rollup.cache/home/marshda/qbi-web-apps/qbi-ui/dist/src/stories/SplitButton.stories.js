import React from "react";
import { SplitButton } from "../components";
import { MenuItem, MenuList } from "../components";
const meta = {
    title: "Buttons/SplitButton",
    component: SplitButton,
    tags: ["autodocs"],
    argTypes: {
        label: { control: "text" },
        variant: { control: "text" },
        children: { control: "text" },
    },
    args: {
        label: "Button",
    },
};
export default meta;
export const Primary = {
    //render: () => <Button>Primary</Button>,
    args: {
        label: "Click Me",
        children: (React.createElement(MenuList, null,
            React.createElement(MenuItem, null, "Item 1"),
            React.createElement(MenuItem, null, "Item 2"),
            React.createElement(MenuItem, null, "Item 3"))),
    },
};
// export const Secondary: Story = {
//   args: {
//     label: "Secondary",
//   },
// };
//# sourceMappingURL=SplitButton.stories.js.map