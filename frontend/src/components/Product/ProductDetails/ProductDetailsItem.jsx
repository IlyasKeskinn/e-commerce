import { useEffect } from 'react';
import {ProductGallery} from './ProductGallery'
import { ReviewRate } from '../../Reviews/ReviewRate';
import { ReviewsStars } from '../../Reviews/ReviewsStars';
import  AddingCartForm  from './AddingCartForm'
import { ProductLinks } from './ProductLinks'
import { ProductMeta } from './ProductMeta'
import {ProductTabs} from './ProductTabs'
import { connect } from 'react-redux';


const ProductDetailsItem = ({product}) => {
    //TODO Loading Component
    if (!product) {
        return <div>Loading...</div>;
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <section className="product-single d-flex flex-wrap justify-content-center align-items-center">
            <div className="container product-single-wrapper">
                <div className="product-row d-flex justify-content-between ">
                    <ProductGallery />
                    <div className="col-5 ">
                        <div className="product-info__wrapper">
                            <div className="d-flex justify-content-between align-items-center my-5">
                                <div className="breadcrumb">
                                    <a href="#" className="btn btn-outlined-half text-uppercase">Home</a>
                                    <span className="fw-normal">/</span>
                                    <a href="#" className="btn btn-outlined-half text-uppercase">{product.category}</a>
                                </div>
                            </div>
                            <h1 className="product-single__name text-uppercase fw-normal mt-5">
                                {product.product_name}
                            </h1>
                            <div className="product-card__review d-flex align-items-center ">
                                <ReviewsStars />
                                <ReviewRate />
                            </div>
                            <div className="product-single__price my-5">
                                <span className="current_price">${product.price}</span>
                            </div>
                            <div className="product-single__short-desc my-5">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora a veritatis iusto
                                    omnis aperiam. Fugit!
                                </p>
                            </div>
                            <AddingCartForm product={product} />
                            <ProductLinks />
                            <ProductMeta />
                        </div>
                    </div>
                </div>
                <ProductTabs />
            </div>
        </section>
    )
}




export default connect()(ProductDetailsItem)