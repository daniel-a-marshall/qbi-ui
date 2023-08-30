import { ReactElement } from "react";
export default function FormControl(props: {
    id: string;
    children: ReactElement;
    name?: string;
    helperText?: string;
    errorText?: string;
    label?: string;
}): JSX.Element;
