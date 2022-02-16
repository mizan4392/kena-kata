import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage.page";

import Shop from "./Pages/Shop/Shop.page";
import { ROUTES } from "./util/ROUTES";
import Authentication from "./Pages/Authentication/Authentication.component";
import NavBar from "./Components/nav-bar/NavBar.component";
import 'antd/dist/antd.css';
import { Layout } from "antd";
import SideBar from "./Components/side-bar/SideBar.component";
const { Content } = Layout;
function App() {

  return (
    <div>
      <Router>
        <Layout>
          <NavBar />
          <Content>
            <Layout
              className="site-layout-background"
            >
              <SideBar />
              <Content style={{ padding: "0 10px", minHeight: 280 }}>
                <RenderRoutes />
              </Content>
            </Layout>
          </Content>
        </Layout>


      </Router>
    </div>
  );
}

export default App;


const RenderRoutes = () => {
  return <Switch>
    <Route exact path={ROUTES.ROOT} component={HomePage} />
    <Route exact path={ROUTES.SHOP} component={Shop} />
    <Route exact to={ROUTES.SIGN_IN} component={Authentication} />
  </Switch>
}
