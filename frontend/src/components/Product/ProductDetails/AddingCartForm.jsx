import { useState } from "react"
import { connect } from "react-redux";
import uuid from "react-uuid";
import { addCartLocalStorage, updateCartLocalStorage, updateCartTotal } from "../../../actions/cartAction";
const AddingCartForm = (props) => {
    const [selectedSize, setSize] = useState(props.product.size_options[0]);
    const [selectedColor, setColor] = useState(props.product.color_options[0]);
    const [quantity, setQuantity] = useState(1);

    const handleSizeChange = (size) => {
        setSize(size)
    }
    const handleColorChange = (color) => {
        setColor(color)
    }
    const handeleQantity = (e) => {
        setQuantity(parseInt(10))
    }
    const incrementQunatity = () => {
        if (quantity < 100) {
            setQuantity(prevQuantity => prevQuantity + 1);
        }
    }


    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    }

    const handleAddingCart = (e) => {
        e.preventDefault();
        const cartItem = {
            cartId: uuid(),
            id: props.product._id,
            name: props.product.title,
            price: props.newPrice,
            img: props.product.img,
            selectedColor: selectedColor || props.product.color_options[0],
            selectedSize: selectedSize || props.product.size_options[0],
        }
        props.dispatch(addCartLocalStorage(cartItem, quantity));
        props.dispatch(updateCartTotal());
    }


    return (
        <form onSubmit={handleAddingCart} name="addtocart-form my-5">
            <div className="product-single__swatches">
                <div className="product-swatch text-swatches ">
                    <span>Size</span>
                    <div className="swatch-list d-flex align-items-center" id="sizeSwatchList">
                        {props.product.size_options.map((size, index) => {
                            return (<div key={index}>
                                <input type="radio" name={`size-${size}`} id={`size-${size}`} checked={selectedSize === size} onChange={() => { handleSizeChange(size) }} />
                                <label label={`true`} className="swatch js-swatch text-uppercase" htmlFor={`size-${size.toString()}`}>{size.toString()}</label>
                            </div>)
                        })}
                    </div>
                    <a href="#" className="sizeguiedelink">Size Guide</a>
                </div>
                <div className="product-swatch color-swatches">
                    <span>Color</span>
                    <div className="swatch-list d-flex align-items-center" id="colorSwatchList">
                        {props.product.color_options.map((color, index) => {
                            return (<div key={index}>
                                <input type="radio" name={`swatch-color_${color}`} id={`swatch-color_${color}`} checked={selectedColor === color} onChange={() => { handleColorChange(color) }} />
                                <label label={`true`} className="swatch swatch-color " htmlFor={`swatch-color_${color.toString()}`} style={{ color: color.toString() }}></label>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
            <div className="product-single__addcart d-flex align-items-center ">
                <div className="quantity-control position-relative">
                    <input type="number" name="quantity" className="quantity-control__number text-center" onChange={handeleQantity}
                        value={quantity} min="1" />
                    <a className="quantity-control__reduce" onClick={() => decrementQuantity()} >-</a>
                    <a className="quantity-control__increment" onClick={() => incrementQunatity()}>+</a>
                </div>
                <button type="submit"
                    className="button btn-primary text-uppercase btn-addtocart js-open-aside">Add To
                    Cart</button>
            </div>
        </form>
    )
}

export default connect()(AddingCartForm);