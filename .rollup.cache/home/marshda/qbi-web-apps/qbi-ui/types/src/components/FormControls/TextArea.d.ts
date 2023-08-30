import type { TextareaHTMLAttributes } from "react";
type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    disableAutoHeight?: boolean;
};
export default function TextArea(props: TextAreaProps): JSX.Element;
export {};
