import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import configureAppStore from './store/configureAppStore'
import { applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'
import {getProductsFromData} from './actions/productAction'
import "./style/index.css"
import "./style/typography.css"
import "./style/button.css"
import "./style/input.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import 'swiper/css';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureAppStore(composeEnhancers(applyMiddleware(thunk)))

store.dispatch(getProductsFromData())


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

