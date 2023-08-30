import { __rest } from "tslib";
import React from "react";
import { classes } from "../utils";
export default function Input(props) {
    const { className } = props, inputProps = __rest(props, ["className"]);
    return (React.createElement("input", Object.assign({}, inputProps, { className: classes("text-sm border border-gray-200 py-2 px-4 rounded focus-within:outline-primary-600 error:border-transparent error:-outline-offset-1 error:outline error:outline-2 error:outline-red-500", className) })));
}
//# sourceMappingURL=Input.js.map