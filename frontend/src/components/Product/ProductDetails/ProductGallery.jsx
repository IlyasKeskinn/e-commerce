import { useState } from "react"
import { ProductThumbs } from "./ProductThumbs"


export const ProductGallery = ({ images, loading }) => {
    const [activeImage, setActiveImage] = useState(images[0])
    return (
        <div className="col-7 product-gallery">
            <div className="product-singe__imgwrapper">
                <img className="single-img" src={`./img/images/${activeImage}`}
                    style={{ height: 674, width: 674 }} alt=""></img>
            </div>
            <ProductThumbs activeImage={activeImage} setActiveImage={setActiveImage} productImg={images} loading={loading} />
        </div>
    )
}
