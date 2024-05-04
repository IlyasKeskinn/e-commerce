import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReviewRate } from "../Reviews/ReviewRate";
import { ReviewsStars } from "../Reviews/ReviewsStars";
import { addCartLocalStorage, updateCartTotal } from "../../actions/cartAction";
import uuid from 'react-uuid';
import { message } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';
import "./ProductCard.css";

const ProductCard = ({ product, dispatch }) => {

    const discount = product.discount ? product.discount : 0;
    let newPrice = product.price.current;
    if (discount !== 0) {
        newPrice = (product.price.current - (product.price.current * discount) / 100).toFixed(2);
    }


    const addCart = (e) => {
        e.preventDefault();
        const cartItem = {
            cartId: uuid(),
            id: product._id,
            name: product.title,
            price: newPrice,
            img: product.images[0],
            selectedColor: product.color_options[0] || null,
            selectedSize: product.size_options[0] || mull,
        }
        dispatch(addCartLocalStorage(cartItem, 1));
        dispatch(updateCartTotal());
        message.success("Product add to cart.")
    }

    //TODO REFACTOR
    if (!product.images) {
        return <div></div>
    }
    return (
        <div className="product-card">
            <div className="pc-img__wrapper">
                <Link to={`/product/${product.seo_link}`} className="product-link">
                    <img src={`../src/images/${product.images[0]}`} alt={`${product.images[0]}`} className="pc__img "></img>
                </Link>
                <button className="pc__addcart button btn-white" id="addToCart" onClick={(e) => { addCart(e) }}><ShoppingOutlined /> Add Cart</button>
            </div>
            <div className="pc-info position-relative mt-3 p-1">
                <p className="text-secondary pc__category">{product.subcategories[0].name}</p>

                <Link to={`/product/${product._id}`}>
                    <h6 className="pc__title truncate">
                        <a href="#" className="product-link">{product.title}</a>
                    </h6>
                </Link>
                <div className="d-flex product-card__price">
                    <span className="money price">${newPrice.toFixed(2)}</span>
                </div>
                <ReviewsStars />
                <ReviewRate reviews={product.reviews.length} />
                <button className="pc__btn d-flex align-items-center justify-content center" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                        className="bi bi-heart" viewBox="0 0 16 16">
                        <path
                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg>
                </button>
            </div>
        </div>

    );
}

export default connect()(ProductCard);