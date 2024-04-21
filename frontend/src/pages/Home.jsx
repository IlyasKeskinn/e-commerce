import { CollectionTimer } from "../components/home/collectionTimer/CollectionTimer";
import { ProductsArea } from "../components/home/productsArea/ProductsArea";
import { ShopCollection } from "../components/home/shopCollection/ShopCollection";
import { Slider } from "../components/sliders/Slider";
import "./Home.css"

export const Home = () => {
    return (
        <>
            <Slider />
            <ShopCollection />
            <ProductsArea/>
            <CollectionTimer/>
        </>
    );
}