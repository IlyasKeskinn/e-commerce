# E-Commerce Website

This project is an e-commerce website developed using the MERN (MongoDB, Express.js, React, Node.js) stack.

## Description

This e-commerce website aims to provide users with a platform to browse and purchase various products online. It includes the following key features:

- **User Authentication:** Users can sign up, log in, and manage their accounts.
- **Product Listings:** Displaying a catalog of products with details such as name, description, price, and images.
- **Shopping Cart:** Users can add products to their cart, update quantities, and remove items.
- **Checkout Process:** Guiding users through a secure checkout process, including shipping and payment information.
- **Order Management:** Allowing users to view their order history and track the status of their orders.
- **Admin Panel:** Providing administrators with the ability to manage products, categories, and orders.

There are screenshots at the bottom of the readme file. 
---

## Backend Structure

The backend of this project utilizes Express.js for handling APIs. It consists of three main structural folders:

- **Controller**: Controls backend operations.
- **Models**: Defines collection models using Mongoose.
- **Routes**: Handles API routing.

### Helper Folder

Contains functionalities such as:

- **Slugfield**: Facilitates the creation of SEO-friendly product and category links.
- **Sendmail helpers**: Used for sending account verification emails and receiving reset password emails.
- **Error middleware**: Centrally manages error handling.
- **Logger**: Logs errors to both logs.log file and MongoDB library.
- **Authentication and authorization**: Utilizes `isAuth` and `isAdmin` middleware. Implements token-based authentication and authorization through JWT.
- **Multer**: Handles image uploading.
- **ImageUpload helper**: Supports the image uploading process.

### Backend APIs

1. **Site settings operations**: Addition, deletion, update, and retrieval, including site logos.
2. **Authentication operations**: User registration, login, sending account verification emails, password reset operations.
3. **Category operations**: Addition, deletion, update, and retrieval of main categories.
4. **Payment APIs**: Utilizes Stripe.
5. **Product operations**: Addition, deletion, update, and retrieval, addition or removal to limited products, addition, deletion, update, and retrieval of product comments.
6. **Slider operations**: Addition, update, deletion, and retrieval.
7. **Sub-category operations**: Addition, deletion, update, and retrieval.
8. **User API**: Address addition, deletion, and update operations.

---

## Frontend Structure

The frontend utilizes React-Redux structure for state management.

### Store Management

- **store folder**: Contains configureAppStore.
- **reducers folder**: Houses reducers.
- **action folder**: Holds actions.

### UI Components

- **Ant Design**: Used for admin panel management.
- **Ant Design Chart**: Utilized for data visualization in the admin panel through graphs and tables.

### Authentication and Authorization

Implemented using ProtectedRoutes.

### Custom Hooks

- **useFetch**: Minimizes code repetition while performing post, update, and get operations.

### Folder Structure

- **Pages folder**: Contains the pages.
- **Layout folder**: Contains the layouts.
- **Component folder**: Contains the components.

---

## Frontend Functionality

Users can:

- Register on the site.
- Receive account verification emails during registration.
- Log in to the site.
- Reset their password if forgotten.
- Manage their addresses.
- Browse and add products to their carts by category or search.
- Make purchases with credit cards.
- Leave comments on products.
- View their comments.
- Contact the company through a contact form.

## Technologies Used

