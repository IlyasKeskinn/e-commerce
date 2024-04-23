import { configureStore } from "@reduxjs/toolkit"
import { productReducer } from "../reducers/productReducer"

const configureAppStore = () => {
    const store = configureStore({
        reducer : ({
            products : productReducer
        })
    })

    return store;
}

export default configureAppStore;