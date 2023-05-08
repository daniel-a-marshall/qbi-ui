type ChipInputProps = {
    value: string[];
    onChange: (value: string[]) => void;
    className?: string;
    placeHolder?: string;
    maxRows?: number;
};
export default function ChipInput({ value, onChange, className, placeHolder, maxRows, }: ChipInputProps): JSX.Element;
export {};
