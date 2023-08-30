import { __rest } from "tslib";
import React, { useState } from "react";
import { classes } from "./utils";
const avatarSize = {
    sm: "1.5rem",
    base: "2rem",
    lg: "2.25rem",
    xl: "2.5rem",
    "2xl": "3rem",
    "3xl": "3.5rem",
    "4xl": "4rem",
    "5xl": "4.5rem",
    "6xl": "5rem",
    "7xl": "6rem",
    "8xl": "7rem",
    "9xl": "8rem",
    "10xl": "9rem",
};
const textSize = {
    sm: ".75rem",
    base: "1rem",
    lg: "1rem",
    xl: "1rem",
    "2xl": "1.25rem",
    "3xl": "1.5rem",
    "4xl": "1.75rem",
    "5xl": "2rem",
    "6xl": "2.25rem",
    "7xl": "2.5rem",
    "8xl": "2.75rem",
    "9xl": "3rem",
    "10xl": "3.25rem",
};
function Avatar(_a) {
    var _b;
    var { size = "base" } = _a, props = __rest(_a, ["size"]);
    const [imageErrored, setImageErrored] = useState(false);
    function handleError() {
        setImageErrored(true);
    }
    if (props.imageUrl && !imageErrored) {
        return (React.createElement("img", { src: props.imageUrl, alt: props.alt, onError: handleError, className: classes("rounded-full object-cover", props.onClick ? "cursor-pointer" : null, props.className), style: Object.assign({ height: avatarSize[size], width: avatarSize[size] }, props.style), onClick: props.onClick }));
    }
    return (React.createElement("div", { className: classes("rounded-full bg-gray-800 text-center text-white cursor-pointer", props.onClick ? "cursor-pointer" : null, props.className), style: Object.assign({ height: avatarSize[size], width: avatarSize[size], lineHeight: avatarSize[size] }, props.style), onClick: props.onClick },
        React.createElement("span", { style: { fontSize: textSize[size] } }, (_b = props.alt) === null || _b === void 0 ? void 0 : _b.slice(0, 1))));
}
export default Avatar;
//# sourceMappingURL=Avatar.js.map