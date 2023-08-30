import React, { useCallback } from "react";
import { useCombobox, useMultipleSelection } from "downshift";
import Popper from "@mui/base/Popper";
import { classes, findMatches } from "./utils";
import CircleSpinner from "../CircleSpinner";
import OptionList from "./OptionList";
import VirtualOptionList from "./VirtualOptionList";
export default function MultiSelect({ options: initialOptions, value, onChange, isCreatable, isLoading, className, placeholder, onToggle, maxRows, }) {
    var _a;
    const lastSelectedIndex = React.useRef(-1);
    const options = React.useMemo(() => initialOptions, [initialOptions]);
    const [inputValue, setInputValue] = React.useState("");
    const filteredOptions = React.useMemo(() => findMatches(options, inputValue, isCreatable), [inputValue, options, isCreatable]);
    const ref = React.useRef(null);
    const inputRef = React.useRef(null);
    const { getSelectedItemProps, getDropdownProps, removeSelectedItem, setSelectedItems: _setSelectedItems, } = useMultipleSelection({
        selectedItems: value,
        onStateChange: (changes) => {
            switch (changes.type) {
                case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownBackspace:
                case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
                case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
                case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
                case useMultipleSelection.stateChangeTypes.FunctionSetSelectedItems:
                    onChange(changes.selectedItems);
                    break;
                default:
                    break;
            }
        },
    });
    const setSelectedItems = useCallback((selection) => {
        const keep = value.filter((s) => !selection.includes(s));
        const add = selection.filter((s) => !value.includes(s));
        _setSelectedItems([...keep, ...add]);
    }, [_setSelectedItems, value]);
    const { isOpen, getToggleButtonProps, getMenuProps, getInputProps, highlightedIndex, getItemProps, } = useCombobox({
        items: filteredOptions,
        inputValue,
        selectedItem: null,
        stateReducer(state, actionAndChanges) {
            const { changes, type } = actionAndChanges;
            switch (type) {
                case useCombobox.stateChangeTypes.InputKeyDownEnter:
                case useCombobox.stateChangeTypes.ItemClick:
                case useCombobox.stateChangeTypes.InputBlur:
                    return Object.assign(Object.assign({}, changes), (changes.selectedItem && {
                        isOpen: true,
                        highlightedIndex: state.highlightedIndex,
                    }));
                default:
                    return changes;
            }
        },
        onStateChange(changes) {
            switch (changes.type) {
                case useCombobox.stateChangeTypes.InputChange:
                    setInputValue(changes.inputValue || "");
                    lastSelectedIndex.current = -1;
                    break;
                case useCombobox.stateChangeTypes.InputBlur:
                    setInputValue("");
                    lastSelectedIndex.current = -1;
                    break;
                default:
                    break;
            }
        },
        onIsOpenChange: ({ isOpen }) => onToggle === null || onToggle === void 0 ? void 0 : onToggle(isOpen || false),
    });
    const handleOptionSelect = useCallback((e, index) => {
        const selection = !e.shiftKey || lastSelectedIndex.current === -1
            ? [filteredOptions[index]]
            : filteredOptions.slice(Math.min(lastSelectedIndex.current, index) +
                +(index > lastSelectedIndex.current), Math.max(lastSelectedIndex.current, index) +
                +(index > lastSelectedIndex.current));
        lastSelectedIndex.current = index;
        setSelectedItems(selection);
    }, [filteredOptions, setSelectedItems]);
    const handlePaste = React.useCallback((e) => {
        const paste = e.clipboardData.getData("text");
        const seperator = paste.includes("\n") ? "\n" : ",";
        e.preventDefault();
        const values = paste
            .split(seperator)
            .map((v) => v.trim())
            .filter((v) => v);
        console.log({ values });
        const pastedItems = values.reduce((acc, v) => {
            const match = options.find((o) => o === v);
            if (match && !value.includes(match)) {
                acc.push(match);
            }
            else if (isCreatable) {
                const created = v.trim();
                if (!value.includes(created)) {
                    acc.push(created);
                }
            }
            return acc;
        }, []);
        setSelectedItems(pastedItems);
    }, [options, value, isCreatable, setSelectedItems]);
    return (React.createElement("div", { className: classes("border border-gray-200 rounded bg-white grid grid-cols-[1fr_auto] focus-within:outline focus-within:outline-1 focus-within:outline-primary-600", className), ref: ref },
        React.createElement("div", { className: "flex gap-1 p-[0.375rem] flex-wrap overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300", style: {
                maxHeight: maxRows
                    ? `${maxRows * 1.625 + (maxRows - 1) * 0.25}rem`
                    : "auto",
            } },
            value.map((v, index) => (React.createElement("div", Object.assign({ className: "bg-gray-500 text-sm text-white px-2 py-[0.125rem] flex gap-2 items-center rounded flex-shrink-0 max-w-full", key: `selected-item-${index}` }, getSelectedItemProps({ selectedItem: v, index })),
                React.createElement("span", { className: "truncate" }, v),
                React.createElement("span", { className: "cursor-pointer", onClick: (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        removeSelectedItem(v);
                    } },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", className: "h-3 w-3 fill-white" },
                        React.createElement("path", { d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))))),
            React.createElement("input", Object.assign({ placeholder: value.length ? undefined : placeholder || "Select options...", className: classes(value.length ? "pl-1" : "pl-2", !value.length && !inputValue ? "opacity-40" : "", "border-none pr-1 py-[0.125rem] truncate placeholder:text-inherit placeholder:text-opacity-40 text-sm w-0 flex-auto min-w-[0.5rem] focus-within:outline-none") }, getInputProps(Object.assign(Object.assign({}, getDropdownProps({ preventKeyAction: isOpen, ref: inputRef })), { onPaste: handlePaste, onKeyDown: (e) => {
                    if (e.key === "Enter") {
                        //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        //@ts-ignore
                        e.nativeEvent.preventDownshiftDefault = true;
                        handleOptionSelect(e, highlightedIndex);
                    }
                } }))))),
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
                }, className: "border border-gray-100 bg-white rounded shadow-2xl py-2 max-h-[20rem] flex flex-col z-50" }, isOpen ? (isLoading ? (React.createElement("div", { className: classes("w-full overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300") },
                React.createElement("div", { className: "flex py-4 items-center justify-center text-gray-700 gap-4" },
                    React.createElement("span", null, "Loading..."),
                    React.createElement(CircleSpinner, null)))) : filteredOptions.length === 0 ? (React.createElement("div", { className: classes("w-full overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300") },
                React.createElement("div", { className: "flex py-4 items-center justify-center text-gray-700" },
                    React.createElement("span", null, "No matching options")))) : (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "text-sm flex justify-between items-center mx-1 px-2 pb-2 pt-1 border-b border-b-gray-100" },
                    React.createElement("button", { className: "hover:text-primary-dark", onMouseDown: (e) => {
                            e.preventDefault();
                            setSelectedItems((isCreatable && inputValue
                                ? filteredOptions.slice(0, -1)
                                : filteredOptions).filter((v) => !value.includes(v)));
                        } }, "select all"),
                    React.createElement("button", { className: "hover:text-primary-default", onMouseDown: (e) => {
                            e.preventDefault();
                            setSelectedItems(value.filter((v) => filteredOptions.includes(v)));
                        } }, "clear")),
                filteredOptions.length < 100 ? (React.createElement(OptionList, { options: filteredOptions, itemPropsGetter: ({ item, index }) => getItemProps({
                        item,
                        index,
                        onClick: (e) => {
                            //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            //@ts-ignore
                            e.nativeEvent.preventDownshiftDefault = true;
                            handleOptionSelect(e, index);
                        },
                    }), inputValue: inputValue, selected: value, highlightedIndex: highlightedIndex, isCreatable: isCreatable })) : (React.createElement(VirtualOptionList, { options: filteredOptions, itemPropsGetter: ({ item, index }) => getItemProps({
                        item,
                        index,
                        onClick: (e) => {
                            //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            //@ts-ignore
                            e.nativeEvent.preventDownshiftDefault = true;
                            handleOptionSelect(e, index);
                        },
                    }), inputValue: inputValue, selected: value, highlightedIndex: highlightedIndex, isCreatable: isCreatable }))))) : null))));
}
//# sourceMappingURL=Multiselect.js.map