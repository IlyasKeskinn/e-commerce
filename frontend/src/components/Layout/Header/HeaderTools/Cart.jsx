import React from 'react'
import { connect } from 'react-redux';
import { setCartAsideAction } from '../../../../actions/drawerAction';
const Cart = (props) => {
    return (
        <a href="#" className="header-tools__item header-tools__cart">
            <i className="bi bi-bag" onClick={() => { props.dispatch(setCartAsideAction(true)); }}>
                <span className="cart-amount">
                    {props.cart.cartItems.length ? props.cart.cartItems.length : 0}
                </span>
            </i>
        </a>
    )
}


const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        auth: state.auth,
        drawer: state.drawer
    }
}

export default connect(mapStateToProps)(Cart)

