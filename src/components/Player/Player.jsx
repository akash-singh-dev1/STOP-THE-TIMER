import { useState, useRef } from "react";
import s from "./player.module.css";

export default function Player() {
  //state for the player name.
  const [playerName, setPlayerName] = useState(null);
  //ref to save player name .
  const playerNameRef = useRef();

  // //function to set the player name to whatever user type in input field.
  // const handlePlayerName = (e) => {
  //   setPlayerName(e.target.value);
  // };

  function handleName() {
    setPlayerName(playerNameRef.current.value);
  }

  return (
    <section id={s.player}>
      <h2>
        Welcome <em>{playerName !== "" ? playerName : "unknown"}</em>{" "}
      </h2>
      <div>
        <input type="text" ref={playerNameRef} required maxLength={20} />
        <button onClick={handleName}>Set Name</button>
      </div>
    </section>
  );
}
