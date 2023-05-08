export declare function classes(...classArray: (string | undefined | null | false)[]): string | undefined;
export declare function callAllEventHandlers<T>(...fns: (((...args: any[]) => void) | undefined)[]): (event: T, ...args: any[]) => void;
export declare function noop(): void;
export declare function isBoolean(value: any): value is boolean;
export declare function isFunction(value: any): value is Function;
export declare function isNumber(value: any): value is number;
export declare function isString(value: any): value is string;
export declare function wait(ms?: number): Promise<unknown>;
export declare function alphaSort(caseSensitive?: boolean): (a: string, b: string) => 0 | 1 | -1;
export declare function alphaSortByKey(key: string, caseSensitive?: boolean): (a: Record<string, any>, b: Record<string, any>) => 0 | 1 | -1;