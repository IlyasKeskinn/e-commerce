import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Banner } from "../../components/Banner/Banner";
import { ShopContents } from "../../components/Shop/ShopContents";
import useFetch from "../../hooks/useFetch"
import "./Shop.css"
import { AllProductsSkeleton } from "../../components/Skeltons/AllProductsSkeleton";

export const Allproducts = () => {
    const seo_link = useParams().seo_link;
    let fetchURL = `/category/get_category_with_seo/${seo_link}`

    const { data, isLoading, error } = useFetch(`${fetchURL}`);
    if (isLoading || !data.products || !data.subcategory) {
        return <AllProductsSkeleton />
    }
    const maincat = { "name": data.name, "seo_link": data.seo_link }

    return (
        <React.Fragment>
            <Banner mainCategory={data.name} subcategories={data.subcategory} />
            <ShopContents maincat={maincat} products={data.products} />
        </React.Fragment>
    );
}