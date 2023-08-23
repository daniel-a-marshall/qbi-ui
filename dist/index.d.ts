import React, { ReactNode, CSSProperties, ReactElement, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { PopperProps } from '@mui/base/Popper';

type FullScreenOverlayProps = {
    children: ReactNode;
    onClose?: () => void;
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
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}): JSX.Element;
declare function UnstyledMenuButton({ as: Tag, children, className, style, onClick, }: {
    as?: React.ElementType;
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
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
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
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
    inputRef?: React.MutableRefObject<HTMLInputElement | null>;
    className?: string;
}): JSX.Element;

declare const Button: React.ForwardRefExoticComponent<{
    children: React.ReactNode;
    as?: React.ElementType<any> | undefined;
    variant?: "outline" | "error" | undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLElement>>;

declare const IconButton: React.ForwardRefExoticComponent<{
    children: React.ReactNode;
    as?: React.ElementType<any> | undefined;
    variant?: "light" | undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLElement>>;

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
    onClick?: (event: React.MouseEvent) => void;
    className?: string;
    style?: {
        [key: string]: any;
    };
};
declare function Avatar({ size, ...props }: AvatarProps): JSX.Element;

export { AutoFill, Avatar, Button, ChipInput, CircleSpinner, FormControl, FullScreenOverlay, IconButton, Input, Menu, MenuButton, MenuItem, MenuList, Modal, MultiSelect as Multiselect, ObjectSelect, Select, SplitButton, TextArea, UnstyledMenuButton };
