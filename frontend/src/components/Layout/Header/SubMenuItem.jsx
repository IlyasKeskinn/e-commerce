import React from 'react'

export const SubMenuItem = ({menuItem}) => {
    return (
        <li className="sub-menu__item">
            <a href="#" className="menu-link btn btn-outlined-half">{menuItem.name}</a>
        </li>
    )
}
