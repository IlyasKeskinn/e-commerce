import React from "react";
import { ShopCollection } from "../../components/Home/shopCollection/ShopCollection";
import { ProductsArea } from "../../components/Home/productsArea/ProductsArea";
import { CollectionTimer } from "../../components/Home/collectionTimer/CollectionTimer";
import { GridBanner } from "../../components/Home/gridBanner/GridBanner";
import { InstagramArea } from "../../components/Instagram/InstagramArea"
import { ServicesPromotion } from "../../components/ServicePromotion/ServicePromotion";
import { LimitedEdition } from "../../components/Home/limitedEdition/LimitedEdition";
import "./Home.css"

export const Home = () => {
    return (
        <React.Fragment>
            <div className="home__sections">
                <ShopCollection />
                <ProductsArea />
                <CollectionTimer />
                <GridBanner />
                <InstagramArea />
                <ServicesPromotion />
                <LimitedEdition />
            </div>
        </React.Fragment>
    );
}