// hooks/useScrollToTop.ts
import { useEffect } from "react";

export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);
};
