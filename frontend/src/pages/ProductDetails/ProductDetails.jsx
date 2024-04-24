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
    return {
        product: state.products.find(product => { return product.id == id })
    }
}
export default compose(
    withRouter,              // <-- injects a params prop
    connect(mapStateToProps) // <-- props.params accessible
)(ProductDetails);


