import Player from "./components/Player.jsx";
import TimerChallange from "./components/Timer.jsx";
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
      <TimerChallange title="too easy" targetTime={0} />
      <TimerChallange title="easy" targetTime={5} />
      <TimerChallange title="medium" targetTime={10} />
      <TimerChallange title="hard" targetTime={15} />
      </div>
    </>
  );
}

export default App;
