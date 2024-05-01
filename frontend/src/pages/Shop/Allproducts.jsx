import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Banner } from "../../components/Banner/Banner";
import { ShopContents } from "../../components/Shop/ShopContents";
import useFetch from "../../hooks/useFetch"
import "./Shop.css"
import { AllProductsSkeleton } from "../../components/Skeltons/AllProductsSkeleton";

export const Allproducts = () => {
    const seo_link = useParams().seo_link;
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState("DEFAULT");
    const [viewItem, setViewItem] = useState(4);
    const fetchURL = `/category/get_category_with_seo/${seo_link}`;

    const { data, isLoading, error } = useFetch(`${fetchURL}?page=${page}&sort=${sort}`);


    useEffect(() => {
        if (!isLoading && data && data.productsForPage) {
            const prd = data.productsForPage
            setProducts(prevPrd => [...prevPrd, ...prd])
        }
    }, [isLoading, data, seo_link])
    useEffect(() => {
        setProducts([]);
        setPage(1);
    }, [seo_link, sort])

    const handleSorting = (sortMethod) => {
        setSort(sortMethod);
    }
    const handleView = (viewNumber) => {
        setViewItem(viewNumber);
    }

    const loadMore = () => {
        setPage(prevPage => prevPage + 1);
    };
    return (
        <React.Fragment>
            {isLoading && <AllProductsSkeleton viewItem={viewItem}/>}
            {error && <div>Error: {error}</div>}
            {!isLoading && data && data.productsForPage &&
                <React.Fragment>
                    <Banner mainCategory={data.category.name} subcategories={data.category.subcategory} />
                    <ShopContents
                        productLen={products.length}
                        totalProducts={data.totalProducts}
                        maincat={{ "name": data.category.name, "seo_link": data.category.seo_link }}
                        products={products}
                        loadMore={loadMore}
                        handleSorting={handleSorting}
                        sort={sort}
                        handleView={handleView}
                        viewItem={viewItem}
                    />
                </React.Fragment>
            }
        </React.Fragment>
    );
}

