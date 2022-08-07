import axios from "axios";
import { message } from "antd";
import store from "../store";
import * as actionCreaters from "../store/actionCreaters";

// 环境接口域名
let baseURL = "";
let uploadBaseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "";
  uploadBaseURL = "https://192.168.1.94:8442";
} else if (process.env.NODE_ENV === "production") {
  baseURL = "https://192.168.1.94:8442";
  uploadBaseURL = baseURL;
}
export const uploadRoot = uploadBaseURL;

// 设置baseURL
axios.defaults.baseURL = baseURL;
// 后端 session问题
axios.defaults.withCredentials = true;
// 接口超时 设置
axios.defaults.timeout = 10000;
// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    // 加载loading
    const action = actionCreaters.setLoadingAction(true);
    store.dispatch(action);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * http response 拦截器
 */
axios.interceptors.response.use(
  (response) => {
    // 结束loading
    const action = actionCreaters.setLoadingAction(false);
    store.dispatch(action);
    if (response.data.status) {
      return Promise.resolve(response.data);
    } else {
      if (response.data.message === "need to login first!") {
        // 清除登录信息, 重新登录
        const action = actionCreaters.setLogoutAction();
        store.dispatch(action);
        window.location.hash = "/login";
      }
      message.error(response.data.message);
      return Promise.reject();
    }
  },
  (error) => {
    // 结束loading
    const action = actionCreaters.setLoadingAction(false);
    store.dispatch(action);
    if (error.response && error.response.statusText) {
      message.error(error.response.statusText);
    }
    return Promise.reject(error.response);
  }
);

export default axios;
