import { useEffect, useState } from "react";

function useCounterHook(intialCount) {
  const [count, setCount] = useState(intialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const incrementCounter = () => {
    setCount(count + 1 );
  };

  return {
    count,
    incrementCounter,
  };
}

export default useCounterHook;
