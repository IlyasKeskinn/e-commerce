// import { Route } from 'react-router-dom'
// import { Home } from './pages/Home/Home'
// import { Allproducts } from './pages/Shop/Allproducts'
// import { Shop } from './pages/Shop/Shop'
// import { ShopingCart } from './pages/ShopingCart/ShopingCart'
// import { ShopCheckout } from './pages/ShopCheckout/ShopCheckout'
// import { ShopComplete } from './pages/ShopComplete/ShopComplete'
// import { Auth } from "./pages/Auth/Auth"
// import { NotFound } from './pages/NotFoundPage/NotFound'
// import AccountLayout from './layout/AccountLayout'
// import { AccountDashboard } from './pages/Account/AccountDashboard'
// import { AccountAdress } from './pages/Account/AccountAddress'
// import { AccountDetails } from './pages/Account/AccountDetails'
// import { AccountOrders } from './pages/Account/AccountOrders'
// import { DefaultLayout } from './layout/DefaultLayout'
// import { ProductDetails } from './pages/ProductDetails/ProductDetails'
// import { Dashboard } from './pages/Admin/Dashboard'
// import { CategoryList } from './pages/Admin/Category/CategoryList'
// import { NewCategory } from './pages/Admin/Category/NewCategory'
// import { CategoryUpdate } from './pages/Admin/Category/CategoryUpdate'
// import { ProductList } from './pages/Admin/Product/ProductList'
// import { AddLimitedProducts } from './pages/Admin/Product/AddLimitedProducts'
// import { LimitedProducts } from './pages/Admin/Product/LimitedProducts'
// import { NewProduct } from './pages/Admin/Product/NewProduct'
// import { UpdateProduct } from './pages/Admin/Product/UpdateProduct'
// import { NewSubCategory } from './pages/Admin/Category/SubCategory/NewSubCategory';
// import { SubCategoryList } from './pages/Admin/Category/SubCategory/SubCategoryList'
// import { SubCategoryUpdate } from './pages/Admin/Category/SubCategory/SubCategoryUpdate'
// import { SliderList } from './pages/Admin/Slider/SliderList'
// import { NewSlider } from './pages/Admin/Slider/NewSlider'
// import { UpddateSlider } from './pages/Admin/Slider/UpdateSlider'
// import { AddAdressForm } from './pages/Account/AddAddress'
// import { EditAddress } from './pages/Account/EditAddress'
// import { AboutPage } from './pages/About/AboutPage'
// import { About } from './pages/Admin/SiteSettings/About'
// import { DealCollection } from './pages/Admin/Collection/DealCollection/DealCollection'
// import { Contact } from './pages/Contact/Contact'
// import { ConctactMessages } from './pages/Admin/Feedbacks/ConctactMessages'
// import { ContactDetails } from './pages/Admin/Feedbacks/ContactDetails'
// import PaymentLayouts from './layout/PaymentLayouts'
// import { Orders } from './pages/Admin/Orders/Orders'
// import { AccountConfirm } from './pages/Account/AccountConfirm'
// import { ResetPassword } from './components/Auth/ResetPassword'

// const routes = ({auth}) =>(
//     <Route path="/" element={<DefaultLayout />}>
//         <Route path="home" element={<Home />} />
//         <Route path="allproducts/:seo_link" element={<Allproducts />} />
//         <Route path="shop/:seo_link" element={<Shop />} />
//         <Route path="login_register" element={<Auth />} />
//         <Route path="/product/:seo_link" element={<ProductDetails />} />
//         <Route path="about" element={<AboutPage />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="account" element={<AccountLayout />}>
//             <Route path="dashboard" element={<AccountDashboard />} />
//             <Route path="address" element={<AccountAdress />} />
//             <Route path="orders" element={<AccountOrders />} />
//             <Route path="newaddress" element={<AddAdressForm />} />
//             <Route path="editaddress/:id" element={<EditAddress />} />
//         </Route>
//         <Route path="account/confirm/:id" element={<AccountConfirm />} />
//         <Route path="account/reset_password/" element={<ResetPassword />} />
//         <Route path="/" element={<PaymentLayouts />}>
//             <Route path="cart" element={<ShopingCart />} />
//             <Route path="checkout" element={<ShopCheckout />} />
//             <Route path="confirmation" element={<ShopComplete />} />
//         </Route>
//         <Route path="admin" element={<Dashboard />} />
//         <Route path="admin/categorylist" element={<CategoryList />} />
//         <Route path="admin/newcategory" element={<NewCategory />} />
//         <Route path="admin/newsubcategory/" element={<NewSubCategory />} />
//         <Route path="admin/updatecategory/:id" element={<CategoryUpdate />} />
//         <Route path="admin/subcategorylist/:id" element={<SubCategoryList />} />
//         <Route path="admin/updatesubcategory/:id" element={<SubCategoryUpdate />} />
//         <Route path="admin/productlist" element={<ProductList />} />
//         <Route path="admin/newproduct" element={<NewProduct />} />
//         <Route path="admin/updateproduct/:id" element={<UpdateProduct />} />
//         <Route path="admin/addlimitedproducts" element={<AddLimitedProducts />} />
//         <Route path="admin/limitedproducts" element={<LimitedProducts />} />
//         <Route path="admin/sliderlist" element={<SliderList />} />
//         <Route path="admin/newslider" element={<NewSlider />} />
//         <Route path="admin/updateslider/:id" element={<UpddateSlider />} />
//         <Route path="admin/settings/about" element={<About />} />
//         <Route path="admin/collections/deal_collection" element={<DealCollection />} />
//         <Route path="admin/feedbacks/contacts" element={<ConctactMessages />} />
//         <Route path="admin/feedbacks/update_contacts/:id" element={<ContactDetails />} />
//         <Route path="admin/orders" element={<Orders />} />
//         <Route path="*" element={<NotFound />} />
//     </Route>
// );


// const mapStateToProps = (state) => {
//     return {
//       auth: state.auth
//     }
//   }
  
  
//   export default connect(mapStateToProps)(routes);