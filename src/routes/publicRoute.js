import { lazy } from "react"

const HomePage = lazy(() => import("../pages/HomePage"));
const LoginPage = lazy(() => import("../pages/admin/LoginPage"));
const SignupPage = lazy(() => import("../pages/admin/SignupPage"));
const AdminPage = lazy(() => import("../pages/admin/AdminPage"));
const AvalanchePage = lazy(() => import("../pages/landings/Avalanche"));

export const publicRoute = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/admin/login",
    component: LoginPage,
    exact: false,
  },
  {
    path: "/admin/signup",
    component: SignupPage,
    exact: false,
  },
  {
    path: "/admin/home",
    component: AdminPage,
    exact: true,
  },
  {
    path: "/admin/home/:lang",
    component: AdminPage,
    exact: true,
  },
  {
    path: "/:locale",
    component: HomePage,
    exact: true,
  },
  {
    path: "/:locale/stake/avax",
    component: AvalanchePage,
    exact: true,
  }
]