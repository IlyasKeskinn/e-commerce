import { useEffect } from 'react';
import { ProductGallery } from './ProductGallery'
import { ReviewRate } from '../../Reviews/ReviewRate';
import { ReviewsStars } from '../../Reviews/ReviewsStars';
import AddingCartForm from './AddingCartForm'
import { ProductLinks } from './ProductLinks'
import { ProductMeta } from './ProductMeta'
import { ProductTabs } from './ProductTabs'
import useFetch from '../../../hooks/useFetch';
import { Link } from 'react-router-dom';


export const ProductDetailsItem = ({ productId }) => {
    const { data, isLoading, error } = useFetch(`/product/getproducts/${productId}`);
   
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    if (isLoading || !data.images) {
        return (<div></div>);
    }
    const discount = data.discount ? data.discount : 0;
    let newPrice = data.price.current;
    if (discount !== 0) {
        newPrice = data.price.current - (data.price.current * discount) / 100
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
                                    <Link to={`/`} className={`btn btn-outlined-half text-uppercase`}>Home</Link>
                                    <Link to={`/`} className={`btn btn-outlined-half text-uppercase`}>/{data.categories.name}</Link>
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
                            <div className="product-single__short-desc my-5">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora a veritatis iusto
                                    omnis aperiam. Fugit!
                                </p>
                            </div>
                            <AddingCartForm product={data} />
                            <ProductLinks />
                            <ProductMeta data={data.subcategories} />
                        </div>
                    </div>
                </div>
                <ProductTabs />
            </div>
        </section>
    )
}




