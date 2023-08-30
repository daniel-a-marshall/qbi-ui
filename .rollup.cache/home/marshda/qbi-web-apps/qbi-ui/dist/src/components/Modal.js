import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { classes } from "./utils";
import FullScreenOverlay from "./FullScreenOverlay";
import IconButton from "./Buttons/IconButton";
export default function Modal({ overlayProps, children, onClose, className, hideCloseButton, }) {
    return (React.createElement(FullScreenOverlay, Object.assign({ onClose: onClose }, overlayProps),
        React.createElement("div", { className: classes("p-8 rounded bg-white relative max-h-[90vh] overflow-hidden flex flex-col", className) },
            !hideCloseButton && (React.createElement(IconButton, { className: "absolute top-4 right-4", onClick: onClose },
                React.createElement(FontAwesomeIcon, { icon: faTimes }))),
            children)));
}
//# sourceMappingURL=Modal.js.map