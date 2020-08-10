import React from 'react'
import { Link } from "react-router-dom";

import { Layout, Menu, Icon } from "antd";
import './MenuSider.scss';

export const MenuSider = ({ menuCollapsed }) => {

    const { Sider } = Layout;
    const { Item } = Menu;

    return (
        <Sider className="menu-sider" collapsed={ menuCollapsed }>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} >
                <Item key="1">
                    <Link to = "/admin">
                        <Icon type="home" />
                        <span className="nav-text"> Home </span>
                    </Link>
                </Item>

                <Item key="2">
                    <Link to = "/admin/menu-web">
                        <Icon type="menu" />
                        <span className="nav-text"> Menu Web </span>
                    </Link>
                </Item>

            </Menu>
        </Sider>
    )
}
