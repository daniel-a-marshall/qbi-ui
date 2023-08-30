import React from "react";
export declare function classes(...classArray: (string | undefined | null | false)[]): string | undefined;
export declare function highlightMatch(text: string, searchTerm: string): string | React.ReactNode[];
export declare function findMatches(options: string[], searchTerm: string | undefined | null, isCreatable: boolean | undefined): string[];
