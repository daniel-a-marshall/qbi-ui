import React from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { classes } from "../utils";
import Button from "./Button";
import { Menu, MenuButton } from "../Menu";
export function BaseSplitButton(props) {
    return React.createElement("div", { className: "flex flex-nowrap items-center" }, props.children);
}
export default function SplitButton(props) {
    return (React.createElement(BaseSplitButton, null,
        React.createElement(Button, { variant: props.variant, className: classes(
            //"btn",
            //props.variant === "outline" ? "btn-outline border-r-0" : null,
            "border-r-0 rounded-r-none") }, props.label),
        React.createElement(Menu, null,
            React.createElement(MenuButton, { variant: props.variant, className: classes("py-[.7rem] rounded-l-none", props.variant !== "outline" &&
                    "border-l-white/40 hover:border-l hover:border-l-white/40") },
                React.createElement(FontAwesomeIcon, { icon: faChevronDown, className: "!h-3" })),
            props.children)));
}
//# sourceMappingURL=SplitButton.js.map