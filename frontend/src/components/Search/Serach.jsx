export const Search = ()=> {
    return(
        <div className="header-tools__item js-content-visible">
        <a href="#">
            <i className="bi bi-search"></i>
        </a>
        <div className="search-popup js-hidden-content">
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
    );
}