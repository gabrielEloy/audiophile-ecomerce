import { useEffect, useState } from 'react';

import useResizeObserver from 'use-resize-observer';

import { getCurrentScreenSize } from '../services/dimensions';

export function useCurrentScreenSize() {
  const { width, ref } = useResizeObserver();
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const currentScreenSize = getCurrentScreenSize(window.innerWidth);

    if (screenSize !== currentScreenSize) {
      setScreenSize(currentScreenSize);
    }
  }, [width]);

  return {
    screenSize,
    ref,
  };
}
