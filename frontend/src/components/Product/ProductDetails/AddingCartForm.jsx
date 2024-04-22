export const AddingCartForm = () => {
    return (
        <form action="" name="addtocart-form my-5">
            <div className="product-single__swatches">
                <div className="product-swatch text-swatches ">
                    <span>Size</span>

                    <a href="#" className="sizeguiedelink">Size Guide</a>
                </div>
                <div className="product-swatch color-swatches">
                    <span>Color</span>
                    <div className="swatch-list d-flex align-items-center" id="colorSwatchList">
                    </div>
                </div>
            </div>
            <div className="product-single__addcart d-flex align-items-center ">
                <div className="quantity-control position-relative">
                    <input type="number" name="quantity" className="quantity-control__number text-center"
                        value="1" min="1" />
                    <a className="quantity-control__reduce">-</a>
                    <a className="quantity-control__increment">+</a>
                </div>
                <button type="submit"
                    className="button btn-primary text-uppercase btn-addtocart js-open-aside">Add To
                    Cart</button>
            </div>
        </form>
    )
}
