import { __rest } from "tslib";
import React from "react";
import { useCombobox, } from "downshift";
import Popper from "@mui/base/Popper";
import { classes, findMatches } from "./utils";
import CircleSpinner from "../CircleSpinner";
import OptionList from "./OptionList";
import VirtualOptionList from "./VirtualOptionList";
import useIsomorphicLayoutEffect from "../useIsomorphicLayoutEffect";
export default function Select(_a) {
    var { value, onChange } = _a, props = __rest(_a, ["value", "onChange"]);
    if (onChange) {
        return React.createElement(ControlledSelect, Object.assign({ value: value || "", onChange: onChange }, props));
    }
    return React.createElement(UncontrolledSelect, Object.assign({ value: value }, props));
}
export function UncontrolledSelect(_a) {
    var { value: initialValue, name } = _a, rest = __rest(_a, ["value", "name"]);
    const [value, setValue] = React.useState(initialValue || "");
    return (React.createElement(React.Fragment, null,
        React.createElement("input", { type: "hidden", value: value, name: name }),
        React.createElement(ControlledSelect, Object.assign({ value: value, onChange: setValue }, rest))));
}
function ControlledSelect({ options: initialOptions, value, onChange, isCreatable, isLoading, className, placeholder, onToggle, }) {
    var _a;
    const [filteredOptions, setFilteredOptions] = React.useState(initialOptions);
    const ref = React.useRef(null);
    const inputRef = React.useRef(null);
    const [inputHasFocus, setInputHasFocus] = React.useState(false);
    //memoizing this to keep the effect from running on each render and resetting the options
    const options = React.useMemo(() => initialOptions, [initialOptions]);
    const { isOpen, getToggleButtonProps, getMenuProps, getInputProps, highlightedIndex, getItemProps, inputValue, setInputValue, selectItem, } = useCombobox({
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
            var _a;
            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
            if (selectedItem !== null && selectedItem !== undefined) {
                onChange(selectedItem);
            }
        },
        onIsOpenChange: ({ isOpen }) => onToggle === null || onToggle === void 0 ? void 0 : onToggle(isOpen || false),
    });
    const latestInputValue = React.useRef(inputValue);
    useIsomorphicLayoutEffect(() => {
        latestInputValue.current = inputValue;
    }, [inputValue]);
    React.useEffect(() => {
        setFilteredOptions(findMatches(options, latestInputValue.current, isCreatable));
    }, [options, isCreatable]);
    const handlePaste = React.useCallback((e) => {
        const pasted = e.clipboardData.getData("text");
        e.preventDefault();
        const trimmed = pasted.trim();
        const match = options.find(o => o === trimmed);
        if (match)
            return selectItem(match);
        if (isCreatable) {
            return selectItem(trimmed);
        }
        return setInputValue(trimmed);
    }, [options, isCreatable, setInputValue, selectItem]);
    return (React.createElement("div", { className: classes("border border-gray-200 rounded bg-white flex focus-within:outline focus-within:outline-1 focus-within:outline-primary-600", className), ref: ref },
        React.createElement("div", { className: "w-full p-2 flex" },
            React.createElement("input", Object.assign({ className: classes("border-none px-2 truncate placeholder:text-inherit text-sm w-full focus-within:outline-none", (inputHasFocus && inputValue === "") || (!value && !inputValue)
                    ? "opacity-40"
                    : "opacity-100") }, getInputProps({
                ref: inputRef,
                onFocus: () => setInputHasFocus(true),
                onBlur: () => setInputHasFocus(false),
                onPaste: handlePaste,
            }), { placeholder: value || placeholder || "Select an option..." }))),
        React.createElement("button", Object.assign({ className: "border-l border-gray-200 px-3 flex items-center my-1" }, getToggleButtonProps()), isLoading ? (React.createElement(CircleSpinner, null)) : (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", className: classes("h-3 w-3 fill-gray-500", isOpen && "rotate-180") },
            React.createElement("path", { d: "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" })))),
        React.createElement("div", Object.assign({ className: !isOpen ? "hidden" : "" }, getMenuProps()),
            React.createElement(Popper, { open: isOpen, anchorEl: ref.current, modifiers: [
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
                ], style: {
                    minWidth: (_a = ref.current) === null || _a === void 0 ? void 0 : _a.clientWidth,
                }, className: "border border-gray-100 bg-white rounded shadow-2xl max-h-[20rem] flex flex-col z-50" }, isOpen ? (isLoading ? (React.createElement("div", { className: "flex py-4 items-center justify-center text-gray-700 gap-4" },
                React.createElement("span", null, "Loading..."),
                React.createElement(CircleSpinner, null))) : filteredOptions.length === 0 ? (React.createElement("div", { className: "flex py-4 items-center justify-center text-gray-700" },
                React.createElement("span", null, "No matching options"))) : filteredOptions.length < 100 ? (React.createElement(OptionList, { options: filteredOptions, itemPropsGetter: getItemProps, inputValue: inputValue, selected: value, highlightedIndex: highlightedIndex, isCreatable: isCreatable })) : (React.createElement(VirtualOptionList, { options: filteredOptions, itemPropsGetter: getItemProps, inputValue: inputValue, selected: value, highlightedIndex: highlightedIndex, isCreatable: isCreatable }))) : null))));
}
//# sourceMappingURL=Select.js.map