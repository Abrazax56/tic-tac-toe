import { useState } from 'react'
import Square from './component/Square.jsx'
function Board({xIsNext, squares, onPlay}) {
  function clicked(i) {
    if (squares[i] || winner(squares)) return;
    const newSquares = squares.slice();
    newSquares[i] = (xIsNext) ? "X" : "O";
    onPlay(newSquares);
  }
  const newWinner = winner(squares);
  let status = '';
  if (newWinner) {
    status = `Winner : ${newWinner}`
  } else {
    status = `next player : ${xIsNext ? 'X' : 'O'}`
  }
  return (
    <>
      <div className="winner">{status}</div>
      <div className="div-square">
        {
          squares.map((e, i) => (
            <Square value={squares[i]} click={() => clicked(i)} />
          ))
        }
      </div>
    </>
  )
}

export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentHistory = history[currentMove];
  
  function jump(nextMove) {
    setCurrentMove(nextMove);
  }
  
  function handlePlay(newSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), newSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  
  const moves = history.map((square, i) => {
    let desc = '';
    if(i > 0) {
      desc = `go to move #${i}`
    } else {
      desc = `Go to game start`
    }
    return (
      <li key={i}>
        <button onClick={() => jump(i)}>{desc}</button>
      </li>
    )
  })
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentHistory} onPlay={handlePlay} />
      </div>
      <div className="game-history">
        <ul>{moves}</ul>
      </div>
    </div>
  )
}

function winner(squares) {
  const rules = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < rules.length; i++) {
    const [a, b, c] = rules[i];
    
    if(squares[a] && squares[a] === squares[b] && squares[c]) {
      return squares[a];
    }
  }
  return false;
}
