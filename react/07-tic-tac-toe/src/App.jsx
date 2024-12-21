import { Player } from "./components/Player.jsx"
import GameBoard from "./components/GameBoard.jsx"
import { useState } from 'react';
import { Log } from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combonations.jsx";
import GameOver from './components/GameBoard.jsx'


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
  // initially all the blocks will be empty
];


function deriveActivePlayer(gameTurns) {

  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;

}

function App() {
  const [players,setPlayers] = useState(
    {
     X:'Player 1',
     O:'Player 2',
    }
 );

  const [gameTurns, setGameTurns] = useState([]);

  // And here we could then have our game turns and a set game turns function. And now whenever a square was selected, we wanna add a new turn to this array.

  // to switch b.w players so that both can have their turn .....so for it we will use useState....
  const [activePlayer, setActivePlayer] = useState('X'); // thinking that X will mark first

 
  function deriveGameBoard(gameTurns){
    let gameBoard = [...initialGameBoard.map(array => [...array])];

    for (const turn of gameTurns) {
      const { square, player } = turn;
      const { row, col } = square;
  
      gameBoard[row][col] = player;
  
    }
  return gameBoard;
  }

function deriveWinner(gameBoard , players){
  let winner;

  for (const combonations of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combonations[0].row][combonations[0].column];
    const secondSquareSymbol = gameBoard[combonations[1].row][combonations[1].column];
    const thirdSquareSymbol = gameBoard[combonations[2].row][combonations[2].column];

    if (firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

const gameBoard=deriveGameBoard(gameTurns);
const winner=deriveWinner(gameBoard,players);

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
  
    // if current active player has symbol X then set curtActivePlayer to O , else set to X , which will then change the value of activePlayer


    const activePlayer = deriveActivePlayer(gameTurns);
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns,];
      return updateTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]:newName
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialNameOfPlayer="Player1" symbol={"X"} isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange} />
          <Player initialNameOfPlayer="Player2" symbol={"O"} isActive={activePlayer === 'O'}  onChangeName={handlePlayerNameChange}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App

