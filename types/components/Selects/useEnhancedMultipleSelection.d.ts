import { UseMultipleSelectionProps } from "downshift";
import React from "react";
type UseEnhancedMultiselectProps = UseMultipleSelectionProps<string> & {
    selectedItems: string[];
    onSelectItems: (selected: string[]) => void;
    items: string[];
};
export default function useEnhancedMultipleSelection({ selectedItems, onSelectItems, onStateChange, items, ...rest }: UseEnhancedMultiselectProps): {
    setSelectedItems: (selection: string[]) => void;
    setLastSelectedIndex: (index: number) => void;
    getEnhancedItemProps: ({ item, index }: {
        item: string;
        index: number;
    }) => {
        item: string;
        index: number;
        onClick: (e: React.MouseEvent) => void;
        onKeyDown: (e: React.KeyboardEvent) => void;
    };
    selectedItems: string[];
    activeIndex: number;
    getDropdownProps: (options?: import("downshift").UseMultipleSelectionGetDropdownProps | undefined, extraOptions?: import("downshift").GetPropsCommonOptions | undefined) => any;
    getSelectedItemProps: (options: import("downshift").UseMultipleSelectionGetSelectedItemPropsOptions<string>) => any;
    reset: () => void;
    addSelectedItem: (item: string) => void;
    removeSelectedItem: (item: string) => void;
    setActiveIndex: (index: number) => void;
};
export {};
