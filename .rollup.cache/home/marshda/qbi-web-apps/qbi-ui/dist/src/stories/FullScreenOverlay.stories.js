import React from "react";
import { Button, FullScreenOverlay } from "../components";
const meta = {
    title: "Misc/FullScreenOverlay",
    component: FullScreenOverlay,
    tags: ["autodocs"],
};
export default meta;
export const Primary = {
    //@ts-ignore
    args: {},
    render: args => {
        const [show, setShow] = React.useState(false);
        return (React.createElement(React.Fragment, null,
            React.createElement(Button, { onClick: () => setShow(true) }, "Click to show overlay"),
            show && (React.createElement(FullScreenOverlay, { onClose: () => setShow(false) },
                React.createElement("div", { className: "rounded p-8 bg-black text-white max-w-[40ch]" },
                    React.createElement("p", null, "This is an overlay it will put a gray tint over the screen. If you click on the backgroud it will close the overlay."))))));
    },
};
//# sourceMappingURL=FullScreenOverlay.stories.js.map