import React from 'react'
import { Skeleton } from "antd";
import { ProductsSkelton } from './ProductsSkeleton';
import { ShopContentSkeleton } from './ShopContentSkeleton';

export const AllProductsSkeleton = ({viewItem}) => {
    return (
        <React.Fragment>
            <section className="shop-banner d-flex justify-content-center align-items-center">
                <div className="container shop-banner-container h-md-100">
                    <div >
                        <div className="shop-banner-row  position-relative">
                            <div className="background-img" style={{ backgroundImage: `url(../img/shoplist/shop_banner_2.png)` }} ></div>
                            <div className="shop-banner-content container">
                                <h3 className="shop-banner-title text-center text-uppercase fw-500">
                                    <strong>Shop</strong>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ShopContentSkeleton viewItem={viewItem}/>
        </React.Fragment>
    )
}
