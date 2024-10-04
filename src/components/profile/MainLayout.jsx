import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  PieChartOutlined,
  NotificationOutlined,
  FileOutlined,
  LogoutOutlined,
  WalletOutlined,
  TransactionOutlined,
} from "@ant-design/icons";

import Footer from "../footer/Footer";
import { Link, Outlet, useNavigate } from "react-router-dom";
import HeaderLogin from "../header-logged-in";
const { Header, Sider, Content } = Layout;

function getItem(label, key, icon, onClick = null, children) {
  return {
    key,
    icon,
    children,
    label: onClick ? (
      <span onClick={onClick}> {label} </span> // Nếu có onClick thì thêm action gì đó vào 
    ) : (
      <Link to={`/profile/${key}`}> {label} </Link> // Nếu không có onClick, dùng Link như bình thường
    ),
  };
}

const MainLayout = ({ children, collapsed, setCollapsed }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };
  const items = [
    getItem("Personal", "personal", <PieChartOutlined />),
    getItem("Notification", "notification", <NotificationOutlined />),
    getItem("My Auction", "my-auction", <FileOutlined />),
    getItem("Payment Resquest", "payment-request", <TransactionOutlined />),
    getItem("Wallet", "wallet", <WalletOutlined />),
    getItem("Logout", "logout", <LogoutOutlined />,handleLogout),
  ];
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        style={{ marginTop: "85px" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: collapsed ? "center" : "flex-start",
            padding: "16px",
          }}
        >
          {!collapsed && (
            <span
              style={{ fontSize: "20px", fontWeight: "bold", color: "#fff" }}
            >
              <UserOutlined /> My Account
            </span>
          )}
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>

      {/* Main Layout */}
      <Layout>
        <Header>
          <HeaderLogin />
        </Header>
        <Content style={{ margin: "30px 16px 0" }}>
          <Outlet />
        </Content>
        {/* Sử dụng Footer từ components */}
        <Footer />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
