export const setProducts = (products) => (
    {
        type: "SET_PRODUCTS",
        products
    }
)

export const getProductsFromData = () => {
    return (dispatch) => {
        fetch("../../data/products.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(products => {
                dispatch(setProducts(products));
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    };
}