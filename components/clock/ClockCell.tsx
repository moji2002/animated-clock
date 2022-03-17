import { memo, useEffect, useState } from "react";
import s from "./clock.module.scss";

type props = {
  value: string;
};

const ClockCell = ({ value }: props) => {
  const [isUp, setUp] = useState(false);
  const [upperValue, setUpperValue] = useState("0");

  useEffect(() => {
    setUp(true);

    setTimeout(() => {
      setUpperValue(value);
      setUp(false);
    }, 900);
  }, [value]);

  return (
    <div className={s.cell_outer}>
      <div className={`${isUp ? s.cell_up : ""}`}>
        <div className={s.cell_inner}>{upperValue}</div>
        <div className={s.cell_inner}>{value}</div>
      </div>
    </div>
  );
};

export default memo(ClockCell);
