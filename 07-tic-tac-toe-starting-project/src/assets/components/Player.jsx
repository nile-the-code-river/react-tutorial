import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  let playerNameCodeBlock = isEditing ? (
    <input
      type="text"
      value={playerName}
      required
      onChange={handleChangeName}
    />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  function handleEditClick() {

    setIsEditing((editing) => !editing);
    // setIsEditing(!isEditing); // schedules a state update later with current isEditing value
    // setIsEditing((editing) => !editing); // pass 'a function' not 'a value' when using the previous value (guaranteed to use the latest value)

    if(isEditing)
    {
      
      onChangeName(symbol, playerName);

    }
  }

  function handleChangeName(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {playerNameCodeBlock}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
