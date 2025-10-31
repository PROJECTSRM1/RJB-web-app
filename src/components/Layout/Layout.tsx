import React from 'react';
import {
  NotificationOutlined,
  UserOutlined,
  LogoutOutlined,
  HeatMapOutlined,
  AppstoreAddOutlined,
  GatewayOutlined,
  SettingOutlined,
  PicCenterOutlined,
  ExclamationCircleOutlined,
  PieChartOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  RobotOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme, Modal, message, Button } from 'antd';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import HeaderBar from '../header/header';

const { Content, Sider } = Layout;
const { confirm } = Modal;

const MenuItems = [
  { menuIcon: UserOutlined, label: 'Dashboard', path: '/app/dashboard' },
    {
      key: 'Live Map',
      menuIcon: HeatMapOutlined,
      label: 'Live Map',
    },
    {
      key: 'Officer Tracking',
      menuIcon: AppstoreAddOutlined,
      label: 'Officer Tracking',
    },
    {
      key: 'Gate Pass & Visitors',
      label: 'Gate Pass & Visitors',
      menuIcon: GatewayOutlined,
    },
    {
      key: 'CCTV AI Feeds',
      label: 'CCTV AI Feeds',
      menuIcon: PicCenterOutlined,
    },
    {
      key: 'Analytics & Reports',
      label: 'Analytics & Reports',
      menuIcon: PieChartOutlined,
    },
    {
      key: 'AI Alerts',
      label: 'AI Alerts',
      menuIcon: NotificationOutlined,
    },
    {
      key: 'System Health',
      label: 'System Health',
      menuIcon: RobotOutlined,
    },
    {
      key: 'Admin',
      label: 'Admin',
      menuIcon: SettingOutlined,
    },
  { menuIcon: LogoutOutlined, label: 'Logout' },
];


const LayoutComponent: React.FC = () => {
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();
  // const [userDetails, setUserDetails] = React.useState<any>(null);
  const [collapsed, setCollapsed] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuData = (menu: any) => menu.map((ele: any) => ({
    key: ele.path || ele.label,
    icon: React.createElement(ele.menuIcon),
    label: ele.label
  }));

  const items = menuData(MenuItems);

  // **Logout modal same as header**
  const handleLogout = () => {
    confirm({
      title: 'Are you sure you want to log out?',
      icon: <ExclamationCircleOutlined />,
      okText: 'Yes',
      cancelText: 'No',
      okType: 'default',
      okButtonProps: {
        style: { backgroundColor: '#0a3b5e', color: '#fff' },
      },
      cancelButtonProps: {
        style: { backgroundColor: '#0a3b5e', color: '#fff' },
      },
      onOk() {
        localStorage.removeItem('user');
        message.success('Logged out successfully!');
        navigate('/landing');
      },
      onCancel() {
        message.info('Logout cancelled');
      },
    });
  };

  const onClick = (e: any) => {
    if (e.key === 'Logout') {
      handleLogout();
      return;
    }

    const selected = [...MenuItems].find(item => item.path === e.key);
    if (selected?.path) navigate(selected.path);
  };

  return (
    <Layout style={{ height: '100vh', overflow: 'hidden' }}>
      <HeaderBar />
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          trigger={null}
          width={200}
          style={{ background: colorBgContainer }}
        >
          <div style={{ padding: 10, textAlign: 'right' }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{ fontSize: 18, color: '#000' }}
            />
          </div>

          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            onClick={onClick}
            style={{
              height: '100%',
              borderInlineEnd: 0,
              background: colorBgContainer,
            }}
            items={items}
            theme="light"
            inlineCollapsed={collapsed}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px', display: 'flex', flexDirection: 'column' }}>
          <Content style={{ padding: 24, margin: 0, borderRadius: borderRadiusLG, flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
