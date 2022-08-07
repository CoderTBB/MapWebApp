import React, { Component } from "react";
import { Switch } from "react-router-dom";
import FrontendAuth from "./FrontendAuth";

export class router extends Component {
  render() {
    return (
      <Switch>
        <FrontendAuth></FrontendAuth>
      </Switch>
    );
  }
}

export default router;
