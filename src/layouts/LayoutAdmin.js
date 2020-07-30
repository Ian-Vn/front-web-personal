import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutAdmin.scss";

export const LayoutAdmin = ({ routes }) => {
  const { Header, Footer, Content } = Layout;

  return (
    <Layout>
      <h2> Menu Sidebar</h2>
      <Layout>
        <Header> Header... </Header>
        <Content>
          <Switch>
            {routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Switch>
        </Content>
        <Footer> Footer </Footer>
      </Layout>
    </Layout>
  );
};
