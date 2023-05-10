import React from "react";
import {
  UseComboboxState,
  UseComboboxStateChangeOptions,
  useCombobox,
} from "downshift";
import Popper from "@mui/base/Popper";
import { classes, findMatches } from "./utils";
import CircleSpinner from "../CircleSpinner";
import OptionList from "./OptionList";
import VirtualOptionList from "./VirtualOptionList";
import useIsomorphicLayoutEffect from "../useIsomorphicLayoutEffect";

export type SelectProps = {
  options: string[];
  value?: string;
  name?: string;
  onChange?: (value: string) => void;
  isCreatable?: boolean;
  isLoading?: boolean;
  className?: string;
  placeholder?: string;
  onToggle?: (isOpen: boolean) => void;
};

export type ControlledSelectProps = {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  name?: string;
  isCreatable?: boolean;
  isLoading?: boolean;
  className?: string;
  placeholder?: string;
  onToggle?: (isOpen: boolean) => void;
};

export default function Select({ value, onChange, ...props }: SelectProps) {
  if (value && onChange) {
    return <ControlledSelect value={value} onChange={onChange} {...props} />;
  }
  return <UncontrolledSelect value={value} {...props} />;
}

export function UncontrolledSelect({
  value: initialValue,
  name,
  ...rest
}: SelectProps) {
  const [value, setValue] = React.useState(initialValue || "");

  return (
    <>
      <input type="hidden" value={value} name={name} />
      <ControlledSelect value={value} onChange={setValue} {...rest} />
    </>
  );
}

function ControlledSelect({
  options: initialOptions,
  value,
  onChange,
  isCreatable,
  isLoading,
  className,
  placeholder,
  onToggle,
}: ControlledSelectProps) {
  const [filteredOptions, setFilteredOptions] = React.useState(initialOptions);
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [inputHasFocus, setInputHasFocus] = React.useState(false);

  //memoizing this to keep the effect from running on each render and resetting the options
  const options = React.useMemo(() => initialOptions, [initialOptions]);

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    getInputProps,
    highlightedIndex,
    getItemProps,
    inputValue,
    setInputValue,
    selectItem,
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
      inputRef.current?.blur();

      if (selectedItem !== null && selectedItem !== undefined) {
        onChange(selectedItem);
      }
    },
    onIsOpenChange: ({ isOpen }) => onToggle?.(isOpen || false),
  });

  const latestInputValue = React.useRef(inputValue);

  useIsomorphicLayoutEffect(() => {
    latestInputValue.current = inputValue;
  }, [inputValue]);

  React.useEffect(() => {
    setFilteredOptions(
      findMatches(options, latestInputValue.current, isCreatable)
    );
  }, [options, isCreatable]);

  const handlePaste = React.useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      const pasted = e.clipboardData.getData("text");
      e.preventDefault();

      const trimmed = pasted.trim();
      const match = options.find(o => o === trimmed);

      if (match) return selectItem(match);

      if (isCreatable) {
        return selectItem(trimmed);
      }

      return setInputValue(trimmed);
    },
    [options, isCreatable, setInputValue, selectItem]
  );

  return (
      <div
        className={classes(
          "border border-gray-200 rounded bg-white flex focus-within:outline focus-within:outline-1 focus-within:outline-primary-600",
          className
        )}
        ref={ref}
      >
        <div className="w-full p-2 flex">
          <input
            className={classes(
              "border-none px-2 truncate placeholder:text-inherit text-sm w-full focus-within:outline-none",
              (inputHasFocus && inputValue === "") || (!value && !inputValue)
                ? "opacity-40"
                : "opacity-100"
            )}
            {...getInputProps({
              ref: inputRef,
              onFocus: () => setInputHasFocus(true),
              onBlur: () => setInputHasFocus(false),
              onPaste: handlePaste,
            })}
            placeholder={value || placeholder || "Select an option..."}
          />
        </div>
        <button
          className="border-l border-gray-200 px-3 flex items-center my-1"
          {...getToggleButtonProps()}
        >
          {isLoading ? (
            <CircleSpinner />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className={classes(
                "h-3 w-3 fill-gray-500",
                isOpen && "rotate-180"
              )}
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          )}
        </button>
      
      <div className={!isOpen ? "hidden" : ""} {...getMenuProps()}>
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
          style={{
            minWidth: ref.current?.clientWidth,
          }}
          className="border border-gray-100 bg-white rounded shadow-2xl max-h-[20rem] flex flex-col z-50"
        >
          {isOpen ? (
            isLoading ? (
              <div className="flex py-4 items-center justify-center text-gray-700 gap-4">
                <span>Loading...</span>
                <CircleSpinner />
              </div>
            ) : filteredOptions.length === 0 ? (
              <div className="flex py-4 items-center justify-center text-gray-700">
                <span>No matching options</span>
              </div>
            ) : filteredOptions.length < 100 ? (
              <OptionList
                options={filteredOptions}
                itemPropsGetter={getItemProps}
                inputValue={inputValue}
                selected={value}
                highlightedIndex={highlightedIndex}
                isCreatable={isCreatable}
              />
            ) : (
              <VirtualOptionList
                options={filteredOptions}
                itemPropsGetter={getItemProps}
                inputValue={inputValue}
                selected={value}
                highlightedIndex={highlightedIndex}
                isCreatable={isCreatable}
              />
            )
          ) : null}
        </Popper>
      </div>
      </div>
  );
}
