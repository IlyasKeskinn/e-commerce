import { Link } from "react-router-dom";
import { ReviewRate } from "../Reviews/ReviewRate";
import { ReviewsStars } from "../Reviews/ReviewsStars";
import { addCartLocalStorage, updateCartTotal } from "../../actions/cartAction";
import { connect } from "react-redux";
import uuid from 'react-uuid';
import "./ProductCard.css"


const ProductCard = (props) => {



    const addCart = (e) => {
        e.preventDefault();
        const cartItem = {
            cartId: uuid(),
            id: props.product.id,
            name: props.product.product_name,
            price: props.product.price,
            img: props.product.img,
            selectedColor: props.product.color_options[0] || null,
            selectedSize: props.product.size_options[0] || mull,
        }
        props.dispatch(addCartLocalStorage(cartItem, 1))
        props.dispatch(updateCartTotal())
    }

    return (
        <div className="product-card">
            <div className="pc-img__wrapper">
                <Link to={`product/${props.product.id}`} className="product-link">
                    <img src={`./img/product/${props.product.img}`} alt="" className="pc__img "></img>
                </Link>
                <button data-id="${product.id}" className="pc__addcart button btn-white w-50" id="addToCart" onClick={(e) => { addCart(e) }}>Add Cart</button>
            </div>
            <div className="pc-info position-relative mt-3 p-1">
                <p className="text-secondary pc__category">{props.product.category}</p>
                <Link to={`product/${props.product.id}`}>
                    <h6 className="pc__title">
                        <a href="#" data-id="${product.id}" className="product-link">{props.product.product_name}</a>
                    </h6>
                </Link>
                <div className="d-flex product-card__price">
                    <span className="money price">${props.product.price}</span>
                </div>
                <ReviewsStars />
                <ReviewRate />
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