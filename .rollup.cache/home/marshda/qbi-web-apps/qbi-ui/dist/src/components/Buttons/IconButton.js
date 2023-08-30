import { __rest } from "tslib";
import React from "react";
import { classes } from "../utils";
const IconButton = React.forwardRef((_a, ref) => {
    var { children, as: Tag = "button", className, variant } = _a, props = __rest(_a, ["children", "as", "className", "variant"]);
    return (React.createElement(Tag, Object.assign({ ref: ref, className: classes("bg-transparent rounded-full p-2 h-fit w-fit leading-none disabled:bg-transparent child-svg:w-4 child-svg:h-4", //"focus-within:outline focus-within:outline-2 focus-within:outline-primary-600"
        variant === "light"
            ? "text-gray-100 hover:bg-white/5 disabled:text-gray-600"
            : "text-primary-700 hover:bg-black/10 disabled:text-gray-200", className) }, props), children));
});
IconButton.displayName = "IconButton";
export default IconButton;
//# sourceMappingURL=IconButton.js.map