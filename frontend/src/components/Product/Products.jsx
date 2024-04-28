import React from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard"
import "./Products.css"
import { compose } from "redux";

export const Products = ({products}) => {
    
 
    return (
        <section className="products-area my-5 d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row">
                    {
                        products.map((product) => {
                            return (
                                <ProductCard key={product._id} product={product} />
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         products: state.products
//     }
// }

// export default compose(
//     connect(mapStateToProps)
// )(Products)