import { useEffect, useState } from "react";

const useScrollPosition = () => {
  let timeout : NodeJS.Timeout;
  const [isScrolling, setIsScrolling] = useState(false)

  const [
    scrollPosition,
    setScrollPosition
  ] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if(!isScrolling){
      setScrollPosition({ x: window.scrollX, y: window.scrollY });
    }
  }, [isScrolling])

  const onScroll = () => {
    setIsScrolling(true)
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      setIsScrolling(false);
    }, 50);
  };

  return scrollPosition;
};

export default useScrollPosition;