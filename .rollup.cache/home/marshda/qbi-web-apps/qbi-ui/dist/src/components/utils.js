import { twMerge } from "tailwind-merge";
export function classes(...classArray) {
    const validClasses = classArray.filter(v => v !== null && v !== undefined && v !== false);
    if (classArray.length > 0) {
        return twMerge(validClasses.join(" "));
    }
    return undefined;
}
export function callAllEventHandlers(...fns) {
    return (event, ...args) => fns.forEach(fn => {
        if (fn) {
            fn(event, ...args);
        }
    });
}
export function noop() { }
export function isBoolean(value) {
    return typeof value === "boolean";
}
export function isFunction(value) {
    // eslint-disable-next-line eqeqeq
    return !!(value && {}.toString.call(value) == "[object Function]");
}
export function isNumber(value) {
    return typeof value === "number" && !isNaN(value);
}
export function isString(value) {
    return typeof value === "string";
}
export function wait(ms = 1000) {
    return new Promise(res => setTimeout(res, ms));
}
export function alphaSort(caseSensitive) {
    return function (a, b) {
        const _a = caseSensitive ? a : a.toLowerCase();
        const _b = caseSensitive ? b : b.toLowerCase();
        if (_a > _b)
            return 1;
        if (_a < _b)
            return -1;
        return 0;
    };
}
export function alphaSortByKey(key, caseSensitive) {
    return function (a, b) {
        if (a[key] === null ||
            a[key] === undefined ||
            b[key] === null ||
            b[key] === undefined) {
            return 0;
        }
        const _a = caseSensitive ? a[key] : a[key].toLowerCase();
        const _b = caseSensitive ? b[key] : b[key].toLowerCase();
        if (_a > _b)
            return 1;
        if (_a < _b)
            return -1;
        return 0;
    };
}
//# sourceMappingURL=utils.js.map