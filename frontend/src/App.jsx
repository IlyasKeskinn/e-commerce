import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Shop } from './pages/Shop/Shop'
import { ShopingCart } from './pages/ShopingCart/ShopingCart'
import { ShopCheckout } from './pages/ShopCheckout/ShopCheckout'
import { ShopComplete } from './pages/ShopComplete/ShopComplete'
import { Auth } from "./pages/Auth/Auth"
import { NotFound } from './pages/NotFoundPage/NotFound'
import { AccountLayout } from './layout/AccountLayout'
import { AccountDashboard } from './pages/Account/AccountDashboard'
import { AccountAdress } from './pages/Account/AccountAddress'
import { AccountDetails } from './pages/Account/AccountDetails'
import { AccountOrders } from './pages/Account/AccountOrders'
import { DefaultLayout } from './layout/DefaultLayout'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import { Dashboard } from './pages/Admin/Dashboard'
import { CategoryList } from './pages/Admin/Category/CategoryList'
import { NewCategory } from './pages/Admin/Category/NewCategory'
import { CategoryUpdate } from './pages/Admin/Category/CategoryUpdate'
import { ProductList } from './pages/Admin/Product/ProductList'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "cart", element: <ShopingCart /> },
        { path: "checkout", element: <ShopCheckout /> },
        { path: "complete", element: <ShopComplete /> },
        { path: "login_register", element: <Auth /> },
        { path: "/product/:id", element: <ProductDetails /> },
        {
          path: "account", element: <AccountLayout />,
          children: [
            { path: "dashboard", element: <AccountDashboard /> },
            { path: "address", element: <AccountAdress /> },
            { path: "details", element: <AccountDetails /> },
            { path: "orders", element: <AccountOrders /> }
          ]
        },
        {
          path: "admin", element: <Dashboard />,
        },
        {
          path: "admin/categorylist", element: <CategoryList/>,
        },
        {
          path: "admin/newcategory", element: <NewCategory/>,
        },
        {
          path: "admin/updatecategory/:id", element: <CategoryUpdate/>,
        },
        {
          path: "admin/productlist", element: <ProductList/>,
        },
        

        { path: "*", element: <NotFound /> }
      ]
    }
  ])
  return (<RouterProvider router={router}></RouterProvider>)

}

export default App

