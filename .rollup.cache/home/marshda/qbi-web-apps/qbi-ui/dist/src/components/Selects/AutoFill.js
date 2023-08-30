import React, { useRef, useState } from "react";
import { classes, findMatches, highlightMatch } from "./utils";
import Popper from "@mui/base/Popper";
import { useCombobox, } from "downshift";
export default function AutoFill({ options, onChange, isCreatable = false, inputRef, className, }) {
    var _a;
    const [filteredOptions, setFilteredOptions] = useState(options);
    const ref = useRef(null);
    const { isOpen, getMenuProps, getInputProps, highlightedIndex, getItemProps, inputValue, } = useCombobox({
        items: filteredOptions,
        onInputValueChange: ({ inputValue }) => setFilteredOptions(findMatches(options, inputValue, isCreatable)),
        stateReducer: (_state, actionAndChanges) => {
            const { type, changes } = actionAndChanges;
            switch (type) {
                case useCombobox.stateChangeTypes.ItemClick:
                case useCombobox.stateChangeTypes.InputKeyDownEnter:
                case useCombobox.stateChangeTypes.InputBlur:
                    return Object.assign(Object.assign({}, changes), { inputValue: "" });
                case useCombobox.stateChangeTypes.InputChange:
                    return Object.assign(Object.assign({}, changes), (changes.inputValue !== "" && { highlightedIndex: 0 }));
                default:
                    return changes;
            }
        },
        onSelectedItemChange: ({ selectedItem }) => {
            //inputRef.current?.blur();
            if (selectedItem !== null && selectedItem !== undefined) {
                onChange(selectedItem);
            }
        },
    });
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { ref: ref, className: classes("border border-gray-200 rounded py-2 px-4 text-sm", className) },
            React.createElement("input", Object.assign({ className: "bg-transparent w-full focus-within:outline-none" }, getInputProps({ ref: inputRef }), { placeholder: "Type to search" }))),
        React.createElement(Popper, Object.assign({ open: isOpen, anchorEl: ref.current, modifiers: [
                {
                    name: "offset",
                    options: {
                        offset: [0, 4],
                    },
                },
                {
                    name: "preventOverflow",
                    options: {
                        padding: 16,
                    },
                },
                {
                    name: "flip",
                    options: {
                        padding: 16,
                    },
                },
            ] }, getMenuProps(), { style: {
                width: (_a = ref.current) === null || _a === void 0 ? void 0 : _a.clientWidth,
            }, className: "bg-white rounded shadow-2xl py-2 max-h-[20rem] flex flex-col" }),
            React.createElement("div", { className: "max-h-80 overflow-auto scrollbar:w-2 scrollbar-thumb:bg-[#333] scrollbar-thumb:rounded-full" }, filteredOptions.map((option, i) => (React.createElement("div", Object.assign({}, getItemProps({ item: option, index: i }), { key: `${option}`, className: classes("px-6 py-2", highlightedIndex === i ? "bg-gray-100" : "bg-transparent") }),
                React.createElement("span", null, isCreatable && inputValue && i === options.length - 1
                    ? `Create "${option}"`
                    : highlightMatch(option, inputValue)))))))));
}
//# sourceMappingURL=AutoFill.js.map