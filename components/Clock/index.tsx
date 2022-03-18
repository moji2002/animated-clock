import { memo, useEffect, useState } from "react";
import Odometer from "../Odometer";
import padWithZeros from "../../utils/padWithZeros";
import s from "./clock.module.scss";

const Clock = () => {
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

  return (
    <div className={s.wrapper}>
      <Odometer value={time["hours"][0]} />
      <Odometer value={time["hours"][1]} />
      <div>:</div>
      <Odometer value={time["minutes"][0]} />
      <Odometer value={time["minutes"][1]} />
      <div>:</div>
      <Odometer value={time["seconds"][0]} />
      <Odometer value={time["seconds"][1]} />
    </div>
  );
};

export default memo(Clock);
