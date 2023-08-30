export default function VirtualOptionList({ options, itemPropsGetter, inputValue, selected, highlightedIndex, isCreatable, maxHeight, className, }: {
    options: string[];
    itemPropsGetter: (props: {
        item: string;
        index: number;
    }) => any;
    inputValue: string;
    selected: string | string[];
    highlightedIndex: number;
    isCreatable?: boolean;
    maxHeight?: string;
    className?: string;
}): JSX.Element;
