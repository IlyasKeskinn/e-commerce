import { ProductCardSkelton } from "./ProductCardSkeleton";
import "./Products.css"

export const ProductsSkelton = () => {
    //TODO REFACTOR
    return (
        <section className='products-area my-5 d-flex justify-content-center align-items-center'>
            <div className='container'>
                <div className='row'>
                    <ProductCardSkelton />
                    <ProductCardSkelton />
                    <ProductCardSkelton />
                    <ProductCardSkelton />
                </div>
            </div>
        </section>
    );
}


