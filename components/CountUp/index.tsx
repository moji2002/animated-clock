import { memo, useEffect, useState } from "react";
import Odometer from "../Odometer";
import padWithZeros from "../../utils/padWithZeros";
import s from "./count-up.module.scss";

const CountUp = () => {
  const [count, setCount] = useState("0000");

  const updateCount = () => {
    setCount((c) => padWithZeros(+c + 1, 4));
  };

  useEffect(() => {
    const intervalId = setInterval(updateCount, 1000);
    return () => clearInterval(intervalId);
  }, []);

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
