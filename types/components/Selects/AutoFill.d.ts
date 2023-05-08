import React from "react";
export default function AutoFill({ options, onChange, isCreatable, inputRef, className, }: {
    options: string[];
    onChange: (value: string) => void;
    isCreatable?: boolean;
    inputRef?: React.MutableRefObject<HTMLInputElement | null>;
    className?: string;
}): JSX.Element;
