const cartState = {
    total: {
        sub_total: 0,
        total: 0,
    },
    cartItems: []
}
export const cartReducer = (state = cartState, action) => {
    switch (action.type) {
        case "SET_CART":
            return action.cart
        case "ADD_CART":
            return {
                ...state,
                cartItems: [...state.cartItems, action.cartItem]
            }
        case "REMOVE_CART":
            return {
                ...state,
                cartItems: state.cartItems.filter((cartItem) => cartItem.cartId !== action.id)
            }
        case "UPDATE_CART":
            return {
                ...state,
                cartItems: state.cartItems.map((cartItem) => {
                    if (action.id === cartItem.cartId) {
                        return {
                            ...cartItem,
                            ...action.updates
                        };
                    } else {
                        return cartItem;
                    }
                })
            };
        case "CLEAR_CART":
            return {
                total: {
                    sub_total: 0,
                    total: 0
                },
                cartItems: []
            };
        case "UPDATE_TOTAL":
            return {
                ...state,
                total: {
                    sub_total: action.sub_total,
                    total: action.total
                }
            };
        default:
            return state;
    }
}