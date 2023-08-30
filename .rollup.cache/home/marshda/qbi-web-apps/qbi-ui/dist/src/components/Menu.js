import React, { useEffect, } from "react";
import { createContext, useContext, useState } from "react";
import { classes } from "./utils";
import Popper from "@mui/base/Popper";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Buttons";
const MenuContext = createContext({
    buttonRef: null,
    setButtonRef: () => { },
    isOpen: false,
    setIsOpen: () => { },
    isSubMenu: false,
    closeParent: () => { },
});
//The optional open boolean will allow for manual controll
export function Menu(props) {
    const [isOpen, setIsOpen] = useState(!!props.open);
    const [buttonRef, setButtonRef] = useState(null);
    useEffect(() => {
        setIsOpen(!!props.open);
    }, [props.open]);
    return (React.createElement(MenuContext.Provider, { value: {
            isOpen,
            setIsOpen,
            buttonRef,
            setButtonRef,
            isSubMenu: !!props.submenu,
            closeParent: props.submenu ? () => setIsOpen(false) : undefined,
        } }, props.children));
}
export function MenuButton(props) {
    const context = useContext(MenuContext);
    return (React.createElement(Button, { variant: props.variant, className: classes(context.isSubMenu
            ? "w-full bg-white text-primary-700 border-none text-base pl-6 pr-4 py-2 cursor-pointer flex items-center justify-between gap-4 hover:bg-gray-100"
            : null, props.className), onClick: (e) => {
            var _a;
            context.setIsOpen((prev) => !prev);
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        }, onMouseEnter: context.isSubMenu ? () => context.setIsOpen(true) : () => { }, onMouseLeave: context.isSubMenu ? () => context.setIsOpen(false) : () => { }, ref: context.setButtonRef },
        props.children,
        context.isSubMenu && (React.createElement(FontAwesomeIcon, { icon: faChevronRight, className: "h-3 ml-auto", size: "sm" }))));
}
export function UnstyledMenuButton({ as: Tag = "div", children, className, style, onClick, }) {
    const context = useContext(MenuContext);
    return (React.createElement(Tag, { className: classes("cursor-pointer", className), onClick: (e) => {
            context.setIsOpen((prev) => !prev);
            onClick === null || onClick === void 0 ? void 0 : onClick(e);
        }, ref: context.setButtonRef, style: style || {} }, children));
}
export function MenuList(props) {
    const context = useContext(MenuContext);
    return (React.createElement(Popper, { open: props.open || context.isOpen, anchorEl: props.anchorRef || context.buttonRef, placement: props.placement || (context.isSubMenu ? "right-start" : "bottom-start"), modifiers: [
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
        ], className: "z-[1000]" },
        React.createElement(ClickAwayListener, { onClickAway: props.onClickOustide || (() => context.setIsOpen(false)) },
            React.createElement("div", { className: classes("border border-gray-100 bg-white rounded shadow-2xl py-2", props.className), tabIndex: 0 }, props.children))));
}
export function MenuItem(props) {
    const context = useContext(MenuContext);
    return (React.createElement("div", { onClick: (e) => {
            var _a;
            if (!props.disableCloseOnClick) {
                context.setIsOpen(false);
            }
            if (context.isSubMenu && context.closeParent) {
                context.closeParent();
            }
            (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        }, onMouseEnter: context.isSubMenu ? () => context.setIsOpen(true) : () => { }, onMouseLeave: context.isSubMenu ? () => context.setIsOpen(false) : () => { }, className: classes(props.submenu
            ? null
            : "px-6 py-2 cursor-pointer flex items-center gap-4 hover:bg-gray-100", props.className) }, typeof props.children === "function"
        ? props.children(() => context.setIsOpen(false))
        : props.children));
}
//# sourceMappingURL=Menu.js.map