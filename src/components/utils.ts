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

export function callAllEventHandlers<T>(
  ...fns: (((...args: any[]) => void) | undefined)[]
) {
  return (event: T, ...args: any[]) =>
    fns.forEach(fn => {
      if (fn) {
        fn(event, ...args);
      }
    });
}

export function noop() {}

export function isBoolean(value: any): value is boolean {
  return typeof value === "boolean";
}

export function isFunction(value: any): value is Function {
  // eslint-disable-next-line eqeqeq
  return !!(value && {}.toString.call(value) == "[object Function]");
}

export function isNumber(value: any): value is number {
  return typeof value === "number" && !isNaN(value);
}

export function isString(value: any): value is string {
  return typeof value === "string";
}

export function wait(ms: number = 1000) {
  return new Promise(res => setTimeout(res, ms));
}

export function alphaSort(caseSensitive?: boolean) {
  return function (a: string, b: string) {
    const _a = caseSensitive ? a : a.toLowerCase();
    const _b = caseSensitive ? b : b.toLowerCase();

    if (_a > _b) return 1;
    if (_a < _b) return -1;
    return 0;
  };
}

export function alphaSortByKey(key: string, caseSensitive?: boolean) {
  return function (a: Record<string, any>, b: Record<string, any>) {
    if (
      a[key] === null ||
      a[key] === undefined ||
      b[key] === null ||
      b[key] === undefined
    ) {
      return 0;
    }

    const _a = caseSensitive ? a[key] : a[key].toLowerCase();
    const _b = caseSensitive ? b[key] : b[key].toLowerCase();

    if (_a > _b) return 1;
    if (_a < _b) return -1;
    return 0;
  };
}
