import { connect } from "react-redux";
import { ProductCard } from "./ProductCard"
import "./Products.css"

export const Products = (props) => {
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
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Products)