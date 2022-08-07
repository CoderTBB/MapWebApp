import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import RouterConfig from "./RouterConfig";
import { connect } from "react-redux";

class FrontendAuth extends Component {
  render() {
    const pathname = this.props.location.pathname;
    const targetRouter = RouterConfig.find(function (item) {
      return item.path === pathname;
    });
    const { isLogin } = this.props;

    if (targetRouter.auth && !isLogin) {
      return <Redirect exact to="/login" />;
    } else if (isLogin && targetRouter.path === "/login") {
      return <Redirect exact to="/" />;
    } else {
      return <Route exact path={pathname} component={targetRouter.component} />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
  };
};

export default connect(mapStateToProps, null)(FrontendAuth);
