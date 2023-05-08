export type MultiselectProps = {
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
export default function MultiSelect({ options: initialOptions, value, onChange, isCreatable, isLoading, className, placeholder, onToggle, maxRows, }: MultiselectProps): JSX.Element;
