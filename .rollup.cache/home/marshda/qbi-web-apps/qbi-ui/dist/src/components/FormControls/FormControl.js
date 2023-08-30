import { cloneElement } from "react";
import React from "react";
import { classes } from "../utils";
export default function FormControl(props) {
    return (React.createElement("div", { className: "flex flex-col gap-1" },
        props.label && (React.createElement("label", { className: "block font-semibold", htmlFor: props.id }, props.label)),
        cloneElement(props.children, {
            id: props.id,
            name: props.name || props.id,
            "data-error": props.errorText ? "error" : "",
        }),
        React.createElement("p", { className: classes("text-sm", props.errorText ? "text-red-500" : "opacity-70") }, props.errorText || props.helperText || "")));
}
//# sourceMappingURL=FormControl.js.map