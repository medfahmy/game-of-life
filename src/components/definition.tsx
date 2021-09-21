import React from "react";

interface Props {}

export const Definition: React.FC<Props> = () => {
  return (
    <div>
      <div>
        <h3>What is Game of Life? (from wikipedia)</h3>
        <p>
          The Game of Life, also known simply as Life, is a cellular automaton
          devised by the British mathematician John Horton Conway in 1970. It is
          a zero-player game, meaning that its evolution is determined by its
          initial state, requiring no further input. One interacts with the Game
          of Life by creating an initial configuration and observing how it
          evolves.{" "}
        </p>

        <h3>Rules: </h3>
        <ul>
          <li>
            Any live cell with fewer than two live neighbours dies, as if by
            underpopulation.
          </li>
          <li>
            Any live cell with two or three live neighbours lives on to the next
            generation.
          </li>
          <li>
            Any live cell with more than three live neighbours dies, as if by
            overpopulation.
          </li>
          <li>
            Any dead cell with exactly three live neighbours becomes a live
            cell, as if by reproduction.
          </li>
        </ul>

        <h3>Controls: </h3>
        <ul>
          <li>
            Use your mouse to draw an initial state. Or pick one of the existing
            ones from the Patterns menu.
          </li>
          <li>Click play to see the system evolving.</li>
          <li>Next button shows the next frame.</li>
          <li>
            You can change the size and speed in the corresponding menu.
            Changing the size resets the board.
          </li>
        </ul>

        <p>
          <em>Credits:</em>{" "}
          <a href="https://conwaylife.com/ref/lexicon/lex.htm">
            https://conwaylife.com/ref/lexicon/lex.htm
          </a>{" "}
        </p>
      </div>
    </div>
  );
};
