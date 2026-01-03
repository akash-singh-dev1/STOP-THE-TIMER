import s from "./ResultModel.module.css";
import { createPortal } from "react-dom";

const ResultModel = ({ ref, targetTime, timeRemaining, handleReset }) => {
  const userLost = timeRemaining <= 0;
  const formattedRemainingTime = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

  return createPortal(
    <dialog ref={ref} className={s["result-modal"]} onClose={handleReset}>
      {userLost ? <h2>You lost</h2> : <h2>your score:{score}</h2>}
      <p>
        the target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        you stopped the timer with{" "}
        <strong>{formattedRemainingTime} second left</strong>
      </p>
      {/*A dialog can be closed without JavaScript by using a <form> element inside the <dialog> with method="dialog" 
        When the button is clicked, the dialog closes, and the button's value (if any) is stored in the dialog's
        returnValue property, but the form is not actually submitted to a server.  */}
      <form method="dialog" onSubmit={handleReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
};
export default ResultModel;
