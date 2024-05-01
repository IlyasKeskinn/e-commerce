import { useEffect, useState } from 'react';
import { ProductGallery } from './ProductGallery'
import { ReviewRate } from '../../Reviews/ReviewRate';
import { ReviewsStars } from '../../Reviews/ReviewsStars';
import AddingCartForm from './AddingCartForm'
import { ProductLinks } from './ProductLinks'
import { ProductMeta } from './ProductMeta'
import { ProductTabs } from './ProductTabs'
import useFetch from '../../../hooks/useFetch';
import { Link } from 'react-router-dom';
import { ProductDetailSkeleton } from '../../Skeltons/ProductDetailSkeleton/ProductDetailSkeleton';


export const ProductDetailsItem = ({ seo_link }) => {
    const { data, isLoading, error } = useFetch(`/product/getProductBySeo/${seo_link}`);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const [newPrice, setNewPrice] = useState(10);

    useEffect(() => {
        if (!isLoading && data.price) {
            const discount = data.discount ? data.discount : 0;
            let price = data.price.current;
            if (discount !== 0) {
                price = price - (price * discount) / 100;
            }
            setNewPrice(price);
        }
    }, [data, isLoading]);

    console.log(data);
    
    if (isLoading || !data || !data.images) {
        return <ProductDetailSkeleton />
    }
    return (
        <section className="product-single d-flex flex-wrap justify-content-center align-items-center">
            <div className="container product-single-wrapper">
                <div className="product-row d-flex justify-content-between ">
                    <ProductGallery images={data.images} />
                    <div className="col-5 ">
                        <div className="product-info__wrapper">
                            <div className="d-flex justify-content-between align-items-center my-5">
                                <div className="breadcrumb">
                                    <Link to={`/`} className={`btn btn-outlined-half text-uppercase`}>Home /</Link>
                                    <Link to={`/`} className={`btn btn-outlined-half text-uppercase`}> {data.categories.name}</Link>
                                </div>
                            </div>
                            <h1 className="product-single__name text-uppercase fw-normal mt-5">
                                {data.title}
                            </h1>
                            <div className="product-card__review d-flex align-items-center ">
                                <ReviewsStars />
                                <ReviewRate />
                            </div>
                            <div className="product-single__price my-5">
                                <span className="current_price">${newPrice.toFixed(2)}</span>
                            </div>
                            <div className="product-single__short-desc  my-5">
                                <p>
                                {data.shortDesc}
                                </p>
                            </div>
                            <AddingCartForm product={data} newPrice={newPrice} />
                            <ProductLinks />
                            <ProductMeta data={data.subcategory} />
                        </div>
                    </div>
                </div>
                <ProductTabs desc={data.desc} />
            </div>
        </section>
    )
}




