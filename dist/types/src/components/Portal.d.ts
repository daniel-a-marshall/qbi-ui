import { ReactNode } from "react";
export default function Portal({ children }: {
    children?: ReactNode;
}): import("react").ReactPortal;
