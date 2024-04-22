import { useState } from "react"
import { ProductThumbs } from "./ProductThumbs"
const productImg = [
    {
        "id": "1",
        "imageUrl": "../img/product_simple/product_0.jpg"
    },
    {
        "id": "2",
        "imageUrl": "../img/product_simple/product_0-1.jpg"
    },
    {
        "id": "3",
        "imageUrl": "../img/product_simple/product_0-2.jpg"
    },
    {
        "id": "4",
        "imageUrl": "../img/product_simple/product_0-3.jpg"
    }]

export const ProductGallery = (props) => {
    const [activeImage, setActiveImage] = useState(productImg[0])



    return (
        <div className="col-7 product-gallery">
            <div className="product-singe__imgwrapper">
                <img className="single-img" src={`${activeImage.imageUrl}`}
                    style={{ height: 674, width: 674 }} alt=""></img>
            </div>
            <ProductThumbs activeImage={activeImage} setActiveImage={setActiveImage} productImg={productImg} />
        </div>
    )
}
