import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import "./LayoutBasic.scss";

export const LayoutBasic = ({ routes }) => {
  const { Footer, Content } = Layout;

  return (
    <Layout>
      <h2> Menu ... </h2>
      <Layout>
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
