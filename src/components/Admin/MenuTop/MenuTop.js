import React from 'react'
import { Button, Icon } from "antd";

import './MenuTop.scss';
import Logo from '../../../assets/img/logo-white.png'

export const MenuTop = ({ setMenuCollapsed, menuCollapsed }) => {
    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img className="menu-top__left-logo" src={ Logo } alt="Alternativo"/>
                <Button type="link" onClick ={ () =>  setMenuCollapsed(!menuCollapsed ) }>
                    <Icon type={ menuCollapsed ? 'menu-unfold' : 'menu-fold'  }/>
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link">
                    <Icon type="poweroff" />
                </Button>
            </div>
        </div>
    )
}
