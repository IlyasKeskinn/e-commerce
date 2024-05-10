
import { Layout, Menu, Avatar, Space, Row, Col, Badge, Button, Dropdown, List } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  DashboardOutlined, ContainerOutlined,
  AppstoreOutlined, SlidersOutlined,
  SettingOutlined, LaptopOutlined,
  UserOutlined, ShoppingCartOutlined,
  RollbackOutlined, ClusterOutlined,
  HourglassOutlined, ContactsOutlined,
  UserSwitchOutlined, LogoutOutlined,
  BellOutlined,
} from '@ant-design/icons';


const { Header, Sider, Content } = Layout;

export const AdminLayout = () => {
  const navigate = useNavigate();
  const siderStyle = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#000",
    backgroundColor: "#e1eaf4",
  }
  const headerStyle = {
    color: "#ffff",
    backgroundColor: "#27374D",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "start",
    width: "100%",

  }
  const contentStyle = {
    minHeight: 300,
    lineHeight: '120px',
    color: '#333',
    backgroundColor: "#fff",
    padding: "0 10px"

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
      path: "/",
      children: [
        {
          key: 3,
          label: "Product List",
          path: "/admin/productlist",
          onClick: () => {
            navigate("/admin/productlist")
          },
        },
        {
          key: 4,
          label: "New Product",
          path: "/admin/newproduct",
          onClick: () => {
            navigate("/admin/newproduct")
          },
        },
        {
          key: 15,
          label: "Add Limited Products",
          path: "/admin/addlimitedproducts",
          onClick: () => {
            navigate("/admin/addlimitedproducts")
          },
        },
        {
          key: 17,
          label: "Limited Products",
          path: "/admin/limitedproducts",
          onClick: () => {
            navigate("/admin/limitedproducts")
          },
        },
      ]
    },
    {
      key: 5,
      icon: <AppstoreOutlined />,
      label: "Categories",
      path: "/",
      children: [
        {
          key: 6,
          label: "Category List",
          path: "/admin/categoryList",
          onClick: () => {
            navigate("/admin/categoryList")
          }
        },
        {
          key: 7,
          label: "New Category",
          path: "/admin/newCategory",
          onClick: () => {
            navigate("/admin/newCategory")
          }
        },
        {
          key: 11,
          label: "Add Subcategory",
          path: "/admin/newsubcategory",
          onClick: () => {
            navigate("/admin/newsubcategory")
          }
        },
      ]
    },
    {
      key: 12,
      icon: <SlidersOutlined />,
      label: "Custom",
      path: "/",
      children: [
        {
          key: 13,
          label: "Slider List",
          path: "/admin/sliderlist",
          onClick: () => {
            navigate("/admin/sliderlist")
          }
        },
        {
          key: 14,
          label: "New Slider",
          path: "/admin/newslider",
          onClick: () => {
            navigate("/admin/newslider")
          }
        },
      ]
    },
    {
      key: 18,
      icon: <SettingOutlined />,
      label: "Site Settings",
      children: [
        {
          key: 19,
          icon: <ContainerOutlined />,
          label: "About",
          path: "/admin/settings/about",
          onClick: () => {
            navigate("/admin/settings/about")
          }
        }
      ]
    },
    {
      key: 20,
      icon: <ClusterOutlined />,
      label: "Collection",
      children: [
        {
          key: 21,
          icon: <HourglassOutlined />,
          label: "Deal Collection",
          path: "/admin/collections/deal_collection",
          onClick: () => {
            navigate("/admin/collections/deal_collection")
          }
        }
      ]
    },
    {
      key: 22,
      icon: <UserSwitchOutlined />,
      label: "Feedbacks",
      children: [
        {
          key: 23,
          icon: <ContactsOutlined />,
          label: "Contacts",
          path: "/admin/feedbacks/contacts",
          onClick: () => {
            navigate("/admin/feedbacks/contacts")
          }
        },
        {
          key: 24,
          icon: <ContactsOutlined />,
          label: "Reviews",
          path: "/admin/feedbacks/productreviews",
          onClick: () => {
            navigate("/admin/feedbacks/productreviews")
          }
        }
      ]
    },
    {
      key: 8,
      icon: <UserOutlined />,
      label: "Users",
      path: "/admin/users",
      onClick: () => {
        navigate("/admin/users")
      }
    },
    {
      key: 9,
      icon: <ShoppingCartOutlined />,
      label: "Orders",
      path: "/admin/orders",
      onClick: () => {
        navigate("/admin/orders")
      }
    },
    {
      key: 10,
      icon: <RollbackOutlined />,
      label: "Home",
      path: "/",
      onClick: () => {
        navigate("/")
          ;
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
  return (<div style={{ minHeight: "100vh" }}>
    <Layout style={layoutStyle}>
      <Header width={"75%"} style={headerStyle}>
        <h2 style={{ fontSize: "28px", fontFamily: "Arial sans-serif", fontWeight: "600" }}>{getProductTitle()}</h2>
        <div className='d-flex align-items-center'>

          <Space size={'large'}>
            <Button style={{ backgroundColor: "transparent", border: "none", color: "white" }} icon={<SettingOutlined />} />
            <Badge count={5}>
              <Button style={{ backgroundColor: "transparent", border: "none", color: "white" }} icon={<BellOutlined />} />
            </Badge>
            <Avatar size="large" src={"./img/instagram/insta11.jpg"} />

          </Space>
        </div>

      </Header>
      <Layout>
        <Layout>
          <Sider theme='light' width={"15%"} style={siderStyle} breakpoint='lg' collapsedWidth={0} >
            <Menu
              theme='light'
              style={{
                width: "100%",
                backgroundColor: "#e1eaf4",
                border: "none",
              }}
              mode="vertical"
              items={menuItems}
              defaultSelectedKeys={getActiveKeys()}
            />
          </Sider>
          <Content style={contentStyle}><Outlet /></Content>
        </Layout>
      </Layout>
    </Layout>
  </div>);
}