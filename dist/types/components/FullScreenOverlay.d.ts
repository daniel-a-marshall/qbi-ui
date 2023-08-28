import React from "react";
import type { ReactNode } from "react";
export type FullScreenOverlayProps = {
    children: ReactNode;
    onClose?: () => void;
    onContextMenu?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    className?: string;
    asPortal?: boolean;
    disableClickOutside?: boolean;
};
export default function FullScreenOverlay(props: FullScreenOverlayProps): JSX.Element;
