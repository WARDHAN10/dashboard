import { Switch, Route, BrowserRouter } from "react-router-dom";

import React from "react";
import Home from"./core/Home"

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
