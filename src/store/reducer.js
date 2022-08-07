import * as actionTypes from "./actionTypes";

const defaultState = {
  isLogin: localStorage.getItem("isLogin") || false,
  token: localStorage.getItem("token") || null,
  loading: false,
  userName: localStorage.getItem("userName") || "",
  account: localStorage.getItem("account") || "",
};

const state = (state = defaultState, action) => {
  if (action.type === actionTypes.SET_LOGIN) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.isLogin = true;
    localStorage.setItem("isLogin", true);
    return newState;
  }
  if (action.type === actionTypes.SET_TOKEN) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.token = action.value;
    localStorage.setItem("token", action.value);
    return newState;
  }
  if (action.type === actionTypes.SET_LOGOUT) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.isLogin = false;
    newState.token = null;
    localStorage.removeItem("isLogin");
    localStorage.removeItem("token");
    return newState;
  }
  if (action.type === actionTypes.SET_LOADING) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.loading = action.value;
    return newState;
  }
  if (action.type === actionTypes.SET_USERDATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.userName = action.data.name;
    newState.account = action.data.account;
    localStorage.setItem("userName", action.data.name);
    localStorage.setItem("account", action.data.account);
    return newState;
  }
  return state;
};

export default state;
