import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { clearCartLocalStorage } from '../../../actions/cartAction'
import { Link } from 'react-router-dom';

const OrderComplete = ({ dispatch, cart }) => {
    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : [];
    if (!user.user) return window.location.href = "/cart"

    const [pageLoaded, setPageLoaded] = useState(false);
    const [data, setDataa] = useState(cart)
    useEffect(() => {

        if (!pageLoaded) {
            dispatch(clearCartLocalStorage());
            setPageLoaded(true);
        }
    }, [pageLoaded, clearCartLocalStorage]);
    return (
        <section className="shop-complete-section d-flex justify-content-center align-items-center my-5">
            <div className="container cart-container">
                <div className="shop-complete__container ">
                    <div className="shop-complete__wrapper">
                        <div className="order-complete__msg d-flex justify-content-center align-items-center flex-column">
                            <div className="order-complete__svg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                    className="bi bi-check-lg" viewBox="0 0 16 16">
                                    <path
                                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                                </svg>
                            </div>
                            <p className="fw-normal text-capitalize">Your order is completed!</p>
                            <span className="text-capitalize text-secondary">Thank you. Your order has been received.</span>
                        </div>
                        <div className="order-complete__info">
                            <div className="order-complete__info-item">
                                <label className="text-secondary">
                                    Order Number
                                </label>
                                <span>
                                    13119
                                </span>
                            </div>
                            <div className="order-complete__info-item">
                                <label className="text-secondary">
                                    Date
                                </label>
                                <span>
                                    {new Date().getFullYear()}
                                </span>
                            </div>
                            <div className="order-complete__info-item">
                                <label className="text-secondary">
                                    Total
                                </label>
                                <span>
                                    {data.total.total}
                                </span>
                            </div>
                            <div className="order-complete__info-item">
                                <label className="text-secondary">
                                    Paymetn Method
                                </label>
                                <span>
                                    Credit Card
                                </span>
                            </div>
                        </div>
                        <div className="shop__totals-wrapper">
                            <div>
                                <div className="shopping-cart__totals">
                                    <h3 className="fw-normal text-uppercase">Order Details</h3>
                                    <table className="order-list-table">
                                        <thead>
                                            <th>Product</th>
                                            <th>Subtotal</th>
                                        </thead>
                                        <tbody>
                                            {data.cartItems.map((item) => {
                                                return (
                                                    <tr key={item.id}>
                                                        <td>{item.name} * {item.amount}</td>
                                                        <td>${Number(item.price * item.amount).toFixed(2)}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                    <table>
                                        <tr>
                                            <th>Subtotal</th>
                                            <td>$
                                                {data.total.sub_total}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Shipping</th>
                                            <td>
                                                Free Shipping
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>VAT</th>
                                            <td>$0</td>
                                        </tr>
                                        <tr>
                                            <th>Subtotal</th>
                                            <td>$
                                                {data.total.sub_total}
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <Link to={"/"} className="btn-primary button text-uppercase">Go Home...</Link>
                    </div>
                </div>

            </div>
        </section>
    )
}


const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(OrderComplete);