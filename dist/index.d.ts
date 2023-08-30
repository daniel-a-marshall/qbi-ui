import * as React from 'react';
import React__default, { ReactNode, CSSProperties, ReactElement, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { PopperProps } from '@mui/base/Popper';

type FullScreenOverlayProps = {
    children: ReactNode;
    onClose?: () => void;
    onContextMenu?: (e: React__default.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    className?: string;
    asPortal?: boolean;
    disableClickOutside?: boolean;
};
declare function FullScreenOverlay(props: FullScreenOverlayProps): JSX.Element;

declare function CircleSpinner({ color, background, className, }: {
    color?: string;
    background?: string;
    className?: string;
}): JSX.Element;

declare function Menu(props: {
    children: ReactNode;
    submenu?: boolean;
    open?: boolean;
}): JSX.Element;
declare function MenuButton(props: {
    children: ReactNode;
    className?: string;
    variant?: "outline";
    onClick?: (e: React__default.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}): JSX.Element;
declare function UnstyledMenuButton({ as: Tag, children, className, style, onClick, }: {
    as?: React__default.ElementType;
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    onClick?: (e: React__default.MouseEvent<HTMLElement, MouseEvent>) => void;
}): JSX.Element;
declare function MenuList(props: {
    children: ReactNode;
    modifiers?: PopperProps["modifiers"];
    open?: boolean;
    anchorRef?: HTMLElement | null;
    onClickOustide?: (event: MouseEvent | TouchEvent) => void;
    className?: string;
    placement?: PopperProps["placement"];
}): JSX.Element;
declare function MenuItem(props: {
    children: ReactNode | ((closeMenu: () => void) => ReactNode);
    disableCloseOnClick?: boolean;
    onClick?: (event: React__default.MouseEvent<HTMLElement>) => void;
    className?: string;
    submenu?: boolean;
}): JSX.Element;

type SelectProps = {
    options: string[];
    value?: string;
    name?: string;
    onChange?: (value: string) => void;
    isCreatable?: boolean;
    isLoading?: boolean;
    className?: string;
    placeholder?: string;
    onToggle?: (isOpen: boolean) => void;
};
declare function Select({ value, onChange, ...props }: SelectProps): JSX.Element;

type MultiselectProps = {
    options: string[];
    value: string[];
    onChange: (value: string[]) => void;
    isCreatable?: boolean;
    isLoading?: boolean;
    className?: string;
    placeholder?: string;
    onToggle?: (isOpen: boolean) => void;
    maxRows?: number;
};
declare function MultiSelect({ options: initialOptions, value, onChange, isCreatable, isLoading, className, placeholder, onToggle, maxRows, }: MultiselectProps): JSX.Element;

type ObjectSelectProps<T extends Record<string, unknown>> = {
    options: T[];
    value: T | undefined;
    onChange: (value: T) => void;
    displayKey: keyof T;
    onCreate?: (value: string) => T;
    isLoading?: boolean;
    className?: string;
    placeholder?: string;
    onToggle?: (isOpen: boolean) => void;
};
declare function ObjectSelect<T extends Record<string, unknown>>({ options, value, onChange, displayKey, onCreate, ...rest }: ObjectSelectProps<T>): JSX.Element;

declare function AutoFill({ options, onChange, isCreatable, inputRef, className, }: {
    options: string[];
    onChange: (value: string) => void;
    isCreatable?: boolean;
    inputRef?: React__default.MutableRefObject<HTMLInputElement | null>;
    className?: string;
}): JSX.Element;

declare const Button: React__default.ForwardRefExoticComponent<{
    children: React__default.ReactNode;
    as?: React__default.ElementType<any> | undefined;
    variant?: "outline" | "error" | undefined;
} & React__default.ButtonHTMLAttributes<HTMLButtonElement> & React__default.RefAttributes<HTMLElement>>;

declare const IconButton: React__default.ForwardRefExoticComponent<{
    children: React__default.ReactNode;
    as?: React__default.ElementType<any> | undefined;
    variant?: "light" | undefined;
} & React__default.ButtonHTMLAttributes<HTMLButtonElement> & React__default.RefAttributes<HTMLElement>>;

declare function SplitButton(props: {
    label: string;
    children: ReactNode;
    variant?: "outline";
}): JSX.Element;

declare function FormControl(props: {
    id: string;
    children: ReactElement;
    name?: string;
    helperText?: string;
    errorText?: string;
    label?: string;
}): JSX.Element;

declare function Input(props: InputHTMLAttributes<HTMLInputElement>): JSX.Element;

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    disableAutoHeight?: boolean;
};
declare function TextArea(props: TextAreaProps): JSX.Element;

type ChipInputProps = {
    value: string[];
    onChange: (value: string[]) => void;
    className?: string;
    placeHolder?: string;
    maxRows?: number;
};
declare function ChipInput({ value, onChange, className, placeHolder, maxRows, }: ChipInputProps): JSX.Element;

declare function ContextMenu({ x, y, children, onClose, }: {
    x: number;
    y: number;
    children: ReactNode;
    onClose: () => void;
}): JSX.Element;
declare function ContextMenuList({ className, children, }: {
    className?: string;
    children: ReactNode;
}): JSX.Element;
declare function ContextMenuItem({ children, disableCloseOnClick, onClick, className, }: {
    children: ReactNode;
    disableCloseOnClick?: boolean;
    onClick?: (event: React__default.MouseEvent<HTMLElement>) => void;
    className?: string;
}): JSX.Element;

type ModalProps = {
    children: ReactNode;
    onClose: () => void;
    overlayProps?: Omit<FullScreenOverlayProps, "children" | "onClose">;
    className?: string;
    hideCloseButton?: boolean;
};
declare function Modal({ overlayProps, children, onClose, className, hideCloseButton, }: ModalProps): JSX.Element;

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
    onClick?: (event: React__default.MouseEvent) => void;
    className?: string;
    style?: {
        [key: string]: any;
    };
};
declare function Avatar({ size, ...props }: AvatarProps): JSX.Element;

declare function Portal({ children }: {
    children?: ReactNode;
}): React.ReactPortal;

export { AutoFill, Avatar, Button, ChipInput, CircleSpinner, ContextMenu, ContextMenuItem, ContextMenuList, FormControl, FullScreenOverlay, IconButton, Input, Menu, MenuButton, MenuItem, MenuList, Modal, MultiSelect as Multiselect, ObjectSelect, Portal, Select, SplitButton, TextArea, UnstyledMenuButton };
