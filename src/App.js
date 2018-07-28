import React from "react";
import { Route, Switch } from "react-router-dom";

import Pizza from "./container/Pizza/Pizza";
import Order from "./container/Order/Order";

const App = () => (
  <Switch>
    <Route path="/order" component={Order} />
    <Route path="/" component={Pizza} />
  </Switch>
);

export default App;
