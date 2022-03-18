import { useEffect, useState } from "react";
import padWithZeros from "../utils/padWithZeros";

const useCountUp = (initialState = "0000") => {
  const [count, setCount] = useState(initialState);

  const updateCount = () => {
    setCount((c) => padWithZeros(+c + 1, initialState.length));
  };

  useEffect(() => {
    const intervalId = setInterval(updateCount, 1000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return count;
};

export default useCountUp;
