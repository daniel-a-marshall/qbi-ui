import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
} from "react";
import { classes } from "./utils";
import Portal from "./Portal";
import { useClickAway } from "../hooks";

type ContextMenuContextType = {
  x: number;
  y: number;
  onClose: () => void;
};

const ContextMenuContext = createContext<ContextMenuContextType>({
  x: 0,
  y: 0,
  onClose: () => {},
});

export function ContextMenu({
  x,
  y,
  children,
  onClose,
}: {
  x: number;
  y: number;
  children: ReactNode;
  onClose: () => void;
}) {
  return (
    <ContextMenuContext.Provider value={{ x, y, onClose }}>
      <Portal>{children}</Portal>
    </ContextMenuContext.Provider>
  );
}

export function ContextMenuList({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const { x, y, onClose } = useContext(ContextMenuContext);
  const ref = useRef<HTMLDivElement | null>(null);

  useClickAway(ref, onClose);

  return (
    <div
      ref={ref}
      className={classes(
        "absolute border border-gray-100 bg-white rounded shadow-2xl py-2",
        className
      )}
      style={{ top: y, left: x }}
      tabIndex={0}
    >
      {children}
    </div>
  );
}

export function ContextMenuItem({
  children,
  disableCloseOnClick,
  onClick,
  className,
}: {
  children: ReactNode;
  disableCloseOnClick?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
}) {
  const { onClose } = useContext(ContextMenuContext);
  return (
    <div
      onClick={(e) => {
        if (!disableCloseOnClick) {
          onClose();
        }
        onClick?.(e);
      }}
      className={classes(
        "px-6 py-2 cursor-pointer flex items-center gap-4 hover:bg-gray-100 whitespace-nowrap",
        className
      )}
    >
      {children}
    </div>
  );
}
