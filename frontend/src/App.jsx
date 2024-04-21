import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './layout/MainLayout'
import { Home } from './pages/Home/Home'
import { Shop } from './pages/Shop/Shop'
import { ShopingCart } from './pages/ShopingCart/ShopingCart'
import { ShopCheckout } from './pages/ShopCheckout/ShopCheckout'
import { ShopComplete } from './pages/ShopComplete/ShopComplete'
import { Auth } from "./pages/Auth/Auth"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/index", element: <Home /> },
        { path: "/shop", element: <Shop /> },
        { path: "/cart", element: <ShopingCart /> },
        { path: "/checkout", element: <ShopCheckout /> },
        { path: "/complete", element: <ShopComplete /> },
        { path: "/login_register", element: <Auth /> },
      ]
    }
  ])
  return (<RouterProvider router={router}></RouterProvider>)
}

export default App
