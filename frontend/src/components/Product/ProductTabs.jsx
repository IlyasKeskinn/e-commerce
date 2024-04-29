import React from 'react'

export const ProductTabs = () => {
    return (
        <React.Fragment>
            <h2 className="text-uppercase section-title text-center fw-normal my-4">OUR TRENDY <strong>PRODUCTS</strong>
            </h2>
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
