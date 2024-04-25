import { connect } from "react-redux";
import { Search } from "../../Search/Serach";
import { Link } from "react-router-dom";

const HeaderTools = (props) => {
    return (
        <div className="header-tools">
            <Search />
            {props.auth.user.user && props.auth.user.user.email ?
                <Link to={`/account/dashboard`}>
                    <i className="bi bi-person"></i>

                </Link>
                :
                <a href="#" className="header-tools__profile">
                    <i className="bi bi-person" onClick={() => { props.setAuthAsideActive(true); props.setAsideActive(true) }}></i>
                </a>}
            <a href="#" className="header-tools__item">
                <i className="bi bi-heart"></i>
            </a>
            <a href="#" className="header-tools__item header-tools__cart">
                <i className="bi bi-bag" onClick={() => { props.setCartAsideActive(true); props.setAsideActive(true) }}>
                    <span className="cart-amount">
                        {props.cart.cartItems.length ? props.cart.cartItems.length : 0}
                    </span>
                </i>
            </a>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        auth: state.auth
    }
}

export default connect(mapStateToProps)(HeaderTools)