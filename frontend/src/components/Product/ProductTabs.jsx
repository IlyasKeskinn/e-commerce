import React from 'react'

export const ProductTabs = () => {
    return (
        <React.Fragment>
            <ul className="nav nav-tab text-uppercase mb-5 d-flex align-items-center justify-content-center">
                <li className="nav-item">
                    <a id="collections-tab-1-trigger" className="nav-link nav-link-underscore active">All</a>
                </li>
                <li className="nav-item ">
                    <a id="collections-tab-2-trigger" className="nav-link nav-link-underscore ">New Arrivals</a>
                </li>
                <li className="nav-item">
                    <a id="collections-tab-3-trigger" className="nav-link nav-link-underscore ">Best Seller</a>
                </li>
                <li className="nav-item">
                    <a id="collections-tab-4-trigger" className="nav-link nav-link-underscore ">Top Rated</a>
                </li>
            </ul>
        </React.Fragment>

    )
}
