import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContents } from "../../components/Shop/ShopContents";
import useFetch from "../../hooks/useFetch"
import { ShopContentSkeleton } from "../../components/Skeltons/ShopContentSkeleton";
import "./Shop.css"


export const Shop = () => {
    const seo_link = useParams().seo_link;
    let fetchURL = `/category/get_subcategory_withSeo/${seo_link}`
    const [page, setPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [sort, setSort] = useState("DEFAULT");
    const [viewItem, setViewItem] = useState(4);
    const { data, isLoading, error } = useFetch(`${fetchURL}?page=${page}&sort=${sort}`);

    useEffect(() => {
        if (!isLoading && data && data.productsForPage) {
            const prd = data.productsForPage
            setProducts(prevPrd => [...prevPrd, ...prd])
        }
    }, [isLoading, data, seo_link])
    useEffect(() => {
        setProducts([]);
    }, [seo_link, sort])
    const loadMore = () => {
        setPage(prevPage => prevPage + 1);
    };
    const handleSorting = (sortMethod) => {
        setSort(sortMethod);
    }
    const handleView = (viewNumber) => {
        setViewItem(viewNumber);
    }

    return (
        <React.Fragment>
            {isLoading && <ShopContentSkeleton />}
            {error && <div>{error}</div>}
            {!isLoading && data && data.productsForPage &&
                <React.Fragment>
                    <ShopContents
                        maincat={data.category.maincategory}
                        subcat={{ "name": data.category.name, "seo_link": data.category.seo_link }}
                        products={products}
                        productLen={products.length}
                        totalProducts={data.totalProducts}
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