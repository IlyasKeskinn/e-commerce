import { Form } from "react-router-dom";
import "./Header.css";

export const Header = () => {
    return (
        <header id="header" className="header">
            <div className="container">
                <div className="header-wrapper">
                    <div className="logo">
                        <a href="index.html">
                            <h1>Zephyra</h1>
                        </a>
                    </div>
                    <nav className="navigation">
                        <ul>
                            <li className="navigation-item">
                                <a href="#" className="navigation-link btn btn-outlined-half">Home</a>
                            </li>
                            <li className="navigation-item mega-menu-wrapper">
                                <a href="#" className="navigation-link btn btn-outlined-half">Shop</a>
                                <div className="mega-menu default-menu-wrapper">
                                    <div className="container mega-menu-items">
                                        <div className="col">
                                            <ul className="default-menu-content">
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">
                                                        <h4 className="mega-menu-title">Women</h4>
                                                    </a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">My Account</a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">Login / Register</a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">Store Locator</a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">Lookbook</a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">Faq</a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">Term</a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">404 Errors</a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">Comming Soon</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                            <ul className="default-menu-content">
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">
                                                        <h4 className="mega-menu-title">Men</h4>
                                                    </a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">My Account</a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">Login / Register</a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">Store Locator</a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">Lookbook</a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">Faq</a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">Term</a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">404 Errors</a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">Comming Soon</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                            <ul className="default-menu-content">
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">
                                                        <h4 className="mega-menu-title">Kids</h4>
                                                    </a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">My Account</a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">Login / Register</a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">Store Locator</a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">Lookbook</a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">Faq</a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">Term</a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">404 Errors</a>
                                                </li>
                                                <li className="sub-menu__item">
                                                    <a href="#" className="menu-link btn btn-outlined-half">Comming Soon</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                            <div className="position-relative">
                                                <img src="./img/mega-menu-item.jpg" alt="shopnowImg" className="mega-menu__img"></img>
                                                <div className="mega-menu__mediacontent">
                                                    <h3>New</h3>
                                                    <h3>Horizons</h3>
                                                    <a href="#" className="btn btn-outlined"> Shop Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="navigation-item">
                                <a href="#" className="navigation-link btn btn-outlined-half">Pages</a>
                                <div className="default-menu-wrapper">
                                    <ul className="default-menu-content">
                                        <li className="sub-menu__item">
                                            <a href="#" className="menu-link btn btn-outlined-half">My Account</a>
                                        </li>
                                        <li className="sub-menu__item">
                                            <a href="#" className="menu-link btn btn-outlined-half">Login / Register</a>
                                        </li>
                                        <li className="sub-menu__item">
                                            <a href="#" className="menu-link btn btn-outlined-half">Store Locator</a>
                                        </li>
                                        <li className="sub-menu__item">
                                            <a href="#" className="menu-link btn btn-outlined-half">Lookbook</a>
                                        </li>
                                        <li className="sub-menu__item">
                                            <a href="#" className="menu-link btn btn-outlined-half">Faq</a>
                                        </li>
                                        <li className="sub-menu__item">
                                            <a href="#" className="menu-link btn btn-outlined-half">Term</a>
                                        </li>
                                        <li className="sub-menu__item">
                                            <a href="#" className="menu-link btn btn-outlined-half">404 Errors</a>
                                        </li>
                                        <li className="sub-menu__item">
                                            <a href="#" className="menu-link btn btn-outlined-half">Comming Soon</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="navigation-item">
                                <a href="#" className="navigation-link btn btn-outlined-half">About</a>
                            </li>
                            <li className="navigation-item">
                                <a href="#" className="navigation-link btn btn-outlined-half">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-tools">
                        <div className="header-tools__item js-content-visible">
                            <a href="#">
                                <i className="bi bi-search"></i>
                            </a>
                            <div className="search-popup js-hidden-content ">
                                <div className="container">
                                    <div className="popup-items">
                                        <form>
                                            <p className="text-uppercase text-secondary fw-normal">WHAT ARE YOU LOOKING FOR?
                                            </p>
                                            <div className="position-relative search-input">
                                                <input type="text" placeholder="Search product"
                                                    className="search-field__input search-popup__input" />
                                                    <i className="bi bi-search"></i> 
                                            </div>
                                            <div className="sub-menu">
                                                <a className="sub-menu__title text-secondary fw-normal text-uppercase">
                                                    Quicks Link
                                                </a>
                                                <ul>
                                                    <li className="sub-menu__item">
                                                        <a href="#"
                                                            className="menu-link btn btn-outlined-half text-capitalize ">Store
                                                            Locator</a>
                                                    </li>
                                                    <li className="sub-menu__item">
                                                        <a href="#"
                                                            className="menu-link btn btn-outlined-half text-capitalize ">Lookbook</a>
                                                    </li>
                                                    <li className="sub-menu__item">
                                                        <a href="#"
                                                            className="menu-link btn btn-outlined-half text-capitalize ">Faq</a>
                                                    </li>
                                                    <li className="sub-menu__item">
                                                        <a href="#"
                                                            className="menu-link btn btn-outlined-half text-capitalize ">Term</a>
                                                    </li>
                                                    <li className="sub-menu__item">
                                                        <a href="#"
                                                            className="menu-link btn btn-outlined-half text-capitalize ">404
                                                            Errors</a>
                                                    </li>
                                                    <li className="sub-menu__item">
                                                        <a href="#"
                                                            className="menu-link btn btn-outlined-half text-capitalize ">Comming
                                                            Soon</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#" className="header-tools__profile">
                            <i className="bi bi-person"></i>
                        </a>
                        <a href="#" className="header-tools__item">
                            <i className="bi bi-heart"></i>
                        </a>
                        <a href="#" className="header-tools__item header-tools__cart">
                            <i className="bi bi-bag">
                                <span className="cart-amount">0</span>
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}