import { useEffect } from "react";

export const useScrollToTop = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector("#scroll-container");
    scrollContainer?.scrollTo({ top: 0, behavior: "auto" });
  }, []);
};

