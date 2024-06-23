import { useState } from "react";

export default function PlayerInfo({ playerName, playerSymbol }) {
  let [editing, isEditing] = useState(false);

  function buttonHander() {
    isEditing((inverse) => !inverse);
    console.log(editing);
  }

  let playerElement = <span className="player-name">{playerName}</span>;
  let buttonName = "Edit";
  if (editing) {
    playerElement = <input type="text"></input>;
    buttonName = "Save";
  }
  return (
    <li className="player">
      {playerElement}
      <span className="player-symbol">{playerSymbol}</span>
      <button onClick={buttonHander}>{buttonName}</button>
    </li>
  );
}
