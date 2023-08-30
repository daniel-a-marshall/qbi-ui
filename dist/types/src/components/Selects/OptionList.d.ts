import React from "react";
type OptionListProps = {
    options: string[];
    itemPropsGetter: (props: {
        item: string;
        index: number;
    }) => any;
    inputValue: string;
    selected: string | string[];
    highlightedIndex: number;
    isCreatable?: boolean;
    className?: string;
    maxHeight?: string;
    onItemClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
export default function OptionList({ options, itemPropsGetter, inputValue, selected, highlightedIndex, isCreatable, className, maxHeight, onItemClick, }: OptionListProps): JSX.Element;
export {};
