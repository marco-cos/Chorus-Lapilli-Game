import { useState } from 'react';

function Square({value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [moves, setMoves] = useState([3, 3]); //moves [0] is x, moves [1] is o
  const [piecetomove, setPiece] = useState(-1);
  const validMoves = {
    0: [1, 3, 4],
    1: [0, 3, 4,5,2],
    2: [1, 4, 5],
    3: [0, 6, 1,4,7],
    4: [0, 1, 2,3,4,5,6,7,8],
    5: [2, 1, 4,7,8],
    6: [3, 4, 7],
    7: [6, 3, 4,5,8],
    8: [5, 4, 7]
  };

  function handleClick(i) {
    //Check for winner, return if there is one
    if (calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    //Regular, pre-3 move case
    if ((xIsNext && moves[0]!=0)||(!xIsNext && moves[1]!=0)) {
      console.log("In regular, non-move case")

      if (squares[i]== "X" || squares[i] == "O") {
        console.log("Detected invalid move in regular case")
        return;
      }

      if (xIsNext) {
        nextSquares[i] = 'X';
        setMoves((prevMoves) => [prevMoves[0] - 1, prevMoves[1]]);
      } else {
        nextSquares[i] = 'O';
        setMoves((prevMoves) => [prevMoves[0], prevMoves[1] - 1]);
      }
      setXIsNext(!xIsNext);
    }

    //Selecting piece to move
    else if (piecetomove== -1) {
      if (squares[i] != (xIsNext ? "X" : "O")) {
        console.log("In else if setting piecetomove, move is invalid")
        return;
      }
      else {
        console.log("In else if setting piecetomove, move is valid")
      }
      
      setPiece(i);
    }

    //Moving the piece iteslf
    else {
      //Checks move is valid
      if (validMoves[piecetomove].includes(i) && (squares[i]!="X" && squares[i]!="O")) {
        
        //If player has center square, must either win or vacate center square
        if (((xIsNext && (squares[4] == "X"))||(!xIsNext && (squares[4] == "O")))&&piecetomove!=4) {
          //Check if moves cause win
          console.log("Player has center square!");
          let tempsqI = nextSquares[i];
          let tempsqB = nextSquares[piecetomove];
          nextSquares[i] = xIsNext ? 'X' : 'O';
          nextSquares[piecetomove] = null;

          //Move did not result in win
          if (calculateWinner(nextSquares)==null) {
            console.log("Player did not win, thus invalid move")
            nextSquares[i] = tempsqI;
            nextSquares[piecetomove] = tempsqB;
            setPiece(-1);
            return;
          }
        }

        console.log("In else moving the piece");
        nextSquares[i] = xIsNext ? 'X' : 'O';
        nextSquares[piecetomove] = null;
        setXIsNext(!xIsNext);
        setPiece(-1);
      }
      else {
        console.log("Invalid move!")
        setPiece(-1);
        return;
      }
    }


    setSquares(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else if ((xIsNext && moves[0]!=0)||(!xIsNext && moves[1]!=0)) {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O')+". "+ (xIsNext ? moves[0] : moves[1]) + " moves before moving piece.";
  } else if (piecetomove == -1) {
    status = "Player " + (xIsNext ? 'X' : 'O') +", choose which piece to move";
  }
  else {
    status = "Player " + (xIsNext ? 'X' : 'O') +", choose where to move piece at position " + piecetomove;
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}