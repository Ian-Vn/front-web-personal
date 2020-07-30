import { LayoutAdmin } from "../layouts/LayoutAdmin";

// Admin Pages
import { Admin } from "../pages/Admin/Admin"; // AdminHome
import { SignIn } from "../pages/Admin/SignIn";
import { LayoutBasic } from "../layouts/LayoutBasic";

// Pages
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Error404 } from "../pages/Error404";

export const routes = [
  // Configuracion del administrador
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: Admin,
        exact: true,
      },
      {
        path: "/admin/login",
        component: SignIn,
        exact: true,
      },
      // route sin path si no se cumplen con ningun path anteruir
      {
        component: Error404,
      },
    ],
  },
  // Configuracion del usuario normal
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/contact",
        component: Contact,
        exact: true,
      },
      // route sin path si no se cumplen con ningun path anteruir
      {
        component: Error404,
      },
    ],
  },
];
