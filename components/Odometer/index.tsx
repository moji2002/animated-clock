import { memo, useEffect, useState } from "react";
import s from "./odometer.module.scss";

type props = {
  value: string;
};

const Odometer = ({ value }: props) => {
  const [prevValue, setPrevValue] = useState("0");

  useEffect(() => {
    const timeoutId = setTimeout(() => setPrevValue(value), 900);
    return () => clearTimeout(timeoutId);
  }, [value]);

  return (
    <div className={s.outer}>
      <div className={value !== prevValue ? s.shift : ""}>
        <div className={s.inner}>{prevValue}</div>
        <div className={s.inner}>{value}</div>
      </div>
    </div>
  );
};

export default memo(Odometer);
