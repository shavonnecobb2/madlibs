import React from 'react';
import './App.css';
import { MadLibs } from "../MadLibs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Story } from "../Story";


export const App = () => (
  <>
    <Router>
      <Switch>
        <Route path="/story" component={Story} />
        <Route path="/" component={MadLibs} />
      </Switch>
    </Router>
  </>
);
