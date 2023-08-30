import { matchSorter } from "match-sorter";
import React from "react";
import { twMerge } from "tailwind-merge";
export function classes(...classArray) {
    const validClasses = classArray.filter(v => v !== null && v !== undefined && v !== false);
    if (classArray.length > 0) {
        return twMerge(validClasses.join(" "));
    }
    return undefined;
}
export function highlightMatch(text, searchTerm) {
    if (!searchTerm)
        return text;
    const index = text.toLowerCase().indexOf(searchTerm.toLowerCase());
    if (index == -1)
        return text;
    const arr = [];
    if (index > 0) {
        arr.push(React.createElement(React.Fragment, { key: 0 }, text.slice(0, index)));
    }
    arr.push(React.createElement("b", { key: 1 }, text.slice(index, index + searchTerm.length)));
    if (index < text.length - searchTerm.length) {
        arr.push(React.createElement(React.Fragment, { key: 2 }, text.slice(index + searchTerm.length)));
    }
    return arr;
}
export function findMatches(options, searchTerm, isCreatable) {
    const matches = matchSorter(options, searchTerm || "", {
        threshold: matchSorter.rankings.CONTAINS,
        baseSort: (a, b) => (a.index < b.index ? -1 : 1),
    });
    if (isCreatable && searchTerm) {
        matches.push(searchTerm);
    }
    return matches;
}
//# sourceMappingURL=utils.js.map