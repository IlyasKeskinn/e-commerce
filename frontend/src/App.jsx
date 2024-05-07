import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Allproducts } from './pages/Shop/Allproducts'
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
import { ProductDetails } from './pages/ProductDetails/ProductDetails'
import { Dashboard } from './pages/Admin/Dashboard'
import { CategoryList } from './pages/Admin/Category/CategoryList'
import { NewCategory } from './pages/Admin/Category/NewCategory'
import { CategoryUpdate } from './pages/Admin/Category/CategoryUpdate'
import { ProductList } from './pages/Admin/Product/ProductList'
import { AddLimitedProducts } from './pages/Admin/Product/AddLimitedProducts'
import { LimitedProducts } from './pages/Admin/Product/LimitedProducts'
import { NewProduct } from './pages/Admin/Product/NewProduct'
import { UpdateProduct } from './pages/Admin/Product/UpdateProduct'
import { NewSubCategory } from './pages/Admin/Category/SubCategory/NewSubCategory';
import { SubCategoryList } from './pages/Admin/Category/SubCategory/SubCategoryList'
import { SubCategoryUpdate } from './pages/Admin/Category/SubCategory/SubCategoryUpdate'
import { SliderList } from './pages/Admin/Slider/SliderList'
import { NewSlider } from './pages/Admin/Slider/NewSlider'
import { UpddateSlider } from './pages/Admin/Slider/UpdateSlider'
import { AddAdressForm } from './pages/Account/AddAddress'
import { EditAddress } from './pages/Account/EditAddress'
import { AboutPage } from './pages/About/AboutPage'
import { About } from './pages/Admin/SiteSettings/About'
import { DealCollection } from './pages/Admin/Collection/DealCollection/DealCollection'
import { Contact } from './pages/Contact/Contact'
import { ConctactMessages } from './pages/Admin/Feedbacks/ConctactMessages'
import { ContactDetails } from './pages/Admin/Feedbacks/ContactDetails'
import PaymentLayouts from './layout/PaymentLayouts'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "allproducts/:seo_link", element: <Allproducts /> },
        { path: "shop/:seo_link", element: <Shop /> },
        { path: "complete", element: <ShopComplete /> },
        { path: "login_register", element: <Auth /> },
        { path: "/product/:seo_link", element: <ProductDetails /> },
        { path: "about", element: <AboutPage /> },
        { path: "contact", element: <Contact /> },
        {
          path: "account", element: <AccountLayout />,
          children: [
            { path: "dashboard", element: <AccountDashboard /> },
            { path: "address", element: <AccountAdress /> },
            { path: "details", element: <AccountDetails /> },
            { path: "orders", element: <AccountOrders /> },
            { path: "newaddress", element: <AddAdressForm /> },
            { path: "editaddress/:id", element: <EditAddress /> }

          ]
        },
        {
          path: "/", element: <PaymentLayouts />,
          children: [
            { path: "cart", element: <ShopingCart /> },
            { path: "checkout", element: <ShopCheckout /> }
          ]
        },
        { path: "admin", element: <Dashboard />, },
        { path: "admin/categorylist", element: <CategoryList />, },
        { path: "admin/newcategory", element: <NewCategory />, },
        { path: "admin/newsubcategory/", element: <NewSubCategory /> },
        { path: "admin/updatecategory/:id", element: <CategoryUpdate />, },
        { path: "admin/subcategorylist/:id", element: <SubCategoryList /> },
        { path: "admin/updatesubcategory/:id", element: <SubCategoryUpdate /> },
        { path: "admin/productlist", element: <ProductList />, },
        { path: "admin/newproduct", element: <NewProduct />, },
        { path: "admin/updateproduct/:id", element: <UpdateProduct /> },
        { path: "admin/addlimitedproducts", element: <AddLimitedProducts /> },
        { path: "admin/limitedproducts", element: <LimitedProducts /> },
        { path: "admin/sliderlist", element: <SliderList /> },
        { path: "admin/newslider", element: <NewSlider /> },
        { path: "admin/updateslider/:id", element: <UpddateSlider /> },
        { path: "admin/settings/about", element: <About /> },
        { path: "admin/collections/deal_collection", element: <DealCollection /> },
        { path: "admin/feedbacks/contacts", element: <ConctactMessages /> },
        { path: "admin/feedbacks/update_contacts/:id", element: <ContactDetails /> },


        { path: "*", element: <NotFound /> }
      ]
    }
  ])
  return (<RouterProvider router={router}></RouterProvider>)

}

export default App

