import { useEffect, useState } from "react";

export function useOnScreen(options: any) {
  const [ref, setRef]: any = useState(undefined);
  const [isVisible, setIsVisible]: any = useState(false);

  useEffect(() => {
    const observer: any = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, isVisible, options]);

  return { setRef, isVisible };
}
