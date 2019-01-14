import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Info from "./components/info";
import { HashRouter } from 'react-router-dom'

const r = (
  <Router>
    <Switch>
      <Route exact path="/" component={Header} />
      <Route path="/info" component={Info} />
    </Switch>
  </Router>
);

ReactDOM.render(r, document.getElementById("root"));
