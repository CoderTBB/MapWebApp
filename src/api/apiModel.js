// import { get, post, postByJson } from "./http";
import { get, post } from "./http";

// 登录
export const FetchLogin = (params) => post("/els/task/login", params);

// 登出
export const logout = (params) => post("/els/task/logout", params);

// 查询电子铅封设备分页
export const pageAllEls = (params) => post("/els/task/pageAllEls", params);

// 获取数据
export const getData = (params) => get("/els/getData", params);
