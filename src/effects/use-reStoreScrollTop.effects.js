import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const useScrollToTop = () => {
  const { pathname } = useLocation();
  const [isGoBack, setIsGoBack] = useState(false)

  useEffect(() => {
    if (isGoBack) {

      let scrollY2 = sessionStorage.getItem(pathname)
      window.scrollTo(0, scrollY2)

    } else {
      window.scrollTo(0, 0);
    }

    window.addEventListener("popstate", function () {
      setIsGoBack(true)
    })


  }, [pathname, isGoBack]);

  useEffect(() => {
    return function unmount() {
      let scrollY = window.scrollY
      console.log(pathname, scrollY, window.scrollY)
      sessionStorage.setItem(pathname, scrollY)

      setIsGoBack(false)
    }
  }, [pathname]);

  return null;
};

export default useScrollToTop;
