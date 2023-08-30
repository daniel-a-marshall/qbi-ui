import React from "react";
import { classes, highlightMatch } from "./utils";
export default function OptionList({ options, itemPropsGetter, inputValue, selected, highlightedIndex, isCreatable, className, maxHeight = "20rem", onItemClick, }) {
    return (React.createElement("div", { className: classes("w-full overflow-x-hidden overflow-y-auto scrollbar:w-2 scrollbar-thumb:bg-[#333] scrollbar-thumb:rounded-full", className), style: { maxHeight } }, options.map((option, index) => (React.createElement("div", Object.assign({ className: classes("cursor-pointer flex items-center justify-between py-2 px-4 gap-2 text-sm", highlightedIndex === index ? "bg-gray-100" : "bg-transparent"), key: `${option}${index}` }, itemPropsGetter({ item: option, index }), (onItemClick ? { onClick: onItemClick } : {})),
        React.createElement("span", { className: "truncate select-none" }, isCreatable && inputValue && index === options.length - 1
            ? `Create "${option}"`
            : highlightMatch(option, inputValue)),
        (selected === option ||
            (Array.isArray(selected) && selected.includes(option))) && (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", className: "h-3 w-3 fill-gray-700" },
            React.createElement("path", { d: "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" }))))))));
}
// const OptionList = forwardRef<HTMLDivElement, OptionListProps>(
//   (
//     {
//       options,
//       itemPropsGetter,
//       inputValue,
//       selected,
//       highlightedIndex,
//       isCreatable,
//       className,
//       maxHeight = "20rem",
//       ...rest
//     },
//     innerRef
//   ) => {
//     return (
//       <div
//         className={classes(
//           "w-full overflow-x-hidden overflow-y-auto scrollbar:w-2 scrollbar-thumb:bg-[#333] scrollbar-thumb:rounded-full",
//           className
//         )}
//         style={{ maxHeight }}
//         ref={innerRef}
//         {...rest}
//       >
//         {options.map((option, index) => {
//           return (
//             <div
//               className={classes(
//                 "cursor-pointer flex items-center justify-between py-2 px-4 gap-2 text-sm",
//                 highlightedIndex === index ? "bg-gray-100" : "bg-transparent"
//               )}
//               key={`${options}${index}`}
//               {...itemPropsGetter({
//                 item: option,
//                 index,
//               })}
//             >
//               <span className="truncate select-none">
//                 {isCreatable && inputValue && index === options.length - 1
//                   ? `Create "${option}"`
//                   : highlightMatch(option, inputValue)}
//               </span>
//               {(selected === option ||
//                 (Array.isArray(selected) && selected.includes(option))) && (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 448 512"
//                   className="h-3 w-3 fill-gray-700"
//                 >
//                   <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
//                 </svg>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// );
// export default OptionList;
//# sourceMappingURL=OptionList.js.map