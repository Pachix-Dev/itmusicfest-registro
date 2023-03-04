import { useLayoutEffect, useState } from 'react';
import debounce from 'lodash.debounce';
// taken from : https://codesandbox.io/s/b78in?file=/src/use-is-mobile.hook.ts:0-516
// https://blog.bitsrc.io/using-react-hooks-to-recognize-respond-to-current-viewport-size-c385009005c0

/**
 * custom hook keeps track of whether the screen is of mobile width size
 * @returns 
 */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const updateSize = ()=> {
      setIsMobile(window.innerWidth < 768);
    };
    updateSize();
    window.addEventListener('resize', debounce(updateSize, 50));    
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return isMobile;
};

export default useIsMobile;