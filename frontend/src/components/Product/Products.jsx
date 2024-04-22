import { ProductCard } from "./ProductCard"
import "./Products.css"
import productsData from '../../../data/products.json'

export const Products = () => {
    return (
        <section className="products-area my-5 d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row">
                    {
                        productsData.map((product) => {
                            return <ProductCard key={product.id} product={product} />
                        })
                    }
                </div>
            </div>
        </section>
    );
}