import React from "react";
declare const avatarSize: {
    sm: string;
    base: string;
    lg: string;
    xl: string;
    "2xl": string;
    "3xl": string;
    "4xl": string;
    "5xl": string;
    "6xl": string;
    "7xl": string;
    "8xl": string;
    "9xl": string;
    "10xl": string;
};
type AvatarProps = {
    imageUrl?: string;
    alt?: string;
    size?: keyof typeof avatarSize;
    onClick?: (event: React.MouseEvent) => void;
    className?: string;
    style?: {
        [key: string]: any;
    };
};
declare function Avatar({ size, ...props }: AvatarProps): JSX.Element;
export default Avatar;
