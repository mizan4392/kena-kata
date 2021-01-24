import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage.page";

import Shop from "./Pages/Shop/Shop.page";
import { ROUTES } from "./util/ROUTES";
import Header from "./Components/header/Header.component";
import Authentication from "./Pages/Authentication/Authentication.component";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path={ROUTES.ROOT} component={HomePage} />
          <Route exact path={ROUTES.SHOP} component={Shop}/>
          <Route exact to={ROUTES.SIGN_IN} component={Authentication} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
