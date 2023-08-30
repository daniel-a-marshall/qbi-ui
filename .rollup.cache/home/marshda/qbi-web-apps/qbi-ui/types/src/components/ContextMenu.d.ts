import React, { ReactNode } from "react";
export declare function ContextMenu({ x, y, children, onClose, }: {
    x: number;
    y: number;
    children: ReactNode;
    onClose: () => void;
}): JSX.Element;
export declare function ContextMenuList({ className, children, }: {
    className?: string;
    children: ReactNode;
}): JSX.Element;
export declare function ContextMenuItem({ children, disableCloseOnClick, onClick, className, }: {
    children: ReactNode;
    disableCloseOnClick?: boolean;
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    className?: string;
}): JSX.Element;
