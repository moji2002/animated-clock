import { memo, useEffect, useState } from "react";
import s from "./clock.module.scss";

type props = {
  value: string;
};

const ClockCell = ({ value }: props) => {
  const [prevValue, setPrevValue] = useState("0");

  useEffect(() => {
    const timeoutId = setTimeout(() => setPrevValue(value), 900);
    return () => clearTimeout(timeoutId);
  }, [value]);

  return (
    <div className={s.cell_outer}>
      <div className={value !== prevValue ? s.cell_up : ""}>
        <div className={s.cell_inner}>{prevValue}</div>
        <div className={s.cell_inner}>{value}</div>
      </div>
    </div>
  );
};

export default memo(ClockCell);
