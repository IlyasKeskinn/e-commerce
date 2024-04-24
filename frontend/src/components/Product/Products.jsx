import React from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard"
import "./Products.css"
import { compose } from "redux";

export const Products = (props) => {
    //TODO loading component
    if (!props.products) {
        return (
            <div>
                <p>Loading....</p>
            </div>
        );
    }
    return (
        <section className="products-area my-5 d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row">
                    {
                        props.products.map((product) => {
                            return (
                                <ProductCard key={product.id} product={product} />
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        products: state.products
    }
}

export default compose(
    connect(mapStateToProps)
)(Products)