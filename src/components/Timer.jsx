import { useState, useRef } from "react";
import Result from "./Result";

export default function TimerChallange({ title, targetTime }) {
  const timer = useRef();
  const dialog =useRef(); 

  const [timeStarted, setTimeStarted] = useState(false);
  const [timeEnded, setTimeEnded] = useState(false);
  function handleTime() {
    setTimeStarted(true);
    timer.current = setTimeout(() => {
      setTimeEnded(true);
      dialog.current?.showModal();
    }, targetTime * 1000);
  }

  function handleTimeOut() {
    clearTimeout(timer.current);
  }

  return (
    <>
    {<Result ref={dialog} targetTime={targetTime} result='lost' /> }
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
    </>
  );
}
