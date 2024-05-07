import React, { useEffect, useState } from 'react'
import { CheckoutSteps } from '../components/Cart/CheckoutSteps/CheckoutSteps'
import { Outlet, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
const PaymentLayouts = ({ cart }) => {
    const location = useLocation();
    const parts = location.pathname.split('/');
    const name = parts[parts.length - 1];


    return (
        <React.Fragment>
            <section className="shopping-cart-section d-flex justify-content-center align-items-center my-5">
                <div className="container cart-container">
                    <h3 className="page-title text-uppercase">{name}</h3>
                    <CheckoutSteps name={name} />
                    {name !=="confirmation"  && cart.cartItems.length <= 0
                        ?
                        <div className="p-5 m-5 h" style={{ height: 500 }}>
                            <p className="lead text-uppercase text-secondary text-capitalize fw-normal">There are no items in your cart, go ahead and add items to your cart!</p>
                        </div>
                        :
                        <Outlet />
                    }
                </div>
            </section>
        </React.Fragment>
    )
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(PaymentLayouts);
