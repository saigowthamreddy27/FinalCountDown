import  { useState, useRef } from "react";
import Result from "./Result";

export default function TimerChallange({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
console.log(targetTime,targetTime*1000)
  if (timeRemaining <= 0) {
    console.log('i am if')
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  }

  function handleTime() {
    console.log('handletime')
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  }

  function handleTimeOut() {
    console.log('handletimeout')
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      {<Result ref={dialog} targetTime={targetTime} result="lost" />}
      <section className="challenge">
        <h2>{title}</h2>
        
        <p className="challenge-time">
          {targetTime} second{targetTime ? "s" : ""}
        </p>
        <p>
          <button onClick={timerActive ? handleTimeOut : handleTime}>
            {timerActive ? "stop" : "start"} challange
          </button>
        </p>
        <p className={timerActive ? "active" : undefined}>
          {timerActive ? "time is running" : " time inactive"} /
        </p>
      </section>
    </>
  );
}
