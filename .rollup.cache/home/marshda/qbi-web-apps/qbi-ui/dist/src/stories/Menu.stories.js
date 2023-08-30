import React from "react";
import { Menu, MenuButton, MenuItem, MenuList } from "../components";
const meta = {
    title: "Misc/Menu",
    component: Menu,
    tags: ["autodocs"],
};
export default meta;
export const Primary = {
    //@ts-ignore
    args: {},
    render: () => (React.createElement(Menu, null,
        React.createElement(MenuButton, null, "Open"),
        React.createElement(MenuList, null,
            React.createElement(MenuItem, null, "Item 1"),
            React.createElement(MenuItem, null, "Item 2"),
            React.createElement(MenuItem, null, "Item 3")))),
};
//# sourceMappingURL=Menu.stories.js.map