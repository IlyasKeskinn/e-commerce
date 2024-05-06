import { connect } from "react-redux";
import AsideCartItem from "./AsideCartItem";
import { Link } from "react-router-dom";
import { setCartAsideAction } from "../../../actions/drawerAction";
import "./ShoppingCartAside.css"

const ShoppingCartAside = ({ cart, drawer, dispatch }) => {
    return (

        <aside className={`aside aside-right ${drawer.isCartAsideActive ? "aside-visible" : ""}`} id="shopingCartAside">
            <div className="shopping-cart__wraper position-relative d-flex justify-content-center">
                <div className="shopping-cart w-95">
                    <div className="aside-header  d-flex align-items-center justify-content-between">
                        <h3 className="aside-title text-uppercase fw-normal">
                            SHOPPING BAG <span className="shoping-cart-amount">( {cart.cartItems.length} )</span>
                        </h3>
                        <button className="aside-header-button">
                            <i className="bi bi-x" onClick={() => { dispatch(setCartAsideAction(false)) }}></i>
                        </button>
                    </div>
                    {cart.cartItems.length <= 0
                        ?
                        <div className="p-5 m-5">
                            <p className="lead text-uppercase text-secondary text-capitalize fw-normal">There are no items in your cart, go ahead and add items to your cart!</p>
                        </div>
                        :
                        <div className="aside-content">
                            <div className="cart-drawer-item-list">
                                {Array.from(cart.cartItems).map((product) => { return <AsideCartItem key={product.cartId} product={product} /> })}
                            </div>

                            <div className="cart-drawer-actions">
                                <div className="cart-total d-flex justify-content-between align-items-center">
                                    <p className="fw-normal text-uppercase">Subtotal: </p>
                                    <p className="sub-total-number">${(cart.total.sub_total).toFixed(2)}</p>
                                </div>
                                <div className="buttonwrapper">
                                    <Link to={`/cart`} className="button btn-secondary w-100" onClick={() => { dispatch(setCartAsideAction(false)) }}>View Cart</Link>
                                    <Link to={`/checkout`} className="button btn-primary w-100" onClick={() => { dispatch(setCartAsideAction(false)) }} >Checkout</Link>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </aside>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        drawer: state.drawer
    }
}

export default connect(mapStateToProps)(ShoppingCartAside);