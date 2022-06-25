import { useState, useEffect } from "react";

export const useCountdown = (initialTime: number) => {
  const [timeRemaining, setTime] = useState(initialTime * 1000);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (!pause && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTime(timeRemaining - 1000);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [timeRemaining, pause]);

  return {
    timeRemaining,
    percentRemaining: Math.floor(timeRemaining / (initialTime * 10)),
    setTime: (time: number) => setTime(time * 1000),
    setPause
  };
};
