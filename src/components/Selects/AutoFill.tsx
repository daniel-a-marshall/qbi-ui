import React, { useRef, useState } from "react";
import { classes, findMatches, highlightMatch } from "./utils";
import Popper from "@mui/base/Popper";
import {
  UseComboboxState,
  UseComboboxStateChangeOptions,
  useCombobox,
} from "downshift";

export default function AutoFill({
  options,
  onChange,
  isCreatable = false,
  inputRef,
  className,
}: {
  options: string[];
  onChange: (value: string) => void;
  isCreatable?: boolean;
  inputRef?: React.MutableRefObject<HTMLInputElement | null>;
  className?: string;
}) {
  const [filteredOptions, setFilteredOptions] = useState(options);

  const ref = useRef<HTMLDivElement | null>(null);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    inputValue,
  } = useCombobox({
    items: filteredOptions,
    onInputValueChange: ({ inputValue }) =>
      setFilteredOptions(findMatches(options, inputValue, isCreatable)),
    stateReducer: (
      _state: UseComboboxState<string>,
      actionAndChanges: UseComboboxStateChangeOptions<string>
    ) => {
      const { type, changes } = actionAndChanges;
      switch (type) {
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.InputBlur:
          return {
            ...changes,
            inputValue: "",
          };
        case useCombobox.stateChangeTypes.InputChange:
          return {
            ...changes,
            ...(changes.inputValue !== "" && { highlightedIndex: 0 }),
          };
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

  return (
    <>
      <div
        ref={ref}
        className={classes(
          "border border-gray-200 rounded py-2 px-4 text-sm",
          className
        )}
      >
        <input
          className="bg-transparent w-full focus-within:outline-none"
          {...getInputProps({ ref: inputRef })}
          placeholder={"Type to search"}
        />
      </div>
      <Popper
        open={isOpen}
        anchorEl={ref.current}
        modifiers={[
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
        ]}
        {...getMenuProps()}
        style={{
          width: ref.current?.clientWidth,
        }}
        className="bg-white rounded shadow-2xl py-2 max-h-[20rem] flex flex-col"
      >
        <div className="max-h-80 overflow-auto scrollbar:w-2 scrollbar-thumb:bg-[#333] scrollbar-thumb:rounded-full">
          {filteredOptions.map((option, i) => (
            <div
              {...getItemProps({ item: option, index: i })}
              key={`${option}`}
              className={classes(
                "px-6 py-2",
                highlightedIndex === i ? "bg-gray-100" : "bg-transparent"
              )}
            >
              <span>
                {isCreatable && inputValue && i === options.length - 1
                  ? `Create "${option}"`
                  : highlightMatch(option, inputValue)}
              </span>
            </div>
          ))}
        </div>
      </Popper>
    </>
  );
}
