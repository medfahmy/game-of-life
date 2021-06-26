import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Definition } from "./components/Definition";
import { Grid } from "./components/Grid";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { NotFound } from "./components/NotFound";
import { Patterns } from "./components/Patterns";

interface Props {}

export const App: React.FC<Props> = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/grid" component={Grid} />
        <Route path="/pattern" component={Patterns} />
        <Route path="/definition" component={Definition} />
        <Route path="/patterns" component={Patterns} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
