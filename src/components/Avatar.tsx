import React, { useEffect, useState } from "react";
import { classes } from "./utils";
import CircleSpinner from "./CircleSpinner";

const avatarSize = {
  sm: "1.5rem",
  base: "2rem",
  lg: "2.25rem",
  xl: "2.5rem",
  "2xl": "3rem",
  "3xl": "3.5rem",
  "4xl": "4rem",
  "5xl": "4.5rem",
  "6xl": "5rem",
  "7xl": "6rem",
  "8xl": "7rem",
  "9xl": "8rem",
  "10xl": "9rem",
};

const textSize = {
  sm: ".75rem",
  base: "1rem",
  lg: "1rem",
  xl: "1rem",
  "2xl": "1.25rem",
  "3xl": "1.5rem",
  "4xl": "1.75rem",
  "5xl": "2rem",
  "6xl": "2.25rem",
  "7xl": "2.5rem",
  "8xl": "2.75rem",
  "9xl": "3rem",
  "10xl": "3.25rem",
};

type AvatarProps = {
  imageUrl?: string;
  alt?: string;
  size?: keyof typeof avatarSize;
  onClick?: (event: React.MouseEvent) => void;
  className?: string;
  style?: { [key: string]: any };
};

function Avatar({ size = "base", ...props }: AvatarProps) {
  const [imageErrored, setImageErrored] = useState(false);

  function handleError() {
    setImageErrored(true);
  }

  if (props.imageUrl && !imageErrored) {
    return (
      <img
        src={props.imageUrl}
        alt={props.alt}
        onError={handleError}
        className={classes(
          "rounded-full object-cover",
          props.onClick ? "cursor-pointer" : null,
          props.className
        )}
        style={{
          height: avatarSize[size],
          width: avatarSize[size],
          ...props.style,
        }}
        onClick={props.onClick}
      />
    );
  }

  return (
    <div
      className={classes(
        "rounded-full bg-gray-800 text-center text-white cursor-pointer",
        props.onClick ? "cursor-pointer" : null,
        props.className
      )}
      style={{
        height: avatarSize[size],
        width: avatarSize[size],
        lineHeight: avatarSize[size],
        ...props.style,
      }}
      onClick={props.onClick}
    >
      <span style={{ fontSize: textSize[size] }}>{props.alt?.slice(0, 1)}</span>
    </div>
  );
}

export default Avatar;
