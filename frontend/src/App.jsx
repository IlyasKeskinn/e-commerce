import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout"
import { AdminLayout } from "./layout/AdminLayout"
import { Home } from './pages/Home/Home'
import { Allproducts } from './pages/Shop/Allproducts'
import { Shop } from './pages/Shop/Shop'
import { ShopingCart } from './pages/ShopingCart/ShopingCart'
import { ShopCheckout } from './pages/ShopCheckout/ShopCheckout'
import { ShopComplete } from './pages/ShopComplete/ShopComplete'
import { Auth } from "./pages/Auth/Auth"
import { NotFound } from './pages/NotFoundPage/NotFound'
import AccountLayout from './layout/AccountLayout'
import { AccountDashboard } from './pages/Account/AccountDashboard'
import { AccountAdress } from './pages/Account/AccountAddress'
import { AccountDetails } from './pages/Account/AccountDetails'
import { AccountOrders } from './pages/Account/AccountOrders'
import { ProductDetails } from './pages/ProductDetails/ProductDetails'
import { Dashboard } from './pages/Admin/Dashboard/Dashboard'
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
import { Orders } from './pages/Admin/Orders/Orders'
import { AccountConfirm } from './pages/Account/AccountConfirm'
import { ResetPassword } from './components/Auth/ResetPassword'
import { connect } from "react-redux";
import { ProductReviews } from "./pages/Admin/Feedbacks/ProductReviews";
import { ProtectedRoutes } from "./paths/ProtectedRoutes"
import { ResetPasswordRequest } from "./components/Auth/ResetPasswordRequest";

const App = ({ auth }) => {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>

        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="allproducts/:seo_link" element={<Allproducts />} />
        <Route path="shop/:seo_link" element={<Shop />} />
        <Route path="/product/:seo_link" element={<ProductDetails />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<Contact />} />


        <Route path="account/reset_password_request" element={<ResetPasswordRequest />} />
        <Route path="account/reset_password/:token" element={<ResetPassword />} />

        <Route element={<ProtectedRoutes condition={!auth.user.user} />}>
          <Route path="account/confirm/:id" element={<AccountConfirm />} />
          <Route path="login_register" element={<Auth />} />
        </Route>

        <Route path="payment" element={<PaymentLayouts />}>
          <Route path="cart" element={<ShopingCart />} />
        </Route>

        <Route element={<ProtectedRoutes condition={auth.user.user} routes={"/login_register"} />}>

          <Route path="account" element={<AccountLayout />}>
            <Route path="" element={<AccountDashboard />} />
            <Route path="address" element={<AccountAdress />} />
            <Route path="orders" element={<AccountOrders />} />
            <Route path="newaddress" element={<AddAdressForm />} />
            <Route path="editaddress/:id" element={<EditAddress />} />
          </Route>

          <Route path="payment" element={<PaymentLayouts />}>
            <Route path="checkout" element={<ShopCheckout />} />
            <Route path="confirmation" element={<ShopComplete />} />
          </Route>
        </Route>
      </Route>

      <Route element={<ProtectedRoutes condition={auth.user.user && auth.user.user.role === "admin"} />}>
        <Route path="admin" element={<AdminLayout />}>
          <Route path="" element={<Dashboard />} />
          <Route path="categorylist" element={<CategoryList />} />
          <Route path="newcategory" element={<NewCategory />} />
          <Route path="newsubcategory/" element={<NewSubCategory />} />
          <Route path="updatecategory/:id" element={<CategoryUpdate />} />
          <Route path="subcategorylist/:id" element={<SubCategoryList />} />
          <Route path="updatesubcategory/:id" element={<SubCategoryUpdate />} />
          <Route path="productlist" element={<ProductList />} />
          <Route path="newproduct" element={<NewProduct />} />
          <Route path="updateproduct/:id" element={<UpdateProduct />} />
          <Route path="addlimitedproducts" element={<AddLimitedProducts />} />
          <Route path="limitedproducts" element={<LimitedProducts />} />
          <Route path="sliderlist" element={<SliderList />} />
          <Route path="newslider" element={<NewSlider />} />
          <Route path="updateslider/:id" element={<UpddateSlider />} />
          <Route path="settings/about" element={<About />} />
          <Route path="collections/deal_collection" element={<DealCollection />} />
          <Route path="feedbacks/contacts" element={<ConctactMessages />} />
          <Route path="feedbacks/update_contacts/:id" element={<ContactDetails />} />
          <Route path="feedbacks/productreviews" element={<ProductReviews />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes >
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}


export default connect(mapStateToProps)(App);




