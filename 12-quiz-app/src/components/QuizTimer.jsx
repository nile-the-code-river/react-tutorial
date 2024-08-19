import { useState, useEffect } from "react";

export default function QuizTimer({ timeout, onTimerExpired }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  console.log(timeout + " " + remainingTime);

  useEffect(() => {
    const timer = setTimeout(onTimerExpired, timeout);

    return () => {
      setRemainingTime((x) => timeout);
      clearTimeout(timer);
    };
  }, [onTimerExpired, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [onTimerExpired]);

  return <progress id="quesiton-time" value={remainingTime} max={timeout} />;
}
