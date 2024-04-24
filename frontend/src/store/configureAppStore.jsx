import { configureStore } from "@reduxjs/toolkit"
import { productReducer } from "../reducers/productReducer"
import { cartReducer } from "../reducers/cartReducer"

const configureAppStore = () => {
    const store = configureStore({
        reducer : ({
            products : productReducer,
            cart : cartReducer
        })
    })

    return store;
}

export default configureAppStore;