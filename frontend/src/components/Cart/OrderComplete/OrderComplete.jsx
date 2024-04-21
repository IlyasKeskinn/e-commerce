import React from 'react'
import { CheckoutSteps } from '../CheckoutSteps/CheckoutSteps'

export const OrderComplete = () => {
    return (
        <section className="shop-complete-section d-flex justify-content-center align-items-center my-5">
            <div className="container cart-container">
                <h3 className="page-title text-uppercase">ORDER RECEIVED</h3>
                <CheckoutSteps/>
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
                                    27/10/2023
                                </span>
                            </div>
                            <div className="order-complete__info-item">
                                <label className="text-secondary">
                                    Total
                                </label>
                                <span>
                                    $81.40
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

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
