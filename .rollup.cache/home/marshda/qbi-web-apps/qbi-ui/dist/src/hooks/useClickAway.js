import { useEffect } from "react";
export default function useClickAway(ref, onClickAway) {
    useEffect(() => {
        function check(e) {
            var _a;
            const target = e.target;
            if (!((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(target))) {
                onClickAway();
            }
        }
        document.addEventListener("click", check);
        document.addEventListener("contextmenu", check);
        return () => {
            document.removeEventListener("click", check);
            document.removeEventListener("contextmenu", check);
        };
    }, [ref, onClickAway]);
}
//# sourceMappingURL=useClickAway.js.map