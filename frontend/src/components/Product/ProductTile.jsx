import { connect } from "react-redux";
import { deleteCartLocalStorage, updateCartLocalStorage, updateCartTotal } from "../../actions/cartAction";
import { useState } from "react";

const ProductTile = ({ dispatch, product }) => {
    const handleRemove = (e) => {
        e.preventDefault();
        dispatch(deleteCartLocalStorage(product.cartId))
        dispatch(updateCartTotal());
    }
    const [quantity, setQuantity] = useState(product.amount);


    const cartItem = {
        cartId: product.cartId,
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.img,
        selectedColor: product.selectedColor,
        selectedSize: product.selectedSize,
    }
    console.log(cartItem);
    const incrementQunatity = () => {
        if (quantity < 100) {
            const newQuantity = quantity + 1;
            setQuantity(newQuantity);
            dispatch(updateCartLocalStorage(product.cartId, { ...cartItem, "amount": newQuantity }));
            dispatch(updateCartTotal());
        }

    }

    const decrementQuantity = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            dispatch(updateCartLocalStorage(product.cartId, { ...cartItem, "amount": newQuantity }));
            dispatch(updateCartTotal());

        }
    }
    return (
        <tr className="cart-table-row">
            <td>
                <div className="position-relative cart-drawer-img-wrapper">
                    <img src={`../src/images/${product.img}`} alt=""
                        className="cart-item-img img-fluid"></img>
                </div>
            </td>
            <td>
                <div className="cart-drawer-info">
                    <h3 className="card-drawer-title text-capitalize fw-normal ">{product.name}
                    </h3>
                    <p className="cart-drawer-option text-capitalize text-secondary">
                        Color: {product.selectedColor}
                    </p>
                    <p className="cart-drawer-option text-uppercase text-secondary">
                        Size:{product.selectedSize}
                    </p>
                </div>
            </td>
            <td> <span className="shopping-cart__product-price text-secondary">${product.price.toFixed(2)}</span>
            </td>
            <td>
                <div className="quantity-control position-relative">
                    <input type="number" name="quantity" className="quantity-control__number text-center" value={quantity} min="1" />
                    <a className="quantity-control__reduce" data-id="{cartItem.id}" cart-id="{cartItem.cartId}" onClick={() => decrementQuantity()}>-</a>
                    <a className="quantity-control__increment" data-id="{cartItem.id}" cart-id="{cartItem.cartId}" onClick={() => incrementQunatity()} >+</a>
                </div>
            </td>
            <td>
                <span className="shopping-cart__subtotal ">${(product.price * product.amount).toFixed(2)}</span>
            </td>
            <td>
                <a href="#" className="remove-cart" onClick={(e) => { handleRemove(e) }} >
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

export default connect()(ProductTile)