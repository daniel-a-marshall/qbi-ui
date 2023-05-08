import { matchSorter } from "match-sorter";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function classes(
  ...classArray: (string | undefined | null | false)[]
): string | undefined {
  const validClasses = classArray.filter(
    v => v !== null && v !== undefined && v !== false
  );

  if (classArray.length > 0) {
    return twMerge(validClasses.join(" "));
  }

  return undefined;
}

export function highlightMatch(text: string, searchTerm: string) {
  if (!searchTerm) return text;
  const index = text.toLowerCase().indexOf(searchTerm.toLowerCase());
  if (index == -1) return text;

  const arr: ReactNode[] = [];

  if (index > 0) {
    arr.push(<React.Fragment key={0}>{text.slice(0, index)}</React.Fragment>);
  }

  arr.push(<b key={1}>{text.slice(index, index + searchTerm.length)}</b>);

  if (index < text.length - searchTerm.length) {
    arr.push(
      <React.Fragment key={2}>
        {text.slice(index + searchTerm.length)}
      </React.Fragment>
    );
  }
  return arr;
}

export function findMatches(
  options: string[],
  searchTerm: string | undefined | null,
  isCreatable: boolean | undefined
) {
  const matches = matchSorter(options, searchTerm || "", {
    threshold: matchSorter.rankings.CONTAINS,
    baseSort: (a, b) => (a.index < b.index ? -1 : 1),
  });

  if (isCreatable && searchTerm) {
    matches.push(searchTerm);
  }

  return matches;
}
