import { __rest } from "tslib";
import React, { useMemo } from "react";
import { classes } from "../utils";
function getComputedClasses(variant) {
    if (variant === "outline") {
        return "bg-tranparent text-primary-400 hover:bg-primary-400/10 disabled:bg-white disabled:text-gray-200";
    }
    if (variant === "error") {
        return "bg-red-400 text-white border-red-400 hover:bg-red-500 hover:border-red-500 disabled:bg-gray-150 disabled:text-gray-300";
    }
    return "bg-primary-400 text-white hover:bg-primary-500 hover:border-primary-500 disabled:bg-gray-150 disabled:text-gray-300";
}
const Button = React.forwardRef((_a, ref) => {
    var { children, as: Tag = "button", className, variant } = _a, props = __rest(_a, ["children", "as", "className", "variant"]);
    const computedClasses = useMemo(() => getComputedClasses(variant), [variant]);
    return (React.createElement(Tag, Object.assign({ ref: ref, className: classes("text-sm px-[1em] py-[.5em] border border-primary-400 rounded whitespace-nowrap flex gap-[.75em] items-center disabled:border-gray-150 focus-within:outline-primary-600", computedClasses, className) }, props), children));
});
Button.displayName = "Button";
export default Button;
//# sourceMappingURL=Button.js.map