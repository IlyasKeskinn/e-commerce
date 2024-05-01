import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { ProductDetailsItem } from '../../components/Product/ProductDetails/ProductDetailsItem'
import './ProductDetails.css'


export const ProductDetails = () => {
    const seo_link = useParams().seo_link;
    return (
        <ProductDetailsItem seo_link={seo_link} />)
}







