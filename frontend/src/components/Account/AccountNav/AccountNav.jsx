import React from 'react'
import { NavLink } from 'react-router-dom'

export const AccountNav = () => {
    return (
        <nav className="account-nav">
            <div className='account-nav-item'>
                <NavLink to="dashboard" className={({ isActive }) => isActive ? "btn btn-outlined-half active" : "btn btn-outlined-half"} >Dashboard</NavLink>
            </div>
            <div className='account-nav-item'>
                <NavLink to="orders" className={({ isActive }) => isActive ? "btn btn-outlined-half active" : "btn btn-outlined-half"} >Orders</NavLink>
            </div>
            <div className='account-nav-item'>
                <NavLink to="address" className={({ isActive }) => isActive ? "btn btn-outlined-half active" : "btn btn-outlined-half"} >Addresses</NavLink>
            </div>
            <div className='account-nav-item'>
                <NavLink to="details" className={({ isActive }) => isActive ? "btn btn-outlined-half active" : "btn btn-outlined-half"} >Account Details</NavLink>
            </div>
            <div className='account-nav-item'>
                <NavLink to="wishlist" className={({ isActive }) => isActive ? "btn btn-outlined-half active" : "btn btn-outlined-half"} >Wishlist</NavLink>
            </div>
            <div className='account-nav-item'>
                <NavLink to="logout" className={({ isActive }) => isActive ? "btn btn-outlined-half active" : "btn btn-outlined-half"} >Logout</NavLink>
            </div>

        </nav>
    )
}


// <NavLink className="account-nav-item">
// <span className='btn btn-outlined-half'>
//     Dashboard
// </span>
// </NavLink>
// <li className="account-nav-item">
// <NavLink className={({ isActive, isPending }) =>
//     isPending ? "pending" : isActive ? "btn btn-outlined-half active" : ""
// } >Orders</NavLink>
// </li>
// <li className="account-nav-item">
// <a href="#" className="btn btn-outlined-half ">
//     Addresses
// </a>
// </li>
// <li className="account-nav-item">
// <a href="#" className="btn btn-outlined-half active">
//     Account Details
// </a>
// </li>
// <li className="account-nav-item">
// <a href="#" className="btn btn-outlined-half">
//     Wishlist
// </a>
// </li>
// <li className="account-nav-item">
// <a href="#" className="btn btn-outlined-half">
//     Logout
// </a>
// </li>