import React from 'react'

export const MegaMenu = (categories) => {
    return (
        <div className="container mega-menu-items">
            <div className="col">
                {/* TODO : REFACTOR BACKEND - MAIN MENU & SUB MENU */}
                <ul className="default-menu-content">
                    <li className="sub-menu__item">
                        <a href="#" className="menu-link btn btn-outlined-half">
                            <h4 className="mega-menu-title">Women</h4>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col">
                {/* TODO : REFACTOR BACKEND - MAIN MENU & SUB MENU */}
                <ul className="default-menu-content">
                    <li className="sub-menu__item">
                        <a href="#" className="menu-link btn btn-outlined-half">
                            <h4 className="mega-menu-title">Men</h4>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col">
                {/* TODO : REFACTOR BACKEND - MAIN MENU & SUB MENU */}
                <ul className="default-menu-content">
                    <li className="sub-menu__item">
                        <a href="#" className="menu-link btn btn-outlined-half">
                            <h4 className="mega-menu-title">Kids</h4>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col">
                {/* TODO : REFACTOR BACKEND - MAIN MENU & SUB MENU */}
                <ul className="default-menu-content">
                    <li className="sub-menu__item">
                        <a href="#" className="menu-link btn btn-outlined-half">
                            <h4 className="mega-menu-title">Girl</h4>
                        </a>
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
    )
}
