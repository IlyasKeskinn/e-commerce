import React from 'react'
import { Skeleton } from "antd";
import { ProductsSkelton } from './ProductsSkeleton';

export const ShopContentSkeleton = () => {
    return (
        <section className="shop-main d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="shop-settings d-flex justify-content-between align-items-center my-3">
                    <div className="breadcrumb">
                        <Skeleton.Input active={true} size={'small'} />
                        <span className="fw-normal">/</span>
                        <Skeleton.Input active={true} size={'small'} />
                    </div>
                    <div className="shop-asc d-flex justify-content-center align-items-center">
                        <select name="shopasc" id="shopAscSelect" className="shop-asc__select fw-normal text-uppercase">
                            <option value="0">Default Sorting</option>
                            <option value="1">Featured</option>
                            <option value="2">Best Selling</option>
                            <option value="3">Alphabetically, A-Z</option>
                            <option value="4">Alphabetically, Z-A</option>
                            <option value="5">Price, low to high</option>
                            <option value="6">Price, high to low</option>
                            <option value="7">Date, old to new</option>
                            <option value="8">Date, new to old</option>
                        </select>
                        <div className="shop-asc__seperator mx-3"></div>
                        <div className="shop-asc__viewsettings">
                            <span className="fw-600 text-uppercase">View</span>
                            <button className="btn btn-outlined-half fw-normal text-uppercase">2</button>
                            <button className="btn btn-outlined-half fw-normal text-uppercase">3</button>
                            <button className="btn btn-outlined-half fw-normal text-uppercase">4</button>
                        </div>
                        <div className="shop-asc__seperator mx-3"></div>
                        <div className="shop-asc__filter">
                            <button className="btn btn-outlined-half js-open-aside d-flex align-items-center ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-filter" viewBox="0 0 16 16">
                                    <path
                                        d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                                </svg>
                                <span className="fw-normal text-uppercase ms-2 ">Filter</span>
                            </button>
                        </div>
                    </div>
                </div>
                <ProductsSkelton />
                <div className="pagination d-flex justify-content-center align-items-center">
                    <div className="container d-flex flex-column justify-content-center align-items-center">
                        <div style={{ width: "320px", marginTop: "50px" }}>
                            <Skeleton.Input block={true} active={true} size={'small'} />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
