import React, { createContext, useContext, useRef, } from "react";
import { classes } from "./utils";
import Portal from "./Portal";
import { useClickAway } from "../hooks";
const ContextMenuContext = createContext({
    x: 0,
    y: 0,
    onClose: () => { },
});
export function ContextMenu({ x, y, children, onClose, }) {
    return (React.createElement(ContextMenuContext.Provider, { value: { x, y, onClose } },
        React.createElement(Portal, null, children)));
}
export function ContextMenuList({ className, children, }) {
    const { x, y, onClose } = useContext(ContextMenuContext);
    const ref = useRef(null);
    useClickAway(ref, onClose);
    return (React.createElement("div", { ref: ref, className: classes("absolute border border-gray-100 bg-white rounded shadow-2xl py-2", className), style: { top: y, left: x }, tabIndex: 0 }, children));
}
export function ContextMenuItem({ children, disableCloseOnClick, onClick, className, }) {
    const { onClose } = useContext(ContextMenuContext);
    return (React.createElement("div", { onClick: (e) => {
            if (!disableCloseOnClick) {
                onClose();
            }
            onClick === null || onClick === void 0 ? void 0 : onClick(e);
        }, className: classes("px-6 py-2 cursor-pointer flex items-center gap-4 hover:bg-gray-100 whitespace-nowrap", className) }, children));
}
//# sourceMappingURL=ContextMenu.js.map