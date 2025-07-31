"use client";
import Image from "next/image";
import { useState } from "react";
import Cell from "./components/cell";

export default function Home() {
  // Import the Cell component
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");

  // Render the gameboard with cells
  return (
      <div className="container" >
        <div className="gameboard">
          {cells.map((cell, index) => (
            <Cell id={index} go={go} setGo={setGo} key={index} cells={cells} setCells={setCells} />
          ))}
        </div>
      </div>
  );
}
