import { useState, useRef } from "react";

export default function TimerChallange({ title, targetTime }) {
  const timer = useRef();

  const [timeStarted, setTimeStarted] = useState(false);
  const [timeEnded, setTimeEnded] = useState(false);
  function handleTime() {
    setTimeStarted(true);
    timer.current = setTimeout(() => {
      setTimeEnded(true);
    }, targetTime * 1000);
  }

  function handleTimeOut() {
    clearTimeout(timer.current);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timeEnded && <p>you lost</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime ? "s" : ""}
      </p>
      <p>
        <button onClick={timeStarted ? handleTimeOut : handleTime}>
          {timeStarted? "stop" : "start"} challange
        </button>
      </p>
      <p className={timeStarted ? "active" : undefined}>
        {timeStarted ? "time is running" : " time inactive"} /
      </p>
    </section>
  );
}
