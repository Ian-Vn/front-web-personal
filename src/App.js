import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./config/routes";

import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <RouteWithSubRoutes key={index} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

// Componente para renderizar el componente padre
const RouteWithSubRoutes = ({ path, component: Component, exact, routes }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => <Component {...props} routes={routes} />}
    />
  );
};

export default App;
