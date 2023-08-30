import React from "react";
import { classes } from "./utils";
export default function CircleSpinner({ color = "#333333", background = "rgba(51,51,51, 0.2)", className, }) {
    return (React.createElement("div", { className: classes(className, "animate-spin"), style: {
            display: "inline-block",
            height: "1em",
            width: "1em",
            position: "relative",
            borderRadius: "50%",
            borderTop: `.2em solid ${background}`,
            borderRight: `.2em solid ${background}`,
            borderBottom: `.2em solid ${background}`,
            borderLeft: `.2em solid ${color}`,
        } }));
}
//# sourceMappingURL=CircleSpinner.js.map