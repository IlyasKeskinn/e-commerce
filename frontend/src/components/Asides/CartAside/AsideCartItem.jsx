import { connect } from "react-redux"
import { deleteCartLocalStorage, updateCartTotal } from "../../../actions/cartAction"

const AsideCartItem = ({ product, dispatch }) => {
    const handleRemove = (e) => {
        dispatch(deleteCartLocalStorage(product.cartId));
        dispatch(updateCartTotal());
    }
    return (
        <div>
            <hr className="divider text-secondary"></hr>
            <div className="cart-drawer-item d-flex position-relative">
                <div className="position-relative cart-drawer-img-wrapper">
                    <img src={`${product.img.downloadURL}}`} alt="" className="cart-item-img"></img>
                </div>
                <div className="cart-drawer-info">
                    <h3 className="card-drawer-title fw-normal ">
                        {product.name} ( {product.amount} )
                    </h3>
                    <p className="cart-drawer-option text-secondary text-capitalize">
                        Color: {product.selectedColor}
                    </p>
                    <p className="cart-drawer-option text-uppercase text-secondary">
                        Size: {product.selectedSize}
                    </p>
                    <span>${product.price}</span>
                </div>
                <a href="#" className="remove-cart" onClick={(e) => { handleRemove(e) }} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path
                            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                </a>
            </div>
        </div >
    )
}

export default connect()(AsideCartItem)