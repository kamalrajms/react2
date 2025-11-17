import React, { useState } from "react";
import Buttton from "./Buttton";

export default function Xo() {
  const [Xnext, setXnext] = useState(true);
  const [square, setSquate] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (square[i]) {
      return;
    }
    const nextSquare = square.slice();
    if (Xnext) {
      nextSquare[i] = "x";
    } else {
      nextSquare[i] = "o";
    }
    setSquate(nextSquare);
    setXnext(!Xnext);
  }
  return (
    <div>
      <nav>
        <Buttton value={square[0]} onSquareClick={() => handleClick(0)} />
        <Buttton value={square[1]} onSquareClick={() => handleClick(1)} />
        <Buttton value={square[2]} onSquareClick={() => handleClick(2)} />
      </nav>
      <nav>
        <Buttton value={square[3]} onSquareClick={() => handleClick(3)} />
        <Buttton value={square[4]} onSquareClick={() => handleClick(4)} />
        <Buttton value={square[5]} onSquareClick={() => handleClick(5)} />
      </nav>
      <nav>
        <Buttton value={square[6]} onSquareClick={() => handleClick(6)} />
        <Buttton value={square[7]} onSquareClick={() => handleClick(7)} />
        <Buttton value={square[8]} onSquareClick={() => handleClick(8)} />
      </nav>
    </div>
  );
}
