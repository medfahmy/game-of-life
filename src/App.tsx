import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Definition } from "components/Definition";
import { Grid } from "components/Grid";
import { Navbar } from "components/Navbar";
import { NotFound } from "components/NotFound";
import { Patterns } from "components/Patterns";

export const App: React.FC = () => {
  const [pattern, setPattern] = useState("");
  const [settings, setSettings] = useState(null);

  return (
    <div>
      <Grid pattern={pattern} settings={settings} />
      <Definition />
    </div>
  );
};
