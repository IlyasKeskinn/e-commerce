import React, { useEffect, useState } from 'react';
import { SubMenuItem } from './SubMenuItem';
import { Link } from 'react-router-dom';

export const MegaMenu = ({data}) => {
    return (<div className="container mega-menu-items">
        {data.map((category => {
            return (
                <div key={category._id} className="col">
                    <ul className="default-menu-content">
                        <li className="sub-menu__item">
                            <Link to={`/allproducts/${category.seo_link}`} className="menu-link btn btn-outlined-half">
                                <h4 className="mega-menu-title">{category.name}</h4>
                            </Link>
                        </li>
                        {category.subcategory.map((subCat) => { return (<SubMenuItem key={subCat._id}  menuItem={subCat} />); })}
                    </ul>
                </div>
            );
        }))}
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

