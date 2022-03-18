import { useEffect, useState } from "react";
import padWithZeros from "../utils/padWithZeros";

const useClock = () => {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const updateTime = () => {
    const now = new Date();
    setTime({
      hours: padWithZeros(now.getHours()),
      minutes: padWithZeros(now.getMinutes()),
      seconds: padWithZeros(now.getSeconds()),
    });
  };

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return time;
};

export default useClock;
