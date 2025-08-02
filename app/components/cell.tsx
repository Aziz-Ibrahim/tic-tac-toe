import { Dispatch, SetStateAction } from "react";

type CellProps = {
    id: number;
    go: string;
    setGo: Dispatch<SetStateAction<string>>;
    cells: string[];
    setCells: Dispatch<SetStateAction<string[]>>;
    cell: string;
    winningMessage?: string;
};

const Cell = ({ go, setGo, id, cells, setCells, cell, winningMessage }: CellProps) => {

    const handleClick = (e) => {
        // Prevent further clicks if there's a winner
        if (winningMessage) {
            return
        };
        const notTaken = !cells[id]
        // Check if the cell is not already taken
        if (notTaken) {
            if (go === "circle") {
                handleCellChange("circle")
                setGo("cross");
            } else if (go === "cross") {
                handleCellChange("cross")
                setGo("circle");
            }
        }

    }

    const handleCellChange = (cellToChange: string) => {
        let copyCells = [...cells];
        copyCells[id] = cellToChange;
        setCells(copyCells);
        setCells(copyCells);
    }


    return <div className="square" onClick={handleClick}>
        <div className={cell}>{cell ? (cell === "circle" ? "O" : "X") : ""}</div>
    </div>;
};

export default Cell;
