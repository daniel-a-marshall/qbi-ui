export type SelectProps = {
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
export type ControlledSelectProps = {
    options: string[];
    value: string;
    onChange: (value: string) => void;
    name?: string;
    isCreatable?: boolean;
    isLoading?: boolean;
    className?: string;
    placeholder?: string;
    onToggle?: (isOpen: boolean) => void;
};
export default function Select({ value, onChange, ...props }: SelectProps): JSX.Element;
export declare function UncontrolledSelect({ value: initialValue, name, ...rest }: SelectProps): JSX.Element;
