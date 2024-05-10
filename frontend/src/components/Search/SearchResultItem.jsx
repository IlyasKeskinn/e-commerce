import React from 'react'
import { Link } from 'react-router-dom';

export const SearchResultItem = ({ product, handleClose }) => {
    const handleClick = () => {
        handleClose();
    }
    return (
        <div className="product-card">
            <div className="pc-img__wrapper">
                <Link to={`/product/${product.seo_link}`} onClick={() => handleClick()} className="product-link">
                    <img src={`./img/images/${product.images[0]}`} className="pc__img "></img>
                </Link>
            </div>
            <div className="pc-info position-relative mt-3 p-1">
                <h6 className="pc__title truncate">
                    <Link to={`/product/${product.seo_link}`} href="#" onClick={() => handleClick()} className="product-link">{product.title}</Link>
                </h6>
            </div>
        </div>
    );
}
