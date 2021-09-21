import React from "react";
import { NavLink } from "react-router-dom";

interface Props {}

export const NotFound: React.FC<Props> = () => {
  return (
    <div>
      404! - <NavLink to="/">home</NavLink>
    </div>
  );
};
