import React, { useState } from "react";
import { classes } from "../utils";

type ChipInputProps = {
  value: string[];
  onChange: (value: string[]) => void;
  className?: string;
  placeHolder?: string;
  maxRows?: number;
};

export default function ChipInput({
  value,
  onChange,
  className,
  placeHolder,
  maxRows,
}: ChipInputProps) {
  const [input, setInput] = useState("");

  const mergeValue = (selection: string[]) => {
    const keep = value.filter(s => !selection.includes(s));
    const add = selection.filter(s => !value.includes(s));

    onChange([...keep, ...add]);
  };

  function handleRemove(item: string) {
    onChange(value.filter(v => v !== item));
  }

  function handlePaste(e: any) {
    let paste = e.clipboardData.getData("text");

    const seperator = paste.includes("\n") ? "\n" : ",";

    e.preventDefault();
    const values = paste
      .split(seperator)
      .map((v: string) => v.trim())
      .filter((v: string) => v);

    mergeValue(values);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter") {
      event.preventDefault();
      mergeValue([input.trim()]);
      setInput("");
      return;
    }
    if (event.key === ",") {
      event.preventDefault();
      mergeValue([input.trim()]);
      setInput("");
      return;
    }
  }

  return (
    <div
      className={classes(
        "border border-gray-300 rounded bg-white w-full",
        className
      )}
    >
      <div
        className="flex gap-1 p-1 flex-wrap overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300"
        style={{
          maxHeight: maxRows
            ? `${maxRows * 1.625 + (maxRows - 1) * 0.25}rem`
            : "auto",
        }}
      >
        {value.map(v => (
          <div
            key={`${v}`}
            className="bg-gray-500 text-white text-sm px-2 flex gap-2 items-center rounded flex-shrink-0 h-6 max-w-full"
          >
            <span className="truncate">{v}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              onClick={() => handleRemove(v)}
              className="fill-white h-4 w-4"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
            {/* <span
              
              className="text-xs text-gray-700"
            >
              &#x2716;
            </span> */}
          </div>
        ))}
        <input
          className="border-none px-1 truncate placeholder:text-inherit text-sm w-0 flex-auto min-w-[1rem] h-6 focus-within:outline-none"
          value={input}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          onChange={e => setInput(e.target.value)}
          placeholder={placeHolder}
        />
      </div>
    </div>
  );
}
