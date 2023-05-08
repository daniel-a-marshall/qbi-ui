import React, { useRef } from "react";
import { classes, highlightMatch } from "./utils";
import { useVirtualizer } from "@tanstack/react-virtual";

export default function VirtualOptionList({
  options,
  itemPropsGetter,
  inputValue,
  selected,
  highlightedIndex,
  isCreatable,
  maxHeight = "20rem",
  className,
}: {
  options: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  itemPropsGetter: (props: { item: string; index: number }) => any;
  inputValue: string;
  selected: string | string[];
  highlightedIndex: number;
  isCreatable?: boolean;
  maxHeight?: string;
  className?: string;
}) {
  const menuListRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: options.length,
    getScrollElement: () => menuListRef.current,
    estimateSize: React.useCallback(() => 40, []),
    overscan: 5,
  });

  return (
    <div
      ref={menuListRef}
      className={classes(
        "w-full relative overflow-x-hidden overflow-y-auto scrollbar:w-2 scrollbar-thumb:bg-[#333] scrollbar-thumb:rounded-full",
        className
      )}
      style={{
        maxHeight,
      }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: "100%",
        }}
      />
      {rowVirtualizer.getVirtualItems().map(virtualRow => (
        <div
          {...itemPropsGetter({
            item: options[virtualRow.index],
            index: virtualRow.index,
          })}
          key={virtualRow.index}
          className={classes(
            "cursor-pointer flex items-center justify-between py-2 px-4 gap-2 w-full absolute top-0 left-0 text-sm",
            highlightedIndex === virtualRow.index
              ? "bg-gray-100"
              : "bg-transparent"
          )}
          style={{
            height: `${virtualRow.size}px`,
            transform: `translateY(${virtualRow.start}px)`,
          }}
        >
          <span className="truncate select-none">
            {isCreatable &&
            inputValue &&
            virtualRow.index === options.length - 1
              ? `Create "${options[virtualRow.index]}"`
              : highlightMatch(options[virtualRow.index], inputValue)}
          </span>
          {(selected === options[virtualRow.index] ||
            (Array.isArray(selected) &&
              selected.includes(options[virtualRow.index]))) && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-3 w-3 fill-gray-700"
            >
              <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
