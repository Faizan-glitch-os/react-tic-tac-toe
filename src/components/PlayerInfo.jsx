import { useState } from "react";

export default function PlayerInfo({ playerName, playerSymbol }) {
  let [editing, isEditing] = useState(false);
  let [initialPlayerName, editPlayerName] = useState(playerName);

  function buttonHandler() {
    isEditing((inverse) => !inverse);
    console.log(editing);
  }

  function inputHandler(event) {
    editPlayerName(event.target.value);
  }

  let playerElement = <span className="player-name">{initialPlayerName}</span>;
  let buttonName = "Edit";
  if (editing) {
    playerElement = (
      <input
        type="text"
        required
        value={initialPlayerName}
        onChange={inputHandler}
      ></input>
    );
    buttonName = "Save";
  }
  return (
    <li className="player">
      {playerElement}
      <span className="player-symbol">{playerSymbol}</span>
      <button onClick={buttonHandler}>{buttonName}</button>
    </li>
  );
}
