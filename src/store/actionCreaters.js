import * as actionTypes from "./actionTypes";

export const setLoginAction = () => ({
  type: actionTypes.SET_LOGIN,
});

export const setTokenAction = (value) => ({
  type: actionTypes.SET_TOKEN,
  value,
});

export const setLogoutAction = () => ({
  type: actionTypes.SET_LOGOUT,
});

export const setLoadingAction = (value) => ({
  type: actionTypes.SET_LOADING,
  value,
});

export const setUserDataAction = (data) => ({
  type: actionTypes.SET_USERDATA,
  data,
});
