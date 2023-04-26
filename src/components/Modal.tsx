import type { FullScreenOverlayProps } from "./FullScreenOverlay";
import type { ReactNode } from "react";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { classes } from "./utils";
import FullScreenOverlay from "./FullScreenOverlay";
import IconButton from "./IconButton";
import React from "react";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
  overlayProps?: Omit<FullScreenOverlayProps, "children" | "onClose">;
  className?: string;
  hideCloseButton?: boolean;
};

export default function Modal({
  overlayProps,
  children,
  onClose,
  className,
  hideCloseButton,
}: ModalProps) {
  return (
    <FullScreenOverlay onClose={onClose} {...overlayProps}>
      <div
        className={classes(
          "p-8 rounded bg-white relative max-h-[90vh] overflow-hidden flex flex-col",
          className
        )}
      >
        {!hideCloseButton && (
          <IconButton className="absolute top-4 right-4" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </IconButton>
        )}
        {children}
      </div>
    </FullScreenOverlay>
  );
}
