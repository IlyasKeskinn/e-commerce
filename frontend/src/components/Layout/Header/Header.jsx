import { Link } from "react-router-dom";
import useFetch from "../../../hooks/useFetch"
import { Loader } from "../../Loader/Loader";
import HeaderTools from "./HeaderTools";
import { MegaMenu } from "./MegaMenu";
import "./Header.css";

export const Header = ({ isAuthAsideActive, setAuthAsideActive, isCartAsideActive, setCartAsideActive, isAsideActice, setAsideActive }) => {
    const { data, isLoading, error } = useFetch("/category/getCategories");

    if (isLoading) {
        return <Loader />
    }
    else {
        return (
            <header id="header" className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <Link to={"/home"}>
                            <div className="logo">
                                <a href="index.html">
                                    <h1>Zephyra</h1>
                                </a>
                            </div></Link>
                        <nav className="navigation">
                            <ul>
                                <Link to={"/home"}>
                                    <li className="navigation-item">
                                        <a href="#" className="navigation-link btn btn-outlined-half">Home</a>
                                    </li>
                                </Link>
                                <li className="navigation-item mega-menu-wrapper">
                                    <div to={`/shop`} className="navigation-link btn btn-outlined-half">Shop</div>
                                    <div className="mega-menu default-menu-wrapper">
                                        <MegaMenu data={data} />
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
            </header>);
    }
}