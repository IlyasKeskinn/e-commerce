import React from 'react'

export const AccountNav = () => {
    return (
        <ul className="account-nav">
            <li className="account-nav-item">
                <a href="#" className="btn btn-outlined-half ">
                    Dashboard
                </a>
            </li>
            <li className="account-nav-item">
                <a href="#" className="btn btn-outlined-half ">
                    Orders
                </a>
            </li>
            <li className="account-nav-item">
                <a href="#" className="btn btn-outlined-half ">
                    Addresses
                </a>
            </li>
            <li className="account-nav-item">
                <a href="#" className="btn btn-outlined-half active">
                    Account Details
                </a>
            </li>
            <li className="account-nav-item">
                <a href="#" className="btn btn-outlined-half">
                    Wishlist
                </a>
            </li>
            <li className="account-nav-item">
                <a href="#" className="btn btn-outlined-half">
                    Logout
                </a>
            </li>
        </ul>
    )
}
