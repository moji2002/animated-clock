import { memo } from "react";
import Odometer from "../Odometer";
import useCountUp from "../../hooks/useCountUp";
import s from "./count-up.module.scss";

const CountUp = () => {
  const count = useCountUp();

  return (
    <div className={s.wrapper}>
      <Odometer value={count[0]} />
      <Odometer value={count[1]} />
      <Odometer value={count[2]} />
      <Odometer value={count[3]} />
    </div>
  );
};

export default memo(CountUp);
