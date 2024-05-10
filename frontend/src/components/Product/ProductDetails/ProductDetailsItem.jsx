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
    const productFetchURL = `/product/getProductBySeo/`;
    const product = useFetch(`${productFetchURL}${seo_link}`);
    const [newPrice, setNewPrice] = useState(0);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (!product.isLoading && product.data.price) {
            const discount = product.data.discount ? product.data.discount : 0;
            let price = product.data.price.current;
            if (discount !== 0) {
                price = price - (price * discount) / 100;
            }
            setNewPrice(price);
            setComments(product.data.reviews)
        }
    }, [product.data, product.isLoading]);

    const handleUpdateComment = (commentId) => {
        const updatedComment = comments.filter((comment) => comment._id !== commentId);
        setComments(updatedComment);
    }

    if (product.isLoading || !product.data || !product.data.images) {
        return <ProductDetailSkeleton />
    }
    return (
        <section className="product-single d-flex flex-wrap justify-content-center align-items-center">
            <div className="container product-single-wrapper">
                <div className="product-row d-flex justify-content-between ">
                    <ProductGallery images={product.data.images} />
                    <div className="col-5 ">
                        <div className="product-info__wrapper">
                            <div className="d-flex justify-content-between align-items-center my-5">
                                <div className="breadcrumb">
                                    <Link to={`/`} className={`btn btn-outlined-half text-uppercase`}>Home /</Link>
                                    <Link to={`/`} className={`btn btn-outlined-half text-uppercase`}> {product.data.categories.name}</Link>
                                </div>
                            </div>
                            <h1 className="product-single__name text-uppercase fw-normal mt-5">
                                {product.data.title}
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
                                    {product.data.shortDesc}
                                </p>
                            </div>
                            <AddingCartForm product={product.data} newPrice={newPrice} />
                            <ProductLinks />
                            <ProductMeta data={product.data.subcategory} />
                        </div>
                    </div>
                </div>
                <ProductTabs reviews={comments} handleUpdateComment={handleUpdateComment} productId={product.data._id} desc={product.data.desc} />
            </div>
        </section>
    )
}




