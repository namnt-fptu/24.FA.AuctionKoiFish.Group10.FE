import React from "react";
import { Link } from "react-router-dom"; // Import Link từ react-router-dom
import { Menu, Dropdown, Button } from "antd";
import {
  UserOutlined,
  NotificationOutlined,
  LogoutOutlined,
  AppstoreOutlined,
} from "@ant-design/icons"; // Import các icon từ Ant Design
import "./index.css"; // Import file CSS cho Header
import avatar from "../../images/avata.jpg"; // Thêm đường dẫn avatar

const HeaderLogin = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        <Link to="/profile">Personal</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<NotificationOutlined />}>
        <Link to="/notification">Notification</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<AppstoreOutlined />}>
        <Link to="/my-auction">My Auction</Link>
      </Menu.Item>
      <Menu.Item key="4" icon={<LogoutOutlined />} danger>
        <Link to="/logout">Logout</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="header">
      <div className="logo">
        <h1>Auction Legend Koi</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/auctions">Auctions</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            {/* Thay thế Login và Register bằng avatar với menu dropdown */}
            <Dropdown overlay={menu} trigger={["hover"]} placement="bottomRight">
              <div className="avatar-wrapper">
                <img src={avatar} alt="User Avatar" className="avatar" />
              </div>
            </Dropdown>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderLogin;