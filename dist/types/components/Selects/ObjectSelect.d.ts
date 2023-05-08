export type ObjectSelectProps<T extends Record<string, unknown>> = {
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
export default function ObjectSelect<T extends Record<string, unknown>>({ options, value, onChange, displayKey, onCreate, ...rest }: ObjectSelectProps<T>): JSX.Element;
