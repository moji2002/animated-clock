import { memo } from "react";
import Odometer from "../Odometer";
import useClock from "../../hooks/useClock";
import s from "./clock.module.scss";

const Clock = () => {
  const { hours, minutes, seconds } = useClock();

  return (
    <div className={s.wrapper}>
      <Odometer value={hours[0]} />
      <Odometer value={hours[1]} />
      <div>:</div>
      <Odometer value={minutes[0]} />
      <Odometer value={minutes[1]} />
      <div>:</div>
      <Odometer value={seconds[0]} />
      <Odometer value={seconds[1]} />
    </div>
  );
};

export default memo(Clock);
