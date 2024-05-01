import React from "react";
import { useParams } from "react-router-dom";
import { ShopContents } from "../../components/Shop/ShopContents";
import useFetch from "../../hooks/useFetch"
import { ProductsSkelton } from "../../components/Skeltons/ProductsSkeleton"
import "./Shop.css"
import { ShopContentSkeleton } from "../../components/Skeltons/ShopContentSkeleton";


export const Shop = () => {
    const seo_link = useParams().seo_link;
    let fetchURL = `/category/get_subcategory_withSeo/${seo_link}`

    const { data, isLoading, error } = useFetch(`${fetchURL}`);
    if (isLoading || !data.products) {
        return <ShopContentSkeleton />
    }

    const subcat = { "name": data.name, "seo_link": data.seo_link }

    return (
        <React.Fragment>
            <ShopContents maincat={data.maincategory} subcat={subcat} products={data.products} />
        </React.Fragment>
    );
}