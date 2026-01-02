import Player from "./components/Player/Player";
import Header from "./components/Header/Header";
import TimerChallenge from "./components/TimerChallenge/TimerChallenge";
function App() {
  return (
    <>
      <Header />
      <Player />
      <div id="challenges">
        <TimerChallenge tittle={"easy"} targetTime={1} />
        <TimerChallenge tittle={"not easy"} targetTime={5} />
        <TimerChallenge tittle={"getting tough"} targetTime={10} />
        <TimerChallenge tittle={"pros only"} targetTime={15} />
      </div>
    </>
  );
}

export default App;
