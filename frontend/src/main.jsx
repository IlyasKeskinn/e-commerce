import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import configureAppStore from './store/configureAppStore'
import { applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'
import { setCartLocalStorage } from './actions/cartAction.jsx'
import { getAuthUser } from './actions/authAction.jsx'
import "./style/index.css"
import "./style/typography.css"
import "./style/button.css"
import "./style/input.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import 'swiper/css';
import { HashRouter } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop.jsx'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureAppStore(composeEnhancers(applyMiddleware(thunk)))


store.dispatch(setCartLocalStorage());
store.dispatch(getAuthUser());

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <HashRouter>
    <ScrollToTop />
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
)

