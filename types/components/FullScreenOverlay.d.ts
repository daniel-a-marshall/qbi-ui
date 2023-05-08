import type { ReactNode } from "react";
export type FullScreenOverlayProps = {
    children: ReactNode;
    onClose?: () => void;
    className?: string;
    asPortal?: boolean;
    disableClickOutside?: boolean;
};
export default function FullScreenOverlay(props: FullScreenOverlayProps): JSX.Element;
