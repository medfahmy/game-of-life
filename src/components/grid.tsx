import React, { useCallback, useRef, useState } from "react";
import produce, { PatchListener } from "immer";
import { SettingsBoard } from "./settings-board";
import { createEmptyGrid, Pattern } from "game";

interface GridProps {
  initialPattern: Pattern;
}

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

export const Grid: React.FC<GridProps> = ({ initialPattern }) => {
  const [pattern, setPattern] = useState(initialPattern);

  const size = initialPattern.length;
  const emptyPattern = createEmptyGrid(size);

  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);
  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }

    setPattern((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < size; i++) {
          for (let j = 0; j < size; j++) {
            let neighbors = 0;
            operations.forEach(([x, y]) => {
              const newI = i + x;
              const newJ = j + y;
              if (newI >= 0 && newI < size && newJ >= 0 && newJ < size) {
                neighbors += g[newI][newJ];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0;
            } else if (g[i][j] === 0 && neighbors === 3) {
              gridCopy[i][j] = 1;
            }
          }
        }
      });
    });

    setTimeout(runSimulation, 100);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setRunning(!running);
          if (!running) {
            runningRef.current = true;
            runSimulation();
          }
        }}
      >
        {running ? "stop" : "start"}
      </button>

      <button
        onClick={() => {
          setPattern(emptyPattern);
        }}
      >
        clear
      </button>

      <button
        onClick={() => {
          const rows = [];
          for (let i = 0; i < size; i++) {
            rows.push(
              Array.from(Array(size), () => (Math.random() > 0.7 ? 1 : 0))
            );
          }

          setPattern(rows);
        }}
      >
        random
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${size}, 20px)`,
        }}
      >
        {pattern.map((rows, i) =>
          rows.map((col, j) => (
            <div
              key={`${i}-${j}`}
              onClick={() => {
                const newGrid = produce(pattern, (gridCopy) => {
                  gridCopy[i][j] = pattern[i][j] ? 0 : 1;
                });
                setPattern(newGrid);
              }}
              style={{
                width: 20,
                height: 20,
                backgroundColor: pattern[i][j] ? "blue" : undefined,
                border: "solid 1px black",
              }}
            ></div>
          ))
        )}
      </div>
    </>
  );
};
