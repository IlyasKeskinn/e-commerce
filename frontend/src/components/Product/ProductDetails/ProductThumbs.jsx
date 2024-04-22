export const ProductThumbs = () => {
    return (
        <div className="product-thumb swiper mySwiper2">
            <ul className="gallery-thumbs swiper-wrapper my-2">
                <li className="swiper-slide gallery-thumbs__item">
                    <img src="../img/product_simple/product_0.jpg" style={{ height: 104, width: 104 }}
                        className="img-fluid gallery-thumbs__img active" alt=""></img>
                </li>
                <li className="swiper-slide gallery-thumbs__item" data-id="1">
                    <img src="../img/product_simple/product_0-1.jpg" style={{ height: 104, width: 104 }}
                        className="img-fluid gallery-thumbs__img" alt=""></img>
                </li>
                <li className="swiper-slide gallery-thumbs__item">
                    <img src="../img/product_simple/product_0-2.jpg" style={{ height: 104, width: 104 }}
                        className="img-fluid gallery-thumbs__img" alt=""></img>
                </li>
                <li className="swiper-slide gallery-thumbs__item">
                    <img style={{ height: 104, width: 104 }} src="../img/product_simple/product_0-3.jpg"
                        className="img-fluid gallery-thumbs__img" alt=""></img>
                </li>
            </ul>
            <div className="swiper-button swiper-button-prev"></div>
            <div className="swiper-button swiper-button-next"></div>
        </div>
    )
}
