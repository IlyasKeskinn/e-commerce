import { Slider } from "../../components/Sliders/Slider";
import { ShopCollection } from "../../components/Home/shopCollection/ShopCollection";
import { ProductsArea } from "../../components/Home/productsArea/ProductsArea";
import { CollectionTimer } from "../../components/Home/collectionTimer/CollectionTimer";
import { GridBanner } from "../../components/Home/gridBanner/GridBanner";
import { InstagramArea } from "../../components/Instagram/InstagramArea"
import { ServicesPromotion } from "../../components/ServicePromotion/ServicePromotion";
import "./Home.css"
import prds from "../../../data/products.json"
import { ProductSlider } from "../../components/Home/productSlider/ProductSlider";

export const Home = () => {
    return (
        <>

            <Slider />
            <ShopCollection />
            <ProductsArea />
            <CollectionTimer />
            <GridBanner />
            <InstagramArea />
            <ServicesPromotion />
            <ProductSlider slideItems={prds}/>
        </>
    );
}