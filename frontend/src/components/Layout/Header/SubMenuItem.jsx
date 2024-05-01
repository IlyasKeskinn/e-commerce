import React from 'react'
import { Link } from 'react-router-dom';

export const SubMenuItem = ({menuItem}) => {
    return (
        <li className="sub-menu__item">
            <Link to={`/shop/${menuItem.seo_link}`}  className="menu-link btn btn-outlined-half">{menuItem.name}</Link>
        </li>
    )
}
