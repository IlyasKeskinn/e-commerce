import { Form } from "react-router-dom";
import "./Header.css";
import { HeaderTools } from "./HeaderTools";

export const Header = ({ isAuthAsideActive, setAuthAsideActive, isCartAsideActive, setCartAsideActive, isAsideActice, setAsideActive }) => {
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
                    {/* TODO: Refactor this section to make it cleaner and more readable */}
                    <HeaderTools isAuthAsideActive={isAuthAsideActive} setAuthAsideActive={setAuthAsideActive} isCartAsideActive={isCartAsideActive} setCartAsideActive={setCartAsideActive} isAsideActice={isAsideActice} setAsideActive={setAsideActive} />
                </div>
            </div>
        </header>
    );
}