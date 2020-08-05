import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutAdmin.scss";

export const LayoutAdmin = ({ routes }) => {
  const { Header, Footer, Content } = Layout;

  return (
    <Layout className="layout-admin">
      <Header className="layout-admin__header"> </Header>
      <Content className="layout-admin__content">
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Switch>
      </Content>
      <Footer className="layout-admin__footer"> Footer </Footer>
    </Layout>
  );
};
