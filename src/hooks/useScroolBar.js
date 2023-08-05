import { useEffect, useRef } from "react";

export default function useScroolBar() {
  const headerRef = useRef();
  useEffect(() => {
    function handleScrool() {
      if (window.pageYOffset > 50) {
        headerRef.current?.classList.add("header-fixed");
      } else {
        headerRef.current?.classList.remove("header-fixed");
      }
    }
    window.addEventListener("scroll", handleScrool);
  }, []);
  return { headerRef };
}
