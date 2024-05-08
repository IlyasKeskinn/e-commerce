import React from 'react'
import "./MobileHeader.css"
import { MobileHeader_footer } from './MobileHeader_footer';
import MobileNavigation from './MobileNavigation';
import Cart from './HeaderTools/Cart';
import useFetch from '../../../hooks/useFetch';
import { Loader } from '../../Loader/Loader';
import { connect } from 'react-redux';
import { setMobileMenu } from '../../../actions/drawerAction';
import { Link } from 'react-router-dom';
import { Logo } from './HeaderTools/Logo';
import LoginIcon from './HeaderTools/LoginIcon';
import Search from '../../Search/Search';
import SearchIcon from './HeaderTools/SearchIcon';
const MobileHeader = ({ dispatch, drawer }) => {

    const { data, isLoading, error } = useFetch("/category/getCategories");

    if (isLoading) {
        return <Loader />
    }
    const toggleMenu = (e) => {
        e.preventDefault();
        dispatch(setMobileMenu((!drawer.isOpenMobileMenu)));
    };

    if (drawer.isOpenMobileMenu) {
        document.body.classList.add('mobile-menu-opened');
    } else {
        document.body.classList.remove('mobile-menu-opened');
    }

    return (
        <header className="header-mobile header_sticky position-relative  d-flex justify-content-center align-items-center">
            <div className="header-container container position-relative d-flex align-items-center justify-content-between">
                <div className='d-flex'>
                    <a href="" onClick={(e) => { toggleMenu(e) }} className="header-tools__item d-block mobile-menu__activator">
                        <i className="bi bi-list"></i>
                    </a>
                    <div onClick={() => { dispatch(setMobileMenu(false)) }} className='ms-5'>
                        <SearchIcon />
                    </div>
                </div>

                <Link onClick={() => { dispatch(setMobileMenu(false)) }} to={"/"}>
                    <Logo />
                </Link>
                <div className='d-flex'>
                    <Cart />
                    <div onClick={() => { dispatch(setMobileMenu(false)) }} className='ms-5'>
                        <LoginIcon />
                    </div>
                </div>
            </div>
            <Search />
            <nav
                className="header-mobile__navigation navigation d-flex flex-column justify-content-start align-items-center w-100 overflow-auto">
                <div className="my-4">
                    <MobileNavigation data={data} />
                </div>
                <MobileHeader_footer />
            </nav>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        auth: state.auth,
        drawer: state.drawer
    }
}

export default connect(mapStateToProps)(MobileHeader)





// <li className="navigation-item">
// <a href="#"
//     className="navigation-link js-nav-right d-flex align-items-center justify-content-between">Shop
//     <i className="bi bi-chevron-right me-5"></i>
// </a>

// </li>
