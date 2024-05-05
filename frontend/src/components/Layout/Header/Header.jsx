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
                        <div className="logo">
                            <Link to={"/home"} href="index.html">
                                <h1>Zephyra</h1>
                            </Link>
                        </div>
                        <nav className="navigation">
                            <ul>
                                <li className="navigation-item">
                                    <Link to={"/home"} className="navigation-link btn btn-outlined-half">Home</Link>
                                </li>
                                <li className="navigation-item mega-menu-wrapper">
                                    <div className="navigation-link btn btn-outlined-half">Shop</div>
                                    <div className="mega-menu default-menu-wrapper">
                                        <MegaMenu data={data} />
                                    </div>
                                </li>
                                <li className="navigation-item">
                                    <Link to={"/about"} href="#" className="navigation-link btn btn-outlined-half">About</Link>
                                </li>
                                <li className="navigation-item">
                                    <Link to={`/contact`} className="navigation-link btn btn-outlined-half">Contact</Link>
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