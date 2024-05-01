import { ShopSettings } from "./ShopSettings";
import { Products } from "../Product/Products";
import { Pagination } from "../Pagination/Pagination";
import { useState } from "react";

export const ShopContents = ({ products, maincat, subcat, totalProducts, productLen, loadMore, handleSorting, sort, handleView, viewItem }) => {
    return (
        <section className="shop-main d-flex justify-content-center align-items-center">
            <div className="container">
                <ShopSettings handleView={handleView} handleSorting={handleSorting} subcat={subcat} maincat={maincat} sort={sort} />
                <Products viewItem={viewItem} products={products} />
                <Pagination loadMore={loadMore} totalProducts={totalProducts} productLen={productLen} />
            </div>
        </section>
    );
}