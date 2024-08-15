import { useState, useRef } from "react";

export default function Player() {
  const enteredPlayerName = useRef();
  const [playerName, setPlayerName] = useState(null);

  const handleClick = () => {
    setPlayerName(enteredPlayerName.current.value);
    enteredPlayerName.current.value = null;
  };

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "Guest"}</h2>
      <p>
        <input ref={enteredPlayerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
