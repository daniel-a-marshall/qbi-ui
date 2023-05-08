import type { TextareaHTMLAttributes } from "react";

import React from "react";
import { classes } from "../utils";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  disableAutoHeight?: boolean;
};

export default function TextArea(props: TextAreaProps) {
  const { disableAutoHeight, className, onChange, ...textareaProps } = props;

  const autoSize = (element: HTMLElement | null) => {
    if (!disableAutoHeight && element) {
      element.style.height = `${element.scrollHeight + 2}px`;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    autoSize(event.target);
    onChange?.(event);
  };

  return (
    <textarea
      ref={autoSize}
      {...textareaProps}
      onChange={handleChange}
      className={classes(
        "text-sm border border-gray-200 py-2 px-4 rounded focus-within:outline-primary-600 error:border-transparent error:-outline-offset-1 error:outline error:outline-2 error:outline-red-500",
        className
      )}
    />
  );
}
