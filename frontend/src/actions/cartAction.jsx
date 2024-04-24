import { getProductsFromData } from "./productAction";

export const setCart = (cart) => (
    {
        type: "SET_CART",
        cart
    }
)
export const setCartLocalStorage = () => {
    return (dispatch) => {
        const cartInitial = {
            total: {
                sub_total: 0,
                total: 0,
            },
            cartItems: []
        }
        const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : cartInitial;
        localStorage.setItem("cart", JSON.stringify(cart));
        dispatch(setCart(cart))

    }
}

export const addCart = (cartItem) => (
    {
        type: "ADD_CART",
        cartItem
    }
)

export const addCartLocalStorage = (item, itemQuantity) => {
    return (dispatch) => {

        let cart = []
        cart = JSON.parse(localStorage.getItem("cart")) || [];


        const itemExists = cart.cartItems.find((cartOwnItem) => (
            cartOwnItem.selectedColor === item.selectedColor &&
            cartOwnItem.selectedSize === item.selectedSize &&
            cartOwnItem.id === item.id
        ))

        if (itemExists) {
            cart.cartItems.forEach((cartOwnItem, index) => {
                if (cartOwnItem.id === item.id && cartOwnItem.selectedColor === item.selectedColor && cartOwnItem.selectedSize === item.selectedSize) {
                    const prd = {
                        ...item,
                        amount: cartOwnItem.amount + itemQuantity,
                    }
                    cart.cartItems.splice(index, 1, prd);
                    dispatch(addCart(prd))
                    dispatch(setCart(cart));
                }
            });

        } else {
            const prd = {
                ...item,
                amount: itemQuantity
            }
            cart.cartItems.push(prd)
            dispatch(addCart(prd));
            dispatch(setCart(cart));


        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartTotal();
    };
}

export const deleteCart = (id) => (
    {
        type: "REMOVE_CART",
        id
    }
)

export const deleteCartLocalStorage = (id) => {
    return (dispatch) => { 
        let cart = []
        cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.cartItems.forEach((cartItem,index) => {
            if (cartItem.cartId == id) {
                cart.cartItems.splice(index,1);
            }
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        dispatch(deleteCart(id));
    }
}


export const updateCart = (product, updates) => (
    {
        type: "UPDATE_CART",
        id: product.id,
        selectedColor: product.selectedColor,
        selectedSize: product.selectedSize,
        updates
    }
)

export const updateCartLocalStorage = (product, updates) => {
    return (dispatch) => {

    }
}

export const updateTotal = (sub_total, total) => ({
    type: "UPDATE_TOTAL",
    sub_total: sub_total,
    total: total
});

export const updateCartTotal = () => {
    return (dispatch) => {
        const localCart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {};
        const productsPrices = Object.values(localCart.cartItems).map((item) => { return (item.amount * item.price) });
        const subTotal = productsPrices.reduce((prevValue, currentValue) => prevValue + currentValue);
        const total = subTotal + 10

        localCart.total = {
            sub_total: subTotal,
            total: total
        };

        localStorage.setItem("cart", JSON.stringify(localCart));

        dispatch(updateTotal(subTotal, total))
    }
}