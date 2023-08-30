import React from "react";
import { IconButton } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
const meta = {
    title: "Buttons/IconButton",
    component: IconButton,
    tags: ["autodocs"],
};
export default meta;
const Icon = React.createElement(FontAwesomeIcon, { icon: faPaperPlane });
export const Primary = {
    //render: () => <Button>Primary</Button>,
    args: {
        children: Icon,
    },
};
export const Light = {
    //render: () => <Button>Primary</Button>,
    args: {
        variant: "light",
        children: Icon,
    },
    render: () => (React.createElement("div", { style: { background: "#333", padding: "1rem ", borderRadius: "0.25rem" } },
        React.createElement(IconButton, { variant: "light" },
            React.createElement(FontAwesomeIcon, { icon: faPaperPlane })))),
};
//# sourceMappingURL=IconButton.stories.js.map