import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreaters from "../store/actionCreaters";
import { Button } from "antd";

export class Home extends Component {
  render() {
    const { handleLogout } = this.props;
    return (
      <div>
        <p>Home</p>
        <Button type="primary" onClick={handleLogout.bind(this)}>
          退出登录
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
    handleLogout() {
      let param = {
        userName: "nldusr001",
        password: "E44F8CF63970DB5C2DF0A18153BCDF49",
      };
      React.$http.logout(param).then((res) => {
        if (res.status) {
          const action = actionCreaters.setLogoutAction();
          dispatch(action);
          this.props.history.push("/login");
        }
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
