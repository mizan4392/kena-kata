import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage.page";
import { BrowserRouter as Router } from "react-router-dom";
import Shop from "./Pages/Shop/Shop.page";
import { ROUTES } from "./util/ROUTES";
import Header from "./Components/header/Header.component";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact to={ROUTES.ROOT} component={Shop} />
          <Route exact to={ROUTES.SHOP} component={Shop}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
