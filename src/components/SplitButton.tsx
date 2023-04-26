import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactNode } from "react";
import { classes } from "./utils";
import Button from "./Button";
import { Menu, MenuButton, UnstyledMenuButton } from "./Menu";
import React from "react";

export function BaseSplitButton(props: { children: ReactNode }) {
  return <div className="flex flex-nowrap items-center">{props.children}</div>;
}

export default function SplitButton(props: {
  label: string;
  children: ReactNode;
  variant?: "outline";
}) {
  return (
    <BaseSplitButton>
      <Button
        variant={props.variant}
        className={classes(
          //"btn",
          //props.variant === "outline" ? "btn-outline border-r-0" : null,
          "border-r-0 rounded-r-none"
        )}
      >
        {props.label}
      </Button>
      <Menu>
        <MenuButton
          variant={props.variant}
          className={classes(
            "py-[.7rem] rounded-l-none",
            props.variant !== "outline" &&
              "border-l-white/40 hover:border-l hover:border-l-white/40"
          )}
        >
          <FontAwesomeIcon icon={faChevronDown} className="!h-3" />
        </MenuButton>
        {props.children}
      </Menu>
    </BaseSplitButton>
  );
}
