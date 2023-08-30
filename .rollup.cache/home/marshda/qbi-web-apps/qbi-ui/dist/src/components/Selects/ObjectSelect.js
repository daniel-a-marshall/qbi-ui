import { __rest } from "tslib";
import React from "react";
import Select from "./Select";
export default function ObjectSelect(_a) {
    var { options, value, onChange, displayKey, onCreate } = _a, rest = __rest(_a, ["options", "value", "onChange", "displayKey", "onCreate"]);
    const stringOptions = options.map(v => String(v[displayKey]));
    function handleOnChange(value) {
        let option = options.find(o => String(o[displayKey]) === value);
        if (!option && onCreate) {
            option = onCreate(value);
        }
        if (!option)
            throw "Selected string missing matching object";
        onChange(option);
    }
    return (React.createElement(Select, Object.assign({ options: stringOptions, value: (value === null || value === void 0 ? void 0 : value[displayKey]) || "", onChange: handleOnChange, isCreatable: !!onCreate }, rest)));
}
//# sourceMappingURL=ObjectSelect.js.map