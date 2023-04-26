import React, {
  CSSProperties,
  ReactNode,
  StyleHTMLAttributes,
  useEffect,
} from "react";
import type { PopperProps } from "@mui/base/Popper";

import { createContext, useContext, useState } from "react";
import { classes } from "./utils";
import Popper from "@mui/base/Popper";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

type MenuContextType = {
  buttonRef: HTMLElement | null;
  setButtonRef: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSubMenu: boolean;
  closeParent: (() => void) | undefined;
};

const MenuContext = createContext<MenuContextType>({
  buttonRef: null,
  setButtonRef: () => {},
  isOpen: false,
  setIsOpen: () => {},
  isSubMenu: false,
  closeParent: () => {},
});

//The optional open boolean will allow for manual controll
export function Menu(props: {
  children: ReactNode;
  submenu?: boolean;
  open?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(!!props.open);
  const [buttonRef, setButtonRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setIsOpen(!!props.open);
  }, [props.open]);

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        setIsOpen,
        buttonRef,
        setButtonRef,
        isSubMenu: !!props.submenu,
        closeParent: props.submenu ? () => setIsOpen(false) : undefined,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
}

export function MenuButton(props: {
  children: ReactNode;
  className?: string;
  variant?: "outline";
}) {
  const context = useContext(MenuContext);

  return (
    <Button
      variant={props.variant}
      className={classes(
        context.isSubMenu
          ? "w-full bg-white text-primary-700 border-none text-base pl-6 pr-4 py-2 cursor-pointer flex items-center justify-between gap-4 hover:bg-gray-100"
          : null,
        props.className
      )}
      onClick={() => context.setIsOpen(prev => !prev)}
      onMouseEnter={
        context.isSubMenu ? () => context.setIsOpen(true) : () => {}
      }
      onMouseLeave={
        context.isSubMenu ? () => context.setIsOpen(false) : () => {}
      }
      ref={context.setButtonRef}
    >
      {props.children}
      {context.isSubMenu && (
        <FontAwesomeIcon
          icon={faChevronRight}
          className="h-3 ml-auto"
          size="sm"
        />
      )}
    </Button>
  );
}

export function UnstyledMenuButton({
  as: Tag = "button",
  children,
  className,
  style,
}: {
  as?: React.ElementType;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const context = useContext(MenuContext);

  return (
    <Tag
      className={className}
      onClick={() => context.setIsOpen(prev => !prev)}
      ref={context.setButtonRef}
      style={style || {}}
    >
      {children}
    </Tag>
  );
}

export function MenuList(props: {
  children: ReactNode;
  modifiers?: PopperProps["modifiers"];
  open?: boolean;
  anchorRef?: HTMLElement | null;
  onClickOustide?: (event: MouseEvent | TouchEvent) => void;
  className?: string;
  placement?: PopperProps["placement"];
}) {
  const context = useContext(MenuContext);

  return (
    <Popper
      open={props.open || context.isOpen}
      anchorEl={props.anchorRef || context.buttonRef}
      placement={
        props.placement || (context.isSubMenu ? "right-start" : "bottom-start")
      }
      modifiers={[
        {
          name: "offset",
          options: {
            offset: context.isSubMenu ? [0, 0] : [0, 4],
          },
        },
        {
          name: "preventOverflow",
          options: {
            padding: 16,
          },
        },
        {
          name: "flip",
          options: {
            padding: 16,
          },
        },
        ...(props.modifiers || []),
      ]}
      className="z-10"
    >
      <ClickAwayListener
        onClickAway={props.onClickOustide || (() => context.setIsOpen(false))}
      >
        <div
          className={classes(
            "border border-gray-100 bg-white rounded shadow-2xl py-2",
            props.className
          )}
          tabIndex={0}
        >
          {props.children}
        </div>
      </ClickAwayListener>
    </Popper>
  );
}

export function MenuItem(props: {
  children: ReactNode | ((closeMenu: () => void) => ReactNode);
  disableCloseOnClick?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  submenu?: boolean;
}) {
  const context = useContext(MenuContext);
  return (
    <div
      onClick={e => {
        if (!props.disableCloseOnClick) {
          context.setIsOpen(false);
        }
        if (context.isSubMenu && context.closeParent) {
          context.closeParent();
        }
        props.onClick?.(e);
      }}
      onMouseEnter={
        context.isSubMenu ? () => context.setIsOpen(true) : () => {}
      }
      onMouseLeave={
        context.isSubMenu ? () => context.setIsOpen(false) : () => {}
      }
      className={classes(
        props.submenu
          ? null
          : "px-6 py-2 cursor-pointer flex items-center gap-4 hover:bg-gray-100",
        props.className
      )}
    >
      {typeof props.children === "function"
        ? props.children(() => context.setIsOpen(false))
        : props.children}
    </div>
  );
}
