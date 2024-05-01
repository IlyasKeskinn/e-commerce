import React from "react";
import ProductCard from "./ProductCard"
import "./Products.css"

export const Products = ({ products }) => {
    return (
        <section className="products-area my-5 d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row">
                    {products.map((product) => { return (<ProductCard key={product._id} product={product} />) })}
                </div>
            </div>
        </section>
    );
}
