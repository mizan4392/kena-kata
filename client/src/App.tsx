import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage.page";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact to="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
