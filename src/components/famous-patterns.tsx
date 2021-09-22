import { Pattern } from "game";
import React from "react";
import { NavLink } from "react-router-dom";
import { patternList } from "../utils/patterns-presets";

export const FamousPatterns: React.FC = () => {
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

interface FamousPatternProps {
  pattern: Pattern;
}

const FamousPattern: React.FC<FamousPatternProps> = ({ pattern }) => {
  return <div></div>;
};
