import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Definition } from "components/definition";
import { Grid } from "components/grid";
// import { Navbar } from "components/navbar";
import { NotFound } from "components/not-found";
import { FamousPatterns } from "components/famous-patterns";
import { pattern as patterns } from "./utils/patterns-presets";

export const App: React.FC = () => {
  // const [pattern, setPattern] = useState("");
  // const [settings, setSettings] = useState(null);
  const pattern = patterns.get("101");

  return (
    <div>
      {/* <Grid pattern={pattern} settings={settings} /> */}
      {/* <Definition /> */}
      <Grid initialPattern={pattern!} />
    </div>
  );
};
