import React, { CSSProperties, ReactNode } from "react";
import type { PopperProps } from "@mui/base/Popper";
export declare function Menu(props: {
    children: ReactNode;
    submenu?: boolean;
    open?: boolean;
}): JSX.Element;
export declare function MenuButton(props: {
    children: ReactNode;
    className?: string;
    variant?: "outline";
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}): JSX.Element;
export declare function UnstyledMenuButton({ as: Tag, children, className, style, onClick, }: {
    as?: React.ElementType;
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}): JSX.Element;
export declare function MenuList(props: {
    children: ReactNode;
    modifiers?: PopperProps["modifiers"];
    open?: boolean;
    anchorRef?: HTMLElement | null;
    onClickOustide?: (event: MouseEvent | TouchEvent) => void;
    className?: string;
    placement?: PopperProps["placement"];
}): JSX.Element;
export declare function MenuItem(props: {
    children: ReactNode | ((closeMenu: () => void) => ReactNode);
    disableCloseOnClick?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    className?: string;
    submenu?: boolean;
}): JSX.Element;
