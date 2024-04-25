
import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import { DashboardOutlined, AppstoreOutlined, LaptopOutlined, UserOutlined, ShoppingCartOutlined, RollbackOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

const { Header, Footer, Sider, Content } = Layout;

const AdminLayout = ({ auth }) => {
  const siderStyle = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#333",
    padding: "10px 10px"
  }
  const headerStyle = {
    color: "#333",
    backgroundColor: "#f2f2f2",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
    width: "100%",
    borderRadius: 8,

  }
  const contentStyle = {
    textAlign: 'center',
    minHeight: 300,
    lineHeight: '120px',
    color: '#333',
    backgroundColor: "#fffff"

  };
  const layoutStyle = {
    minHeight: "100vh",
    width: "100vw",
  };

  const menuItems = [
    {
      key: 1,
      icon: <DashboardOutlined />,
      label: "Dashboard",
      path: "/admin",
      onClick: () => {
        navigate(`/admin`);
      }
    },
    {
      key: 2,
      icon: <LaptopOutlined />,
      label: "Products",
      path: "/admin/products",
      onClick: () => {
        navigate("/admin/products")
      }
    },
    {
      key: 3,
      icon: <AppstoreOutlined />,
      label: "Categories",
      path: "/",
      children: [
        {
          key: 4,
          label: "Category List",
          path: "/admin/categoryList",
          onClick: () => {
            navigate("/admin/categoryList")
          }
        },
        {
          key: 5,
          label: "New Category",
          path: "/admin/newCategory",
          onClick: () => {
            navigate("/admin/newCategory")
          }
        },
      ]
    },
    {
      key: 6,
      icon: <UserOutlined />,
      label: "Users",
      path: "/admin/users",
      onClick: () => {
        navigate("/admin/users")
      }
    },
    {
      key: 7,
      icon: <ShoppingCartOutlined />,
      label: "Orders",
      path: "/admin/orders",
      onClick: () => {
        navigate("/admin/orders")
      }
    },
    {
      key: 8,
      icon: <RollbackOutlined />,
      label: "Home",
      path: "/",
      onClick: () => {
        window.location.href = "/";
      }
    },
  ]

  const getActiveKeys = () => {
    for (const item of menuItems) {
      if (item.children) {
        for (const childItem of item.children) {
          if (childItem.path === window.location.pathname) {
            return childItem.key;
          }
        }
      } else {
        if (item.path === window.location.pathname) {
          return item.key;
        }
      }
    }
  }

  const getProductTitle = () => {
    for (const item of menuItems) {
      if (item.children) {
        for (const childItem of item.children) {
          if (childItem.path === window.location.pathname) {
            return childItem.label;
          }
        }
      } else {
        if (item.path === window.location.pathname) {
          return item.label;
        }
      }
    }
  }

  const isAdmin = () => {
    const user = JSON.parse(localStorage.getItem("user").user);
    const isAdmin = user.role === "admin" ? true : false;
    return isAdmin;
  }
  if (isAdmin) {
    return (<div style={{ minHeight: "100vh" }}>
      <Layout style={layoutStyle}>
        <Sider theme='dark' width={"15%"} style={siderStyle} breakpoint='lg' collapsedWidth={0} >
          <Menu
            theme='dark'
            style={{
              width: "100%",
            }}
            mode="vertical"
            items={menuItems}
            defaultSelectedKeys={getActiveKeys()}
          />
        </Sider>
        <Layout>
          <Header width={"75%"} style={headerStyle}>
            <h2>{getProductTitle()}</h2>
          </Header>
          <Content style={contentStyle}><Outlet /></Content>
        </Layout>
      </Layout>
    </div>);
  } else {
    window.location.href = "/";
  }
}


const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(AdminLayout);