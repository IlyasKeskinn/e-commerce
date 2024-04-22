import { ProductThumbs } from "./ProductThumbs"

export const ProductGallery = () => {
    return (
        <div className="col-7 product-gallery">
            <div className="product-singe__imgwrapper">
                <img className="single-img" src="../img/product_simple/product_0.jpg"
                    style={{ height: 674, width: 674 }} alt=""></img>
            </div>
            {/* <ProductThumbs />    */}
        </div>
    )
}
