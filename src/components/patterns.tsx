import React from "react";
import { NavLink } from "react-router-dom";
import { patternList } from "../utils/patterns-presets";

interface Props {}

export const Patterns: React.FC<Props> = () => {
  return (
    <div>
      <h3>Famous patterns</h3>
      <hr />
      <div>
        <div>
          {patternList.map((pattern, index) => {
            return (
              <NavLink key={index} to={"/pattern/" + pattern}>
                <div>● {pattern}</div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};
