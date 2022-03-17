import { memo, useEffect, useState } from "react";
import s from "./clock.module.scss";
import ClockCell from "./ClockCell";

import padWithZeros from "../../utils/padWithZeros";

const Clock = () => {
  const [time, setTime] = useState({
    hour: "00",
    minute: "00",
    second: "00",
  });

  const updateTime = () => {
    const now = new Date();
    setTime({
      hour: padWithZeros(now.getHours()),
      minute: padWithZeros(now.getMinutes()),
      second: padWithZeros(now.getSeconds()),
    });
  };

  useEffect(() => {
    setInterval(updateTime, 1000);
  }, []);

  return (
    <div className={s.wrapper}>
      <ClockCell value={time["hour"][0]} />
      <ClockCell value={time["hour"][1]} />
      <div>:</div>
      <ClockCell value={time["minute"][0]} />
      <ClockCell value={time["minute"][1]} />
      <div>:</div>
      <ClockCell value={time["second"][0]} />
      <ClockCell value={time["second"][1]} />
    </div>
  );
};

export default memo(Clock);
