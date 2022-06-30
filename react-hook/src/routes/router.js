import React from "react";
import { Route, Switch, Router } from "react-router-dom";

const RouterPage = () => {
  return (
    <Route>
      <Switch>
        <Router exact from="/" component={Home} />
      </Switch>
    </Route>
  );
};

export default RouterPage;
