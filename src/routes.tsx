import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import BusinessList from "./Views/BusinessList/BusinessList";
import BusinessView from "./Views/BusinessView/BusinessView";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <BusinessList />
        </Route>
        <Route path="/business_view/:id">
          <BusinessView />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
