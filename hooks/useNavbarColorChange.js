import { useEffect, useState } from "react";

export function useNavbarColorChange() {
  
  const [ isNavbarTransparent, setIsNavbarTransparent ] = useState(true)


  useEffect(() => {

    function handleScroll() {
      if (window.scrollY > 50) {
        setIsNavbarTransparent(false)
      } else {
        setIsNavbarTransparent(true)
      }
    }


    document.addEventListener("scroll", handleScroll)


    return () => {
      document.removeEventListener("scroll", handleScroll)
    }

  },[])


  return {
    isNavbarTransparent
  }
}
