import React from 'react'
import ProductTile from '../../Product/ProductTile'
import { connect } from 'react-redux'
import { Reciept } from '../Reciept'
import { Link } from 'react-router-dom'

const Cart = ({ cart }) => {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];

    return (
        <div className="shopping-cart__container ">
            <div className="shopping-cart__row">
                <div className="cart-table__wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th style={{ width: 125 }}>Product</th>
                                <th></th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="cart-item-list">
                            {cart.cartItems.map((cartItem) => <ProductTile key={cartItem.cartId} product={cartItem} />)}
                        </tbody>
                    </table>
                </div>
                <div className="shopping-cart__totals-wrapper">
                    <div className="sticky-content">
                        <Reciept cart={cart} />
                        <div className="button__wrapper my-5 ">
                            <Link to={"/checkout"} className={`text-uppercase button btn-primary w-100 ${user && user.user && user.user._id ? "" : "disabled"}`}>
                                PROCEED TO CHECKOUT
                            </Link>
                        </div>
                        {user && user.user && user.user._id ? "" :
                            <Link to={"/login_register"} className="btn btn-full active">Login Account</Link>
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart);
