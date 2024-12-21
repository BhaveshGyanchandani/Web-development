import { useState } from 'react';
export function Player({ initialNameOfPlayer, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialNameOfPlayer);

  function handleEditClick() {
    setIsEditing((editing) => !editing)
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value)
  }
  let editablePlayerName = <span className="player-name ">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = <input type='text' required value={playerName} onChange={handleChange} /> // onChange is used to see the change in the values
  }
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol ">{symbol}</span>
      </span>

      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}