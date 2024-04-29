import { Skeleton } from 'antd';

export const ProductGallerySkeleton = () => {
    return (
        <div className="col-7 product-gallery__skeleton">
            <div className="skeleton-product-single__imgwrapper">
                <Skeleton.Image className="single-img" style={{ height: 674, width: 674 }} active={true} />
            </div>
            <div className="skeleton-product__thumb">
                <Skeleton.Image className='img-fluid gallery-thumbs__img' style={{ height: 104, width: 104 }} active={true} />
            </div>
        </div>
    )
}
