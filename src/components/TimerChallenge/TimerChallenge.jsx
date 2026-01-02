import React from "react";
import s from "./TimerChallenge.module.css";
import { useState, useRef } from "react";
import ResultModel from "../ResultModel/ResultModel.jsx";

const TimerChallenge = ({ tittle, targetTime }) => {
  //state to know whether timer started or not.
  const [timerStarted, setTimerStarted] = useState(false);

  //state to know timer is expired or not.
  const [timerExpired, setTimerExpired] = useState(false);

  // ref to store the timerId so that we can stop it.
  const timerId = useRef();

  // ref to store the dialog node.
  const dialog = useRef();

  //function to start timer.
  const handleStart = () => {
    timerId.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);

    setTimerStarted(true);
  };

  //function to stop the timer.
  const handleStop = () => {
    clearTimeout(timerId.current);
    setTimerStarted(false);
    setTimerExpired(false);
  };
  return (
    <>
      <ResultModel
        ref={dialog}
        result={"lost"}
        targetTime={targetTime}
        setTimerStarted={setTimerStarted}
      />

      <section className={s.challenge}>
        <h2>{tittle}</h2>
        {/* {timerExpired ? <p>YOU LOST THE CHALLENGE</p> : ""} */}
        <p className={s["challenge-time"]}>{targetTime} second</p>
        <button onClick={timerStarted ? handleStop : handleStart} type="button">
          {timerStarted ? "stop" : "start"} challenge
        </button>
        <p className={timerStarted ? s.active : undefined}>
          {timerStarted ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
};
export default TimerChallenge;
