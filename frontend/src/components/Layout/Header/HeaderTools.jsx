import { connect } from "react-redux";
import Search from "../../Search/Search";
import { setSearchModalAction } from "../../../actions/drawerAction";
import Cart from "./HeaderTools/Cart";
import LoginIcon from "./HeaderTools/LoginIcon";
import SearchIcon from "./HeaderTools/SearchIcon";
const HeaderTools = (props) => {
    return (
        <div className="header-tools">
            <Search />
            <SearchIcon/>
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

