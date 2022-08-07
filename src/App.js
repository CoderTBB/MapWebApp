import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Router from "./router/index";
import { Spin, Layout } from "antd";

export class App extends Component {
  handleClick = (event) => {
    this.props.history.push(event.key);
  };

  render() {
    const { isLogin, loading } = this.props;
    const { Content } = Layout;
    // const { SubMenu } = Menu;
    return (
      <Spin spinning={loading} tip="加载中...">
        {isLogin ? (
          <Layout>
            <Layout>
              <Content>
                <Router />
              </Content>
            </Layout>
          </Layout>
        ) : (
          <Router />
        )}
      </Spin>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
    token: state.token,
    loading: state.loading,
    userName: state.userName,
    account: state.account,
  };
};

export default connect(mapStateToProps, null)(withRouter(App));
