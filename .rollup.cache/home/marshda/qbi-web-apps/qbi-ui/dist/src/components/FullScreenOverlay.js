import React from "react";
import { Portal } from "@mui/base";
import { classes } from "./utils";
function Overlay({ children, className, onClose, onContextMenu, disableClickOutside, }) {
    return (React.createElement("div", { className: classes("fixed top-0 left-0 h-full w-full bg-black/10 flex items-center justify-center p-8 z-30", className), onClick: (e) => {
            if (e.target === e.currentTarget && !disableClickOutside) {
                onClose === null || onClose === void 0 ? void 0 : onClose();
            }
        }, onContextMenu: onContextMenu }, children));
}
export default function FullScreenOverlay(props) {
    return props.asPortal ? (React.createElement(Portal, null,
        React.createElement(Overlay, Object.assign({}, props)))) : (React.createElement(Overlay, Object.assign({}, props)));
}
//# sourceMappingURL=FullScreenOverlay.js.map