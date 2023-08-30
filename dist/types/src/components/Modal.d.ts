import type { FullScreenOverlayProps } from "./FullScreenOverlay";
import type { ReactNode } from "react";
type ModalProps = {
    children: ReactNode;
    onClose: () => void;
    overlayProps?: Omit<FullScreenOverlayProps, "children" | "onClose">;
    className?: string;
    hideCloseButton?: boolean;
};
export default function Modal({ overlayProps, children, onClose, className, hideCloseButton, }: ModalProps): JSX.Element;
export {};
