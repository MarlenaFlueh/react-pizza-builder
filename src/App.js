import React from "react";
import { Route, Switch } from "react-router-dom";

import Pizza from "./container/Pizza/Pizza";
import Order from "./container/Order/Order";
import Final from "./container/Final/Final";
import Summary from "./container/Summary/Summary";
import LandingPage from "./container/LandingPage/LandingPage";

const App = () => (
  <Switch>
    <Route path="/final" component={Final} />
    <Route path="/order" component={Order} />
    <Route path="/summary" component={Summary} />
    <Route path="/pizza" component={Pizza} />
    <Route path="/" component={LandingPage} />
  </Switch>
);

export default App;
