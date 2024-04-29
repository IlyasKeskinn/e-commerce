import React from 'react'
import { Skeleton, Space } from 'antd';
import { ProductGallerySkeleton } from './ProductGallerySkeleton'
import "./ProductDetailSkeleton.css";
export const ProductDetailSkeleton = (props) => {
    return (
        <section className="product-single d-flex flex-wrap justify-content-center align-items-center">
            <div className="container product-single-wrapper">
                <div className="product-row d-flex justify-content-between ">
                    <ProductGallerySkeleton />
                    <div className="col-5 ">
                        <div>
                            <Skeleton className="mt-5 py-5 product-single__name" active={true} />
                            <Skeleton className='my-5' active={true} />
                            <Skeleton className='my-5' active={true} />
                            <Skeleton.Button block={true} active={true} size={'large'} />
                        </div>
                    </div>
                </div>
                <Skeleton className='my-5' active={true} />
            </div>
        </section>
    )
}
