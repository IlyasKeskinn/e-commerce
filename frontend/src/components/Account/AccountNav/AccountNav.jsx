import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from "react-redux"
import { deleteAuthUser } from '../../../actions/authAction'

const AccountNav = ({dispatch}) => {
    const handleLogout = () =>  {
        dispatch(deleteAuthUser());
    }
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
                <NavLink onClick={handleLogout} to="/" className={({ isActive }) => isActive ? "btn btn-outlined-half active" : "btn btn-outlined-half"} >Logout</NavLink>
            </div>

        </nav>
    )
}

export default connect()(AccountNav);