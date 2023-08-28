import React from "react";
import { Portal } from "@mui/base";
import type { ReactNode } from "react";
import { classes } from "./utils";

export type FullScreenOverlayProps = {
  children: ReactNode;
  onClose?: () => void;
  onContextMenu?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
  asPortal?: boolean;
  //TODO this could be removed in favor of not passing in an onClose function will need to update everywhere
  disableClickOutside?: boolean;
};

function Overlay({
  children,
  className,
  onClose,
  onContextMenu,
  disableClickOutside,
}: FullScreenOverlayProps) {
  return (
    <div
      className={classes(
        "fixed top-0 left-0 h-full w-full bg-black/10 flex items-center justify-center p-8 z-30",
        className
      )}
      onClick={(e) => {
        if (e.target === e.currentTarget && !disableClickOutside) {
          onClose?.();
        }
      }}
      onContextMenu={onContextMenu}
    >
      {children}
    </div>
  );
}

export default function FullScreenOverlay(props: FullScreenOverlayProps) {
  return props.asPortal ? (
    <Portal>
      <Overlay {...props} />
    </Portal>
  ) : (
    <Overlay {...props} />
  );
}
