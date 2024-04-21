import {ProductCard} from "./ProductCard"
import "./Products.css"

export const Products = () => {
    return (
        <section className="products-area my-5 d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </section>
    );
}