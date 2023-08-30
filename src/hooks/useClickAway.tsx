import { useEffect } from "react";

export default function useClickAway(
  ref: React.MutableRefObject<HTMLElement | null>,
  onClickAway: () => void
) {
  useEffect(() => {
    function check(e: MouseEvent) {
      const target: Node = e.target as Node;
      if (!ref.current?.contains(target)) {
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
