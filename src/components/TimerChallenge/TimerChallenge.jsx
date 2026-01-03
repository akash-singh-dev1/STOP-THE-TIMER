import React from "react";
import s from "./TimerChallenge.module.css";
import { useState, useRef } from "react";
import ResultModel from "../ResultModel/ResultModel.jsx";

const TimerChallenge = ({ tittle, targetTime }) => {
  // //state to know whether timer started or not.
  // const [timerStarted, setTimerStarted] = useState(false);

  // //state to know timer is expired or not.
  // const [timerExpired, setTimerExpired] = useState(false);

  // ref to store the timerId so that we can stop it.
  const timerId = useRef();

  // ref to store the dialog node.
  const dialog = useRef();

  //state to know how much time is remaining.
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  //constant to know if timer is active or not.
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  /*condition to check if there is need to stop the timer and show modal
  this will automatically show modal if you wear not able to stop timer at intended time*/
  if (timeRemaining <= 0) {
    clearInterval(timerId.current);
    dialog.current.showModal();
  }
  // function to stop timer, it basically for the dialog form when we will submit it on button click.
  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };
  //function to start timer.
  const handleStart = () => {
    timerId.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };

  //function to stop the timer it will also show model.
  const handleStop = () => {
    clearInterval(timerId.current);
    dialog.current.showModal();
  };
  return (
    <>
      <ResultModel
        ref={dialog}
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        handleReset={handleReset}
      />

      <section className={s.challenge}>
        <h2>{tittle}</h2>
        {/* {timerExpired ? <p>YOU LOST THE CHALLENGE</p> : ""} */}
        <p className={s["challenge-time"]}>{targetTime} second</p>
        <button
          onClick={timerIsActive ? handleStop : handleStart}
          type="button"
        >
          {timerIsActive ? "stop" : "start"} challenge
        </button>
        <p className={timerIsActive ? s.active : undefined}>
          {timerIsActive ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
};
export default TimerChallenge;
