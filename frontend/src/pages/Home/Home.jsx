import { Slider } from "../../components/Sliders/Slider";
import { ShopCollection } from "../../components/Home/shopCollection/ShopCollection";
import { ProductsArea } from "../../components/Home/productsArea/ProductsArea";
import {CollectionTimer} from"../../components/Home/collectionTimer/CollectionTimer";
import {GridBanner} from"../../components/Home/gridBanner/GridBanner";
import {InstagramArea} from"../../components/Instagram/InstagramArea"
import "./Home.css"
import { ServicesPromotion } from "../../components/ServicePromotion/ServicePromotion";
import { PageOverlay } from "../../components/PageOverlay/PageOverlay";
import { AuthAside } from "../../components/Asides/AuthAside/AuthAside";
import { ShoppingCartAside } from "../../components/Asides/CartAside/ShoppingCartAside";

export const Home = () => {
    return (
        <>
            <Slider />
            <ShopCollection />
            <ProductsArea />
            <CollectionTimer/>
            <GridBanner/>
            <InstagramArea/>
            <ServicesPromotion/>
            <PageOverlay/>
            <AuthAside/>
            <ShoppingCartAside/>
        </>
    );
}