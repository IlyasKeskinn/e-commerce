const productState = [];

export const productReducer = (state = productState, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return action.products;
        default:
            return state;
    }
}