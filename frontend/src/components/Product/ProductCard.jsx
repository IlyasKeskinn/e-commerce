import { Link } from "react-router-dom";
import { ReviewRate } from "../Reviews/ReviewRate";
import { ReviewsStars } from "../Reviews/ReviewsStars";
import "./ProductCard.css"
export const ProductCard = ({ product }) => {
 
      
    return (
        <Link to={`/product/${product.id}`}>
            <div className="product-card">
                <div className="pc-img__wrapper">
                    <a href="#" data-id="${product.id}" className="product-link">
                        <img src={`./img/product/${product.img}`} alt="" className="pc__img "></img>
                    </a>
                    <button data-id="${product.id}" className="pc__addcart button btn-white w-50" id="addToCart">Add Cart</button>
                </div>
                <div className="pc-info position-relative mt-3 p-1">
                    <p className="text-secondary pc__category">{product.category}</p>
                    <h6 className="pc__title">
                        <a href="#" data-id="${product.id}" className="product-link">{product.product_name}</a>
                    </h6>
                    <div className="d-flex product-card__price">
                        <span className="money price">${product.price}</span>
                    </div>
                    <ReviewsStars />
                    <ReviewRate />
                    <button className="pc__btn d-flex align-items-center justify-content center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                            className="bi bi-heart" viewBox="0 0 16 16">
                            <path
                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                    </button>
                </div>
            </div>
        </Link>
    );
}