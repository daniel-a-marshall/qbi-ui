import { cloneElement, ReactElement } from "react";

import React from "react";
import { classes } from "../utils";

export default function FormControl(props: {
  id: string;
  children: ReactElement;
  name?: string;
  helperText?: string;
  errorText?: string;
  label?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      {props.label && (
        <label className="block font-semibold" htmlFor={props.id}>
          {props.label}
        </label>
      )}
      {cloneElement(props.children, {
        id: props.id,
        name: props.name || props.id,
        "data-error": props.errorText ? "error" : "",
      })}
      <p
        className={classes(
          "text-sm",
          props.errorText ? "text-red-500" : "opacity-70"
        )}
      >
        {props.errorText || props.helperText || ""}
      </p>
    </div>
  );
}
