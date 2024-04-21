import { CheckoutSteps } from "../../components/Cart/CheckoutSteps/CheckoutSteps";
import { ProductTile } from "../../components/Product/ProductTile";
import "./ShopingCart.css"

export const ShopingCart = () => {
    return (
        <section className="shopping-cart-section d-flex justify-content-center align-items-center my-5">
            <div className="container cart-container">
                <h3 className="page-title text-uppercase">Cart</h3>
                <CheckoutSteps />
                <div className="shopping-cart__container ">
                    <div className="shopping-cart__row">
                        <div className="cart-table__wrapper">
                            <table>
                                <thead>
                                    <th style={{ width: 125 }}>Product</th>
                                    <th></th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                    <th></th>
                                </thead>
                                <tbody className="cart-item-list">
                                    <ProductTile />
                                </tbody>
                            </table>
                            <div className="checkout-buttons d-flex my-5 justify-content-between align-items-center">
                                <div className="cupon-apply_inputbutton d-flex justify-content-between align-items-center">
                                    <div className="group">
                                        <input placeholder="Cupon Code" type="text" id="cuponCodeText" name="cuponCodeText"
                                            value="" />
                                        <label htmlFor="cuponCodeText" className="custom-label">Cupon Code *</label>
                                    </div>
                                    <div className="button__wrapper ">
                                        <button style={{ paddingRight: 30, paddingLeft: 30 }}
                                            className="text-uppercase button btn-primary  ">Apply Cupon</button>
                                    </div>
                                </div>
                                <div className="button__wrapper">
                                    <button style={{ paddingRight: 30, paddingLeft: 30 }}
                                        className="text-uppercase button btn-secondary  ">Update Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="shopping-cart__totals-wrapper">
                            <div className="sticky-content">
                                <div className="shopping-cart__totals">
                                    <h3 className="fw-normal text-uppercase">Cart Totals</h3>
                                    <table>
                                        <tr>
                                            <th>Subtotal</th>
                                            <td className="sub-total-number">$0</td>
                                        </tr>
                                        <tr>
                                            <th>Shipping</th>
                                            <td>
                                                <div
                                                    className="input-check-box d-flex justify-content-start align-items-center">
                                                    <div className="group dummy-box">
                                                        <label className="custom-label-checkbox" htmlFor="freeShipping">
                                                            <input type="checkbox" id="freeShipping" />
                                                            <span></span>
                                                        </label>
                                                    </div>
                                                    <span className="checkbox-label-text">Free shipping
                                                    </span>
                                                </div>
                                                <div
                                                    className="input-check-box d-flex justify-content-start align-items-center">
                                                    <div className="group dummy-box">
                                                        <label className="custom-label-checkbox" htmlFor="flatrate">
                                                            <input type="checkbox" id="flatrate" />
                                                            <span></span>
                                                        </label>
                                                    </div>
                                                    <span className="checkbox-label-text">Flat rate: $49
                                                    </span>
                                                </div>
                                                <div
                                                    className="input-check-box d-flex justify-content-start align-items-center">
                                                    <div className="group dummy-box">
                                                        <label className="custom-label-checkbox" htmlFor="localPickup">
                                                            <input type="checkbox" id="localPickup" />
                                                            <span></span>
                                                        </label>
                                                    </div>
                                                    <span className="checkbox-label-text">Local pickup: $8
                                                    </span>
                                                </div>
                                                <div>Shipping to AL.</div>
                                                <div>
                                                    <a href="#" className="btn btn-outlined-half change-address">
                                                        Change Address
                                                    </a>
                                                </div>

                                            </td>
                                        </tr>
                                        <tr>
                                            <th>VAT</th>
                                            <td>$19</td>
                                        </tr>
                                        <tr>
                                            <th>Subtotal</th>
                                            <td className="sub-total-number">$0</td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="button__wrapper my-5 ">
                                    <button className="text-uppercase button btn-primary w-100">
                                        PROCEED TO CHECKOUT
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}