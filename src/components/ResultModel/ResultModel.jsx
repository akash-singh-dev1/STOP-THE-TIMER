import s from "./ResultModel.module.css";

const ResultModel = ({ ref, result, targetTime, setTimerStarted }) => {
  function handleStopTimer() {
    setTimerStarted(false);
  }
  return (
    <dialog ref={ref} className={s["result-modal"]}>
      <h2>you {result}</h2>
      <p>
        the target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        you stopped the timer with <strong>x second left</strong>
      </p>
      {/*A dialog can be closed without JavaScript by using a <form> element inside the <dialog> with method="dialog" 
        When the button is clicked, the dialog closes, and the button's value (if any) is stored in the dialog's
        returnValue property, but the form is not actually submitted to a server.  */}
      <form method="dialog">
        <button onClick={handleStopTimer}>Close</button>
      </form>
    </dialog>
  );
};
export default ResultModel;
