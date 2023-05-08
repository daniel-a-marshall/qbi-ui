import type { InputHTMLAttributes } from "react";

import React from "react";
import { classes } from "../utils";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  const { className, ...inputProps } = props;

  return (
    <input
      {...inputProps}
      className={classes(
        "text-sm border border-gray-200 py-2 px-4 rounded focus-within:outline-primary-600 error:border-transparent error:-outline-offset-1 error:outline error:outline-2 error:outline-red-500",
        className
      )}
    />
  );
}
