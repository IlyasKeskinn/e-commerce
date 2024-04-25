import { configureStore } from "@reduxjs/toolkit"
import { productReducer } from "../reducers/productReducer"
import { cartReducer } from "../reducers/cartReducer"
import { authReducer } from "../reducers/authReducer"

const configureAppStore = () => {
    const store = configureStore({
        reducer: ({
            products: productReducer,
            cart: cartReducer,
            auth: authReducer

        })
    })
    return store;
}

export default configureAppStore;