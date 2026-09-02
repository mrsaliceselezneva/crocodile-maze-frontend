import { AppstoreOutlined, HomeOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, type MenuProps } from "antd";
import React from "react";
import { Link } from "react-router";

import "./AppMenu.css";

const menuItems: MenuProps["items"] = [
    {
        key: "home",
        icon: <HomeOutlined />,
        label: <Link to="/">Главная</Link>,
    },
    {
        key: "game",
        icon: <AppstoreOutlined />,
        label: <Link to="/game">Лабиринт</Link>,
    },
    {
        key: "profile",
        icon: <UserOutlined />,
        label: <Link to="/profile">Профиль</Link>,
    },
];

function AppMenu() {
    return (
        <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
            <Button className="app-menu-button" type="text" icon={<MenuOutlined />} />
        </Dropdown>
    );
}

export default AppMenu;
