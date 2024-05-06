import { configureStore } from "@reduxjs/toolkit"
import { cartReducer } from "../reducers/cartReducer"
import { authReducer } from "../reducers/authReducer"
import { drawerReducer } from "../reducers/drawerReducer"

const configureAppStore = () => {
    const store = configureStore({
        reducer: ({
            cart: cartReducer,
            auth: authReducer,
            drawer : drawerReducer
        })
    })
    return store;
}

export default configureAppStore;