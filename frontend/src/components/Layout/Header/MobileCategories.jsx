import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setMobileSubMenu } from '../../../actions/drawerAction';

export const MobileCategories = ({ category, dispatch, drawer , handleSubcategory}) => {
    const toggleMenu = (e) => {
        e.preventDefault();
        handleSubcategory(e.target.id);
        dispatch(setMobileSubMenu((!drawer.isOpenMobileSubMenu)));
    };
    return (
        <li key={category._id} className="navigation-item">
            <span style={{ cursor: "pointer" }} id={`${category._id}`} onClick={toggleMenu} className="navigation-link js-nav-right d-flex align-items-center justify-content-between" >
                {category.name}
                <i className="bi bi-chevron-right me-5"></i>
            </span>
        </li>
    )
}

const mapStateToProps = (state) => {
    return {
        drawer: state.drawer
    }
}

export default connect(mapStateToProps)(MobileCategories)

