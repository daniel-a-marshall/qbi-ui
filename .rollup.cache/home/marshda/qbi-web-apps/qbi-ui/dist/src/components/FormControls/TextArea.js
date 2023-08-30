import { __rest } from "tslib";
import React from "react";
import { classes } from "../utils";
export default function TextArea(props) {
    const { disableAutoHeight, className, onChange } = props, textareaProps = __rest(props, ["disableAutoHeight", "className", "onChange"]);
    const autoSize = (element) => {
        if (!disableAutoHeight && element) {
            element.style.height = `${element.scrollHeight + 2}px`;
        }
    };
    const handleChange = (event) => {
        autoSize(event.target);
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    };
    return (React.createElement("textarea", Object.assign({ ref: autoSize }, textareaProps, { onChange: handleChange, className: classes("text-sm border border-gray-200 py-2 px-4 rounded focus-within:outline-primary-600 error:border-transparent error:-outline-offset-1 error:outline error:outline-2 error:outline-red-500", className) })));
}
//# sourceMappingURL=TextArea.js.map