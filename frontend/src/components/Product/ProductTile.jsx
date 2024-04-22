export const ProductTile = () => {
    return (
        <tr data-id="{cartItem.id}" cart-id="{cartItem.cartId}" className="cart-table-row">
            <td>
                <div className="position-relative cart-drawer-img-wrapper">
                    <img src="./img/product/product_1-1.jpg" alt=""
                        className="cart-item-img img-fluid"></img>
                </div>
            </td>
            <td>
                <div className="cart-drawer-info">
                    <h3 className="card-drawer-title text-capitalize fw-normal ">product_name
                    </h3>
                    <p className="cart-drawer-option text-capitalize text-secondary">
                        Color:
                    </p>
                    <p className="cart-drawer-option text-uppercase text-secondary">
                        Size:
                    </p>
                </div>
            </td>
            <td> <span className="shopping-cart__product-price text-secondary">$cartItem price</span>
            </td>
            <td>
                <div className="quantity-control position-relative">
                    <input type="number" name="quantity"
                        className="quantity-control__number text-center" value="{cartItem.amount}" min="1" />
                    <a className="quantity-control__reduce" data-id="{cartItem.id}" cart-id="{cartItem.cartId}">-</a>
                    <a className="quantity-control__increment" data-id="{cartItem.id}" cart-id="{cartItem.cartId}">+</a>
                </div>
            </td>
            <td>
                <span className="shopping-cart__subtotal ">$totla</span>
            </td>
            <td>
                <a href="#" className="remove-cart" data-id="{cartItem.id}" cart-id="{cartItem.cartId}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path
                            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                </a>
            </td>
        </tr>
    );
}