import { useState } from "react";
import Square from "./components/Square";

function GameBoard() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [x, setX] = useState(true);
  const [text, setText] = useState("Cambiar turno");
  let win = winner(squares);

  function handleClick(i: number) {
    if (win || squares[i]) {
      return;
    }
    const copySquares = squares.slice();
    copySquares[i] = x ? "X" : "O";
    setSquares(copySquares);
    setX(!x);
    if (text === "Cambiar turno") setText("Reiniciar juego");
  }

  function handleClickRestart() {
    if (text === "Reiniciar juego") {
      setSquares(Array(9).fill(null));
      setX(true);
      setText("Cambiar turno");
    } else {
      setX(!x);
    }
  }

  let gameState = win
    ? `Ganador ${win}`
    : squares.includes(null)
    ? `Turno de ${x ? "X" : "O"}`
    : "Empate";

  return (
    <>
      <div className="container">
        <div className="containerState">
          <p className="gameState">{gameState}</p>
          <button onClick={handleClickRestart}>{text}</button>
        </div>
        <div className="containerRows">
          <div className="row">
            <Square
              value={squares[0]}
              handleSquareClick={() => handleClick(0)}
            />
            <Square
              value={squares[1]}
              handleSquareClick={() => handleClick(1)}
            />
            <Square
              value={squares[2]}
              handleSquareClick={() => handleClick(2)}
            />
          </div>
          <div className="row">
            <Square
              value={squares[3]}
              handleSquareClick={() => handleClick(3)}
            />
            <Square
              value={squares[4]}
              handleSquareClick={() => handleClick(4)}
            />
            <Square
              value={squares[5]}
              handleSquareClick={() => handleClick(5)}
            />
          </div>
          <div className="row">
            <Square
              value={squares[6]}
              handleSquareClick={() => handleClick(6)}
            />
            <Square
              value={squares[7]}
              handleSquareClick={() => handleClick(7)}
            />
            <Square
              value={squares[8]}
              handleSquareClick={() => handleClick(8)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function winner(squares: any[]) {
  const waysToWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < waysToWin.length; i++) {
    let [a, b, c] = waysToWin[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default GameBoard;
