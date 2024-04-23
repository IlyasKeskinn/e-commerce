import React from "react";
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from '../../paths/withRouter'
import  ProductDetailsItem  from '../../components/Product/ProductDetails/ProductDetailsItem'
import './ProductDetails.css'

const ProductDetails = (props) => {

    return (
        <ProductDetailsItem product={props.product} />
    )
}


const mapStateToProps = (state, { id }) => {
    console.log(id);
    console.log(state);
    return {
        product: state.products.find(product => { return product.id == id })
    }
}
export default compose(
    withRouter,              // <-- injects a params prop
    connect(mapStateToProps) // <-- props.params accessible
)(ProductDetails);


// <div class="swatch-list d-flex align-items-center" id="sizeSwatchList">
//     <input type="radio" name="size" id="swatch-0" />
//     <label class="swatch js-swatch text-uppercase active" for="swatch-0">xs</label>
//     <input type="radio" name="size" id="swatch-1" />
//     <label class="swatch js-swatch text-uppercase" for="swatch-1">s</label>
//     <input type="radio" name="size" id="swatch-2" />
//     <label class="swatch js-swatch text-uppercase" for="swatch-2">m</label>
//     <input type="radio" name="size" id="swatch-3" />
//     <label class="swatch js-swatch text-uppercase" for="swatch-3">l</label>
//     <input type="radio" name="size" id="swatch-4" />
//     <label class="swatch js-swatch text-uppercase" for="swatch-4">xl</label>
// </div>