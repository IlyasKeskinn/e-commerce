import React from "react";
import { useParams } from "react-router-dom";
import { Banner } from "../../components/Banner/Banner";
import { ShopContents } from "../../components/Shop/ShopContents";
import useFetch from "../../hooks/useFetch"
import "./Shop.css"

export const Shop = () => {
    const id = useParams().id;
    const {data, isLoading, error} = useFetch(`/category/getCategory/${id}`);
    console.log(data);
    return (
        <React.Fragment>
            <Banner />
            <ShopContents/>
        </React.Fragment>
    );
}