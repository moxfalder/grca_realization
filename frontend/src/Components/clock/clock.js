import { useState, useEffect } from "react";
import styles from "./clock.module.css";

// console.log(styles);

const Clock = () => {
  const [stateClock, setStateClock] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setStateClock(new Date());
    }, 1000);
  });

  const hours = stateClock.getHours().toString().padStart(2, "0");
  const minutes = stateClock.getMinutes().toString().padStart(2, "0");
  const seconds = stateClock.getSeconds().toString().padStart(2, "0");
  const dayDate = stateClock.getDate().toString().padStart(2, "0");
  const month = (stateClock.getMonth() + 1).toString().padStart(2, "0");
  const year = stateClock.getFullYear();

  const time = `${hours}:${minutes}`;
  const date = `${dayDate}.${month}.${year}`;

  return (
    <div className="clock">
      <div className={styles.clockTime}>{time}</div>
      <div className={styles.clockDate}>{date}</div>
    </div>
  );
};

export default Clock;
