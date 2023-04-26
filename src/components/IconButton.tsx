import React from "react";
import { classes } from "./utils";

type IconButtonProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  variant?: "light";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = React.forwardRef<HTMLElement, IconButtonProps>(
  ({ children, as: Tag = "button", className, variant, ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={classes(
          "bg-transparent rounded-full p-2 h-fit w-fit leading-none disabled:bg-transparent child-svg:w-4 child-svg:h-4", //"focus-within:outline focus-within:outline-2 focus-within:outline-primary-600"
          variant === "light"
            ? "text-gray-100 hover:bg-white/5 disabled:text-gray-600"
            : "text-primary-700 hover:bg-black/10 disabled:text-gray-200",
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
