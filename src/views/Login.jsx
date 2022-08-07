import { Button } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreaters from "../store/actionCreaters";

export class Login extends Component {
  render() {
    const { handleLogin } = this.props;
    return (
      <div>
        <p>Login</p>
        <Button type="primary" onClick={handleLogin.bind(this)}>
          登录
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin() {
      let param = {
        userName: "nldusr001",
        password: "E44F8CF63970DB5C2DF0A18153BCDF49",
      };
      React.$http.FetchLogin(param).then((res) => {
        if (res.status) {
          const setLoginAction = actionCreaters.setLoginAction();
          dispatch(setLoginAction);
          const setUserDataAction = actionCreaters.setUserDataAction(res.data);
          dispatch(setUserDataAction);
          this.props.history.push("/");
        }
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
