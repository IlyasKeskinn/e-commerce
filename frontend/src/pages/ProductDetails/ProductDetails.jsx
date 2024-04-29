import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { ProductDetailsItem } from '../../components/Product/ProductDetails/ProductDetailsItem'
import './ProductDetails.css'


export const ProductDetails = () => {
    const id = useParams().id;
    return (
        <ProductDetailsItem productId={id} />)
}







