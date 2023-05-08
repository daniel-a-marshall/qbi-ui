import React from "react";
import Select from "./Select";

export type ObjectSelectProps<T extends Record<string, unknown>> = {
  options: T[];
  value: T | undefined;
  onChange: (value: T) => void;
  displayKey: keyof T;
  onCreate?: (value: string) => T;
  isLoading?: boolean;
  className?: string;
  placeholder?: string;
  onToggle?: (isOpen: boolean) => void;
};

export default function ObjectSelect<T extends Record<string, unknown>>({
  options,
  value,
  onChange,
  displayKey,
  onCreate,
  ...rest
}: ObjectSelectProps<T>) {
  const stringOptions = options.map(v => String(v[displayKey]));

  function handleOnChange(value: string) {
    let option = options.find(o => String(o[displayKey]) === value);

    if (!option && onCreate) {
      option = onCreate(value);
    }

    if (!option) throw "Selected string missing matching object";
    onChange(option);
  }

  return (
    <Select
      options={stringOptions}
      value={(value?.[displayKey] as string) || ""}
      onChange={handleOnChange}
      isCreatable={!!onCreate}
      {...rest}
    />
  );
}
