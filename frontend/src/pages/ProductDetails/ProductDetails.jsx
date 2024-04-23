import { AddingCartForm } from '../../components/Product/ProductDetails/AddingCartForm'
import { ProductGallery } from '../../components/Product/ProductDetails/ProductGallery'
import { ProductLinks } from '../../components/Product/ProductDetails/ProductLinks'
import { ProductMeta } from '../../components/Product/ProductDetails/ProductMeta'
import { ProductTabs } from '../../components/Product/ProductDetails/ProductTabs'
import { ReviewRate } from '../../components/Reviews/ReviewRate'
import { ReviewsStars } from '../../components/Reviews/ReviewsStars'
import { useEffect } from 'react'
import './ProductDetails.css'

export const ProductDetails = (props) => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
      
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
                                    <a href="#" className="btn btn-outlined-half text-uppercase"></a>
                                </div>
                            </div>
                            <h1 className="product-single__name text-uppercase fw-normal mt-5">
                            </h1>
                            <div className="product-card__review d-flex align-items-center ">
                                <ReviewsStars />
                                <ReviewRate />
                            </div>
                            <div className="product-single__price my-5">
                                <span className="current_price">$449</span>
                            </div>
                            <div className="product-single__short-desc my-5">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora a veritatis iusto
                                    omnis aperiam. Fugit!
                                </p>
                            </div>
                            <AddingCartForm />
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


<div class="swatch-list d-flex align-items-center" id="sizeSwatchList">
    <input type="radio" name="size" id="swatch-0" />
    <label class="swatch js-swatch text-uppercase active" for="swatch-0">xs</label>
    <input type="radio" name="size" id="swatch-1" />
    <label class="swatch js-swatch text-uppercase" for="swatch-1">s</label>
    <input type="radio" name="size" id="swatch-2" />
    <label class="swatch js-swatch text-uppercase" for="swatch-2">m</label>
    <input type="radio" name="size" id="swatch-3" />
    <label class="swatch js-swatch text-uppercase" for="swatch-3">l</label>
    <input type="radio" name="size" id="swatch-4" />
    <label class="swatch js-swatch text-uppercase" for="swatch-4">xl</label>
</div>