import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Layout } from "antd";
import { MenuTop } from "../components/Admin/MenuTop/MenuTop";
import { MenuSider } from "../components/Admin/MenuSider/MenuSider";
import { SignIn } from "../pages/Admin/SignIn/SignIn";

import "./LayoutAdmin.scss";


export const LayoutAdmin = ({ routes }) => {

  // Hook para abrir o cerrar el menu
  const [menuCollapsed, setMenuCollapsed] = useState(true);

  const { Header, Footer, Content } = Layout;
  const user = null;

  // si no esta definido el usuario
  if(!user) {
    return (
      <>
        { /* El redirect to debe estar acompañado de un route para saber que componente renderizará o una ruta compuesta*/}
        <Route path = "/admin/login" component = { SignIn } />
        <Redirect to ="/admin/login" />
      </>
    )
  }


  return (
    <Layout >
      <MenuSider menuCollapsed={ menuCollapsed } />
      <Layout className="layout-admin">
        <Header className="layout-admin__header">
          <MenuTop setMenuCollapsed = { setMenuCollapsed } menuCollapsed={ menuCollapsed } />
        </Header>
        <Content className="layout-admin__content">
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Switch>
        </Content>
        <Footer className="layout-admin__footer"> Footer </Footer>
      </Layout>
    </Layout>
  );
};
