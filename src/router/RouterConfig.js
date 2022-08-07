import Home from "../views/Home";
import Login from "../views/Login";
import PageA from "../views/PageA";
import MapPage from "../views/MapPage";

const RouterConfig = [
  {
    path: "/",
    component: MapPage,
    auth: true,
  },
  {
    path: "/home",
    component: Home,
    auth: true,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/pageA",
    component: PageA,
    auth: true,
  },
  {
    path: "/mapPage",
    component: MapPage,
  },
];

export default RouterConfig;
