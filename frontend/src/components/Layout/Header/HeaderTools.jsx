import { connect } from "react-redux";
import Search from "../../Search/Search";
import { setSearchModalAction } from "../../../actions/drawerAction";
import Cart from "./HeaderTools/Cart";
import LoginIcon from "./HeaderTools/LoginIcon";
const HeaderTools = (props) => {
    const handleSearchClick = (e) => {
        e.preventDefault();
        const isSearchModalActive = !props.drawer.isSearchModalActive;
        props.dispatch(setSearchModalAction(isSearchModalActive));
    }
    return (
        <div className="header-tools">
            <Search />
            <a href="" onClick={(e) => { handleSearchClick(e) }}>
                <i className={`bi bi-${props.drawer.isSearchModalActive ? "x-lg" : "search"}`}></i>
            </a>
            <LoginIcon />
            <a href="#" className="header-tools__item">
                <i className="bi bi-heart"></i>
            </a>
            <Cart />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        auth: state.auth,
        drawer: state.drawer
    }
}

export default connect(mapStateToProps)(HeaderTools)

