import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Info from "./components/info";
import Maps from "./components/maps";

const r = (
  <Router>
      <div>
      <Route exact path="/" component={Header} />
      <Route path="/info" component={Info} />
      <Route  path="/maps" component ={Maps} />
      </div>
    
  </Router>
);

ReactDOM.render(r, document.getElementById("root"));
