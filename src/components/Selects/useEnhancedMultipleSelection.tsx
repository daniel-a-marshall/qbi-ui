import { UseMultipleSelectionProps, useMultipleSelection } from "downshift";
import React, { useCallback } from "react";

type UseEnhancedMultiselectProps = UseMultipleSelectionProps<string> & {
  selectedItems: string[];
  onSelectItems: (selected: string[]) => void;
  items: string[];
};

export default function useEnhancedMultipleSelection({
  selectedItems,
  onSelectItems,
  onStateChange,
  items,
  ...rest
}: UseEnhancedMultiselectProps) {
  const lastSelectedIndex = React.useRef(-1);
  const { setSelectedItems: _setSelectedIndex, ...downshiftMS } =
    useMultipleSelection({
      selectedItems,
      onStateChange: changes => {
        if (onStateChange) {
          return onStateChange(changes);
        }

        switch (changes.type) {
          case useMultipleSelection.stateChangeTypes
            .SelectedItemKeyDownBackspace:
          case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
          case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
          case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
          case useMultipleSelection.stateChangeTypes.FunctionSetSelectedItems:
            onSelectItems(changes.selectedItems as string[]);
            break;
          default:
            break;
        }
      },
      ...rest,
    });

  const setLastSelectedIndex = (index: number) => {
    lastSelectedIndex.current = index;
  };

  const setSelectedItems = useCallback(
    (selection: string[]) => {
      const keep = selectedItems.filter(s => !selection.includes(s));
      const add = selection.filter(s => !selectedItems.includes(s));

      _setSelectedIndex([...keep, ...add]);
    },
    [_setSelectedIndex, selectedItems]
  );

  const handleOptionSelect = useCallback(
    (e: React.MouseEvent | React.KeyboardEvent, index: number) => {
      const selection =
        !e.shiftKey || lastSelectedIndex.current === -1
          ? [items[index]]
          : items.slice(
              Math.min(lastSelectedIndex.current, index) +
                +(index > lastSelectedIndex.current),
              Math.max(lastSelectedIndex.current, index) +
                +(index > lastSelectedIndex.current)
            );

      lastSelectedIndex.current = index;

      setSelectedItems(selection);
    },
    [items, setSelectedItems]
  );

  const getEnhancedItemProps = useCallback(
    ({ item, index }: { item: string; index: number }) => {
      return {
        item,
        index,
        onClick: (e: React.MouseEvent) => {
          //eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-ignore
          e.nativeEvent.preventDownshiftDefault = true;
          handleOptionSelect(e, index);
        },
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === "Enter") {
            //eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            e.nativeEvent.preventDownshiftDefault = true;
            handleOptionSelect(e, index);
          }
        },
      };
    },
    [handleOptionSelect]
  );

  return {
    ...downshiftMS,
    setSelectedItems,
    setLastSelectedIndex,
    getEnhancedItemProps,
  };
}
