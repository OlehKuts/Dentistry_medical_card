import React, { useState, useEffect } from "react";

export const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000); // кожну секунду годинник буде перевстановлюватися
  }, []);
  return (
    <>
      <div>
        <div className="digitalClock">{time.toTimeString().slice(0, 8)} </div>
      </div>
    </>
  );
};
