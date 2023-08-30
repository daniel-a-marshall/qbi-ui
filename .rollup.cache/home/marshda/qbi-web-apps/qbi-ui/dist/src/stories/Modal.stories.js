import React from "react";
import { Button, Modal } from "../components";
const meta = {
    title: "Misc/Modal",
    component: Modal,
    tags: ["autodocs"],
};
export default meta;
export const Primary = {
    //@ts-ignore
    args: {},
    render: args => {
        const [show, setShow] = React.useState(false);
        return (React.createElement(React.Fragment, null,
            React.createElement(Button, { onClick: () => setShow(true) }, "Open Modal"),
            show && (React.createElement(Modal, { onClose: () => setShow(false) },
                React.createElement("h1", { className: "font-heading text-2xl font-bold" }, "Modal Title"),
                React.createElement("p", { className: "mt-4" }, "Modal body goes here")))));
    },
};
//# sourceMappingURL=Modal.stories.js.map