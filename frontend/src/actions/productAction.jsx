export const setProducts = (products) => (
    {
        type: "SET_PRODUCTS",
        products
    }
)

export const getProductsFromData = () => {
    return async (dispatch) => {
        const response = await fetch("../../data/products.json");
        const products = await response.json();
        dispatch(setProducts(products))
    };
}