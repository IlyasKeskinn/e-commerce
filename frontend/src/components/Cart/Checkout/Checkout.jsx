import React from 'react'
import { CheckoutForm } from './CheckoutForm'
import { CheckoutSteps } from '../CheckoutSteps/CheckoutSteps'

export const Checkout = () => {
    return (
        <section className="checkout-section d-flex justify-content-center align-items-center my-5">
            <div className="container cart-container">
                <h3 className="page-title text-uppercase">SHIPPING AND CHECKOUT</h3>
                <CheckoutSteps />
                <div className="checkout-cart__container ">
                    <form className="checkout-form">
                        <div className="checkout-cart__row">
                            <div className="billings-info__wrapper">
                                <h3 className="seciton-title text-uppercase">BILLING DETAILS </h3>
                                <CheckoutForm />
                            </div>
                            <div className="shopping-cart__totals-wrapper">
                                <div className="sticky-content">
                                    <div className="shopping-cart__totals">
                                        <h3 className="fw-normal text-uppercase">Your Order</h3>
                                        <table className="order-list-table">
                                            <thead>
                                                <th>Product</th>
                                                <th>Subtotal</th>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Zessi Dresses x 2</td>
                                                    <td>$32.50</td>
                                                </tr>
                                                <tr>
                                                    <td>Kirby T-Shirt</td>
                                                    <td>$29.90</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table>
                                            <tr>
                                                <th>Subtotal</th>
                                                <td>$1300</td>
                                            </tr>
                                            <tr>
                                                <th>Shipping</th>
                                                <td>
                                                    Free Shipping
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>VAT</th>
                                                <td>$19</td>
                                            </tr>
                                            <tr>
                                                <th>Subtotal</th>
                                                <td>$1300</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className="button__wrapper my-5 ">
                                        <button className="text-uppercase button btn-primary w-100">
                                            Place Order
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
