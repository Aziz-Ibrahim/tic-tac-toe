"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Cell from "./components/cell";

const WiningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


export default function Home() {
  // Import the Cell component
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");

  useEffect(() => {
    // Check for a winner after each move
    WiningCombinations.forEach(combination => {})
  }, [cells]);

  // Render the gameboard with cells
  return (
      <div className="container" >
        <div className="gameboard">
          {cells.map((cell, index) => (
            <Cell
              id={index}
              go={go} 
              setGo={setGo}
              key={index} 
              cells={cells} 
              setCells={setCells} 
              cell={cell}
            />
          ))}
        </div>
        <div className="status">
          <h2>Next turn: {go === "circle" ? "O" : "X"}</h2>
        </div>
      </div>
  );
}