### Backend
1. **[bcrypt](https://www.npmjs.com/package/bcrypt)**: A library to help you hash passwords.
2. **[cors](https://www.npmjs.com/package/cors)**: Express middleware for enabling CORS (Cross-Origin Resource Sharing).
3. **[dotenv](https://www.npmjs.com/package/dotenv)**: Loads environment variables from a .env file into process.env.
4. **[express](https://www.npmjs.com/package/express)**: Fast, unopinionated, minimalist web framework for Node.js.
5. **[express-async-errors](https://www.npmjs.com/package/express-async-errors)**: A module to handle async/await errors in Express.js.
6. **[joi](https://www.npmjs.com/package/joi)**: Object schema description language and validator for JavaScript objects.
7. **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)**: JSON Web Token implementation for Node.js.
8. **[mongodb](https://www.npmjs.com/package/mongodb)**: MongoDB driver for Node.js.
9. **[mongoose](https://www.npmjs.com/package/mongoose)**: MongoDB object modeling tool designed to work in an asynchronous environment.
10. **[multer](https://www.npmjs.com/package/multer)**: Node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
11. **[nodemailer](https://www.npmjs.com/package/nodemailer)**: Module for sending emails from Node.js applications.
12. **[path](https://www.npmjs.com/package/path)**: Node.js module for handling file paths.
13. **[slugify](https://www.npmjs.com/package/slugify)**: Library to convert strings into URL-friendly slugs.
14. **[stripe](https://www.npmjs.com/package/stripe)**: Stripe API library for Node.js.
15. **[winston](https://www.npmjs.com/package/winston)**: Versatile logging library for Node.js.
16. **[winston-mongodb](https://www.npmjs.com/package/winston-mongodb)**: MongoDB transport for Winston logging library.



## Frontend Libraries

1. **[@ant-design/charts](https://www.npmjs.com/package/@ant-design/charts) and [@ant-design/plots](https://www.npmjs.com/package/@ant-design/plots)**:
   Ant Design's chart and plot components. Used to fulfill various data visualization requirements.

2. **[@emotion/styled](https://www.npmjs.com/package/@emotion/styled) and [styled-components](https://www.npmjs.com/package/styled-components)**:
   CSS-in-JS solutions. Used to easily add styled definitions to React components.

3. **[@mui/material](https://www.npmjs.com/package/@mui/material) and [@mui/styled-engine-sc](https://www.npmjs.com/package/@mui/styled-engine-sc)**:
   Material-UI's React component library. Provides modern, clean, and easy-to-use interface components.

4. **[@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit), [react-redux](https://www.npmjs.com/package/react-redux), [redux](https://www.npmjs.com/package/redux), [redux-thunk](https://www.npmjs.com/package/redux-thunk)**:
   We use Redux for state management in React applications. Redux Toolkit enables faster and more efficient work with Redux.

5. **[@stripe/stripe-js](https://www.npmjs.com/package/@stripe/stripe-js)**:
   Used to integrate the Stripe payment processor. Used to process payments in the e-commerce application.

6. **[antd](https://www.npmjs.com/package/antd)**:
   Ant Design's general UI component library. Provides various UI components and is easy to use.

7. **[bootstrap-icons](https://www.npmjs.com/package/bootstrap-icons)**:
   Bootstrap icon set. Used to include icons in UI design.

8. **[dayjs](https://www.npmjs.com/package/dayjs) and [moment](https://www.npmjs.com/package/moment)**:
   Used for date and time operations. Used for operations like formatting, processing, and manipulating dates.

9. **[lodash-es](https://www.npmjs.com/package/lodash-es)**:
   General-purpose utility library to facilitate JavaScript functions. Used for writing more efficient and readable code.

10. **[react-bootstrap-icons](https://www.npmjs.com/package/react-bootstrap-icons)**:
    Bootstrap icons for use in React components. Used to include icons in UI design.

11. **[react-dom](https://www.npmjs.com/package/react-dom) and [react](https://www.npmjs.com/package/react)**:
    Core libraries for developing React applications.

12. **[react-highlight-words](https://www.npmjs.com/package/react-highlight-words)**:
    Used to highlight keywords within text. Used to display search results or draw attention to certain text.

13. **[react-quill](https://www.npmjs.com/package/react-quill)**:
    Rich text editor component. Used to facilitate text input and provide formatting options to users.

14. **[react-router](https://www.npmjs.com/package/react-router) and [react-router-dom](https://www.npmjs.com/package/react-router-dom)**:
    Used for routing in React applications. Provides functionality for navigating between different pages and creating deep links.

15. **[react-uuid](https://www.npmjs.com/package/react-uuid)**:
    Used to generate a random UUID. Used to assign unique identifiers, often used for assigning a unique identifier to data items.

16. **[swiper](https://www.npmjs.com/package/swiper)**:
    Modern slider library. Used to create carousels, galleries, and similar UI components.


## Getting Started

Before starting the development of the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/username/your-ecommerce.git



## Project Structure
```
└── 📁e-commerce
    └── 📁backend
        └── 📁controller
            └── auth.js
            └── category.js
            └── contactMsg.js
            └── payment.js
            └── products.js
            └── 📁siteSettings
                └── about_controller.js
                └── collection.js
            └── slider.js
            └── subcategory.js
            └── user.js
        └── 📁db
            └── dataBase.js
        └── 📁helpers
            └── deletePhoto.js
            └── imageUpload.js
            └── logger.js
            └── sendmail.js
            └── slugField.js
        └── 📁middlewares
            └── errors.js
            └── isAdmin.js
            └── isAuth.js
            └── photoUpload.js
        └── 📁models
            └── category.js
            └── contactMsg.js
            └── product.js
            └── 📁siteSettings
                └── about.js
                └── collection.js
            └── slider.js
            └── user.js
        └── 📁router
            └── adminLogin.js
            └── auth.js
            └── category.js
            └── contact.js
            └── payment.js
            └── products.js
            └── 📁siteSettings
                └── collection.js
                └── siteSettings.js
            └── slider.js
            └── user.js
        └── index.js
        └── logs.log
    └── 📁frontend
        └── 📁public
            └── 📁img
        └── 📁src
            └── App.jsx
            └── 📁actions
                └── authAction.jsx
                └── cartAction.jsx
                └── drawerAction.jsx
            └── 📁components
                └── 📁Account
                └── 📁Asides
                    └── 📁AuthAside
                    └── 📁CartAside
                └── 📁Auth
                └── 📁Banner
                    └── Banner.css
                    └── Banner.jsx
                └── 📁Cart
                └── 📁Collection
                └── 📁Home
                └── 📁Inputs
                └── 📁Instagram
                └── 📁Layout
                    └── 📁Footer
                    └── 📁Header
                └── 📁Loader
                └── 📁NavTabs
                └── 📁PageOverlay
                └── 📁Pagination
                └── 📁Product
                └── 📁Reviews
                └── 📁Search
                └── 📁ServicePromotion
                └── 📁Shop
                └── 📁Skeltons
                └── 📁Sliders
                └── 📁SocialIcons
            └── 📁hooks
                └── useFetch.jsx
                └── useFetchWithToken.jsx
            └── 📁images
            └── 📁layout
                └── AccountLayout.jsx
                └── AdminLayout.jsx
                └── AsideLayout.jsx
                └── DefaultLayout.jsx
                └── MainLayout.jsx
                └── PaymentLayouts.jsx
            └── 📁pages
                └── 📁About
                └── 📁Account
                └── 📁Admin
                    └── 📁Category
                        └── 📁SubCategory
                    └── 📁Collection
                        └── 📁DealCollection
                    └── 📁Dashboard
                        └── Dashboard.jsx
                        └── 📁Statistic
                    └── 📁Feedbacks
                    └── 📁Orders
                    └── 📁Product
                    └── 📁SiteSettings
                    └── 📁Slider
                └── 📁Auth
                └── 📁Contact
                └── 📁Home
                └── 📁NotFoundPage
                └── 📁ProductDetails
                └── 📁Shop
                └── 📁ShopCheckout
                └── 📁ShopComplete
                └── 📁ShopingCart
            └── 📁paths
                └── ProtectedRoutes.jsx
                └── withRouter.jsx
            └── 📁reducers
                └── authReducer.jsx
                └── cartReducer.jsx
                └── drawerReducer.jsx
            └── 📁store
                └── configureAppStore.jsx
            └── 📁style
                └── button.css
                └── index.css
                └── input.css
                └── typography.css
            └── main.jsx
        └── vite.config.js
```


# Screenshots

## Admin Panel

### Dashboard
<img width="1469" alt="dashboard" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/2138f02f-84e3-4cd6-b6e5-0ae92572022c">

### Product Listing
<img width="1470" alt="product listing" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/745fe288-f267-4922-a49d-f5d172c0b2fc">

### Add New Product
<img width="1470" alt="add new product" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/7fb9496c-9b37-4000-9ca1-5d8d72efb828">
<img width="1467" alt="add new product 1" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/05242978-15e4-494c-a150-e00077b6783c">

### Limited Product
<img width="1470" alt="limited product adding" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/e58a39ac-3b23-468d-a71e-c06b1da08f92">

### Subcategory List
<img width="1470" alt="subcategory list" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/691cc43b-69af-4af4-af6c-25e65976ae71">

### Slider List
<img width="1470" alt="slider list" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/4e2e21d2-688d-42bd-a902-aac5afe8876b">

### Review Management
<img width="1470" alt="reviews management" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/a5efa650-8296-4e7f-9f82-2a9170af4c52">


## User

### Homepage
<img width="1470" alt="home slider" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/c136134c-97c1-48a0-bffb-9d4202944849">
<img width="1468" alt="home collection" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/d87fcb54-077a-4f02-ba56-d25239c4a165">
<img width="1470" alt="home product" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/cf7bdb9d-7681-4b36-830f-c7ce029c39af">
<img width="1470" alt="collection timer" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/080739b8-1cd1-4864-b92f-fd1ddc3bc2a0">
<img width="1470" alt="limited products" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/fa354c64-3a68-4c96-a0a6-e6d1c4dbd57c">

### Shop && Shop view Settings
<img width="1470" alt="shop" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/0bc06c0e-de03-4d0c-a2df-8f99b6b5b72d">
<img width="1470" alt="shop view" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/6c7582ad-6fa4-4e7a-a6fb-ace934b04b8c">
<img width="1470" alt="shop view 4" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/231d5f76-445c-4408-a370-7fe176e6bf6f">


### Product Details
<img width="1410" alt="product details" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/e6978a00-97d5-4f9b-8ec6-70b5d51f20a1">
<img width="1470" alt="product comments" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/6c4e86c4-cf06-4386-9c39-154808a148b1">

### Payment
<img width="1470" alt="cart" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/f647a7a1-502a-4852-9a4f-dd1faf3063ab">
<img width="1468" alt="checkout" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/0deadf51-93b4-497b-b9be-7f74653c4378">
<img width="1470" alt="stirpe payments" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/7eaa1b74-39bb-4ee6-b9ea-a07669ffa63a">
<img width="1470" alt="order complete" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/c27933c4-abb4-4c6e-93f5-6ea64986d454">

### Drawer
<img width="1470" alt="drawer login" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/5f248d32-648f-45e9-a223-75ae4497e526">
<img width="1470" alt="drawer cart" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/6217a9f3-0e57-45de-b85f-04ef8efeb3fe">

### Login Screen 
<img width="1470" alt="login" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/93ff9b5b-fbaf-4c4e-99f0-8de702077ef2">
<img width="1468" alt="Ekran Resmi 2024-05-11 00 14 55" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/a5244afe-1a8b-4e82-97db-2f43f7ee1dd1">

### Confirm Account
<img width="1468" alt="Ekran Resmi 2024-05-11 00 16 36" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/480a5b33-a016-4b00-8edd-b07e714cd56f">


### Lost Password
<img width="1179" alt="Ekran Resmi 2024-05-11 00 17 51" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/7f2c1513-ce67-426c-80cb-0597a7269483">
<img width="1467" alt="Ekran Resmi 2024-05-11 00 19 03" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/06ca8c54-5850-49a1-b905-93698c06c431">

### Search Product
<img width="1470" alt="product search" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/a3e70293-61b7-4165-94d6-e74aa1c02c0f">

### Some Mobile Screens 
<img width="498" alt="Ekran Resmi 2024-05-10 23 54 10" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/8b6d4b47-db4e-4bc2-9414-4a6c5106403f">
<img width="498" alt="Ekran Resmi 2024-05-10 23 54 10" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/57cf5081-2ac2-422d-843e-0ffdbccf182f">
<img width="498" alt="Ekran Resmi 2024-05-10 23 54 10" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/38de8f1b-1cb9-4931-a2c0-47f939514e12">
<img width="498" alt="Ekran Resmi 2024-05-10 23 54 10" src="https://github.com/IlyasKeskinn/e-commerce/assets/86023697/5d840761-30b0-490a-a1ca-fd021673ca60">



