import React, { useState } from "react";
import produce from "immer";

export const Test: React.FC = () => {
  const [grid, setGrid] = useState(() => createEmptyGrid(50));

  return displayGrid(grid, 20);
};

export type Pattern = number[][];

export const cell = (isAlive: boolean, size: number, key: string) => {
  return (
    <div
      key={key}
      style={{
        width: size,
        height: size,
        backgroundColor: isAlive ? "purple" : undefined,
        border: "solid 1px black",
      }}
    ></div>
  );
};

export const createEmptyGrid = (size: number): Pattern => {
  let rows = []; // rows of the grid, 0 : dead cell,  1 : living cell

  for (let i = 0; i < size; i++) {
    rows.push(Array.from(Array(size), () => 0));
  }

  return rows;
};

export const displayGrid = (pattern: Pattern, cellSize: number) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${pattern.length}, ${cellSize}px)`,
      }}
    >
      {pattern.map((row, rowIdx) => {
        return row.map((col, colIdx) => {
          const isAlive = !!pattern[rowIdx][colIdx];
          return cell(isAlive, cellSize, `${rowIdx}-${colIdx}`);
        });
      })}
    </div>
  );
};
