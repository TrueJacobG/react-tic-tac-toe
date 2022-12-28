import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Board from "./components/Board";
import checkWinner from "./lib/checkWinner";
import { symbols } from "./lib/constants";

export default function App() {
  const [squares, setSquares] = useState<string[]>(Array(9).fill(" "));
  const [count, setCount] = useState(0);
  const [winner, setWinner] = useState(" ");

  // const does not work
  let handleClick = (key: number) => {
    if (squares[key] !== " ") {
      return;
    }

    squares[key] = symbols[count % 2];
    setSquares((squares) => [...squares]);

    if (checkWinner(squares)) {
      setWinner(symbols[count % 2]);
    }

    setCount(count + 1);
  };

  return (
    <div className="App">
      <Board squares={squares} handleClick={handleClick} />
      {winner === " " ? "" : `The winner is ${winner}`}
      {squares.every((e) => e !== " ") ? "There is no winner" : ""}
    </div>
  );
}
