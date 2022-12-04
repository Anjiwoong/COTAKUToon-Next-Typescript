import { useEffect, useRef } from 'react';

const UseInterval = (
  callback: () => void,
  delay: number,
  dependency: number
) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const executeCallback = () => {
      savedCallback.current();
    };

    const timerId = setInterval(executeCallback, delay);

    return () => clearInterval(timerId);
  }, [dependency]);
};

export default UseInterval;
